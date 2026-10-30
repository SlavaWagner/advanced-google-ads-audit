#!/usr/bin/env node

import { Command } from 'commander';
import { input } from '@inquirer/prompts';
import chalk from 'chalk';
import http from 'http';
import { URL, fileURLToPath } from 'url';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

import { getConfig, saveConfig, getAccessToken, refreshAccessToken } from '../src/config.js';
import { listAgents, initStorage } from '../src/storage.js';
import AuditAgent from '../src/agents/AuditAgent.js';

// Initialize storage folders and default agent configurations
initStorage();

function getAsciiLogo() {
  const greenCube = chalk.hex('#159A35');
  const cyanCube = chalk.hex('#06b6d4');
  const blueCube = chalk.hex('#2563EB');
  
  return [
    '',
    greenCube("             +---+ ") + cyanCube("     +---+ ") + blueCube("     +---+ "),
    greenCube("            /   /| ") + cyanCube("    /   /| ") + blueCube("    /   /| "),
    greenCube("           +---+ | ") + cyanCube("  +---+ | ") + blueCube("  +---+ | "),
    greenCube("           |   |/  ") + cyanCube("  |   |/  ") + blueCube("  |   |/  "),
    greenCube("           +---+   ") + cyanCube("  +---+   ") + blueCube("  +---+   "),
    blueCube("     +---+ ") + greenCube("     +---+ ") + blueCube("     +---+ "),
    blueCube("    /   /| ") + greenCube("    /   /| ") + blueCube("    /   /| "),
    blueCube("   +---+ | ") + greenCube("  +---+ | ") + blueCube("  +---+ | "),
    blueCube("   |   |/  ") + cyanCube("  |   |/  ") + blueCube("  |   |/  "),
    blueCube("   +---+   ") + greenCube("  +---+   ") + blueCube("  +---+   "),
    cyanCube("     +---+ ") + blueCube("     +---+ ") + greenCube("     +---+ "),
    cyanCube("    /   /| ") + blueCube("    /   /| ") + greenCube("    /   /| "),
    cyanCube("   +---+ | ") + blueCube("  +---+ | ") + greenCube("  +---+ | "),
    cyanCube("   |   |/  ") + blueCube("  |   |/  ") + greenCube("  |   |/  "),
    cyanCube("   +---+   ") + blueCube("  +---+   ") + blueCube("  +---+   "),
    '',
    chalk.bold.green('=== Advanced Google Ads Audit (High Ticket Lead Gen) ==='),
    chalk.cyan('Account Checkup & Strategy SOP Compliance Audit Engine'),
    chalk.gray('Created with the Google Antigravity CLI ecosystem'),
    ''
  ].join('\n');
}

// Check if running inside Google Antigravity CLI (agy)
function isRunningInsideAntigravity() {
  if (process.argv.includes('--force') || process.argv.includes('--inside-agy')) {
    return true;
  }
  return Boolean(
    process.env.ANTIGRAVITY_PROJECT_ID ||
    process.env.ANTIGRAVITY_LS_VERSION ||
    process.env.ANTIGRAVITY_SOURCE_METADATA ||
    process.env.ANTIGRAVITY_TRAJECTORY_ID ||
    process.env.ANTIGRAVITY_AGENT ||
    process.env.JETSKI_APP_DATA_DIR ||
    process.env.AGY_SESSION ||
    process.env.AGY
  );
}

// Interceptor notice: instructs user to start Antigravity
function showAgyPrerequisiteWarning(attemptedCmd) {
  const yellowBox = chalk.hex('#eab308');
  const greenText = chalk.bold.hex('#159A35');
  const cyanText = chalk.bold.hex('#06b6d4');
  const whiteBold = chalk.bold.white;
  
  console.log(getAsciiLogo());
  console.log(yellowBox('================================================================================'));
  console.log(yellowBox('⚠️   PREREQUISITE REQUIRED: GOOGLE ANTIGRAVITY CLI ("agy")'));
  console.log(yellowBox('================================================================================'));
  console.log();
  console.log(whiteBold('  Advanced Google Ads Audit operates exclusively'));
  console.log(whiteBold('  INSIDE the Antigravity CLI environment!'));
  console.log();
  console.log(chalk.yellow('  Please start Antigravity beforehand using the command "agy", and then'));
  console.log(chalk.yellow('  interactively execute the advanced-google-ads-audit commands to manage'));
  console.log(chalk.yellow('  account audits and strategy SOP compliance workflows.'));
  console.log();
  console.log(chalk.gray('  Notice: Outside the Antigravity CLI shell, AI processing is halted.'));
  console.log(chalk.gray('  Static output rendering has been bypassed.'));
  console.log();
  console.log(cyanText('  👉 STEP 1:'));
  console.log(whiteBold('     Open your terminal and launch Antigravity with:'));
  console.log();
  console.log('        ' + greenText('agy'));
  console.log();
  console.log(cyanText('  👉 STEP 2:'));
  console.log(whiteBold('     Inside Antigravity, interactively chat with the audit agents and'));
  console.log(whiteBold('     trigger individual strategy SOP checks or full account compliance audits.'));
  console.log();
  console.log(yellowBox('================================================================================'));
  console.log(chalk.gray('  (Developer Override: Execute command with "--force" or "--inside-agy")'));
  console.log();
}

// Intercept execution early if executed outside Antigravity
const rawArgs = process.argv.slice(2);
const isDashboardRequested = rawArgs.includes('dashboard');

if (!isRunningInsideAntigravity() && !isDashboardRequested) {
  showAgyPrerequisiteWarning(rawArgs.join(' '));
  process.exit(0);
}

// Strip bypass flags so Commander doesn't choke on them
process.argv = process.argv.filter(arg => arg !== '--force' && arg !== '--inside-agy');

const program = new Command();

program
  .name('advanced-google-ads-audit')
  .description('Advanced Google Ads Audit AI Agent (High Ticket Lead Gen) - Account checkup & SOP strategy compliance auditing')
  .version('1.0.0');

program.addHelpText('before', getAsciiLogo());

// SETUP Command
program
  .command('setup')
  .description('Setup Google Ads API Credentials and Authorize OAuth2')
  .action(async () => {
    console.log(chalk.bold.cyan('\n=== Google Ads Credentials & OAuth2 Setup ===\n'));

    const current = getConfig();

    try {
      const customerId = await input({
        message: 'Google Ads Customer ID (10 digits):',
        default: current.customerId
      });

      const clientId = await input({
        message: 'Google Ads Client ID:',
        default: current.clientId
      });

      const clientSecret = await input({
        message: 'Google Ads Client Secret:',
        default: current.clientSecret
      });

      const developerToken = await input({
        message: 'Google Ads Developer Token (MCC):',
        default: current.developerToken
      });

      const loginCustomerId = await input({
        message: 'Manager Login Customer ID (Optional):',
        default: current.loginCustomerId || ''
      });

      const updatedConfig = {
        ...current,
        customerId,
        clientId,
        clientSecret,
        developerToken,
        loginCustomerId
      };
      saveConfig(updatedConfig);

      console.log(chalk.yellow('\nStarting OAuth2 Authentication...'));
      const redirectUri = 'http://localhost:8085';
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=https://www.googleapis.com/auth/adwords&access_type=offline&prompt=consent`;

      console.log(chalk.green('\nPlease open the following authorization URL in your browser:\n'));
      console.log(chalk.underline.blue(authUrl));
      console.log(chalk.gray('\nWaiting for authorization callback on port 8085...'));

      let oauthCode = '';
      const getAuthCodePromise = new Promise((resolve, reject) => {
        const server = http.createServer(async (req, res) => {
          try {
            const urlObj = new URL(req.url, 'http://localhost:8085');
            const code = urlObj.searchParams.get('code');
            if (code) {
              res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
              res.end('<h1>Authentication Successful</h1><p>You may now close this browser tab and return to your terminal.</p>');
              resolve(code);
            } else {
              res.writeHead(400);
              res.end('Authentication failed: Missing authorization code in callback URL.');
              reject(new Error('No authorization code received.'));
            }
          } catch (err) {
            reject(err);
          } finally {
            server.close();
          }
        });

        server.setTimeout(180000);
        server.on('timeout', () => {
          server.close();
          reject(new Error('OAuth authentication timed out after 3 minutes.'));
        });

        server.listen(8085, (err) => {
          if (err) reject(err);
        });
      });

      try {
        oauthCode = await getAuthCodePromise;
        console.log(chalk.green('[OK] Authorization code successfully received!'));
      } catch (authError) {
        console.log(chalk.yellow(`\nAutomatic callback failed: ${authError.message}`));
        oauthCode = await input({ message: 'Enter authorization code manually:' });
      }

      if (!oauthCode) throw new Error('No authorization code provided.');

      console.log(chalk.yellow('Exchanging authorization code for OAuth2 Refresh Token...'));
      const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
        code: oauthCode,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
      });

      const { access_token, refresh_token, expires_in } = tokenResponse.data;

      const finalConfig = getConfig();
      finalConfig.accessToken = access_token;
      if (refresh_token) finalConfig.refreshToken = refresh_token;
      finalConfig.tokenExpiry = Date.now() + (expires_in - 300) * 1000;

      saveConfig(finalConfig);

      console.log(chalk.bold.green('\n[OK] Setup completed successfully! Configuration saved to config.json.'));
      console.log(chalk.green(`Access Token acquired, valid until: ${new Date(finalConfig.tokenExpiry).toLocaleTimeString()}\n`));

    } catch (error) {
      console.error(chalk.bold.red('\n[ERROR] Setup failed:'), error.response ? JSON.stringify(error.response.data) : error.message);
    }
  });

// Helper function to print strategy audit result
function printStrategyAuditResult(result) {
  const color = result.compliancePercent >= 80 ? chalk.green : result.compliancePercent >= 60 ? chalk.yellow : chalk.red;
  console.log(chalk.bold.white(`Strategy: ${result.strategyTitle}`));
  console.log(`  Compliance Score: ${color(result.compliancePercent + '%')} (${result.status})`);
  
  if (result.findings && result.findings.length > 0) {
    console.log(chalk.cyan(`  Audit Findings:`));
    result.findings.forEach(f => console.log(chalk.gray(`    • ${f}`)));
  }

  if (result.missingComponents && result.missingComponents.length > 0) {
    console.log(chalk.red(`  Missing Components:`));
    result.missingComponents.forEach(mc => console.log(chalk.gray(`    - ${mc}`)));
  }

  if (result.implementationSteps && result.implementationSteps.length > 0) {
    console.log(chalk.green(`  Actionable Implementation Roadmap:`));
    result.implementationSteps.forEach((step, idx) => console.log(chalk.gray(`    ${idx + 1}. ${step}`)));
  }
  console.log(chalk.gray('--------------------------------------------------'));
}

// FULL AUDIT Command
program
  .command('audit')
  .alias('checkup')
  .description('Run Full Advanced Google Ads Account Audit & Strategy SOP Compliance Checkup')
  .option('-c, --customer-id <id>', 'Override Google Ads Customer ID')
  .action(async (options) => {
    console.log(chalk.bold.cyan('\n=== Advanced Google Ads Account Audit (High Ticket Lead Gen) ===\n'));

    const config = getConfig();
    if (options.customerId) {
      config.customerId = options.customerId;
    }

    let accessToken = null;
    if (config.refreshToken) {
      try {
        console.log(chalk.yellow('Validating Google Ads OAuth2 Access Token...'));
        accessToken = await getAccessToken();
        console.log(chalk.green('[OK] Access Token ready.'));
      } catch (err) {
        console.log(chalk.yellow(`Notice: Access token refresh bypassed (${err.message}). Proceeding with SOP Audit mode.`));
      }
    }

    try {
      const auditor = new AuditAgent();
      const report = await auditor.runAudit(config, accessToken);

      console.log(chalk.bold.green('\n=== GOOGLE ADS ACCOUNT AUDIT SCOREBOARD ==='));
      console.log(`Overall Compliance Score: ${chalk.bold.cyan(report.overallAuditScorePercent + '%')}\n`);

      report.strategyCheckupResults.forEach(s => {
        printStrategyAuditResult(s);
      });

      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      const projectRoot = path.resolve(__dirname, '..');
      const timestampStr = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.resolve(projectRoot, `storage/runs/audit-report-${timestampStr}.json`);
      const mdReportPath = path.resolve(projectRoot, `storage/runs/audit-report-${timestampStr}.md`);
      
      if (!fs.existsSync(path.dirname(reportPath))) {
        fs.mkdirSync(path.dirname(reportPath), { recursive: true });
      }

      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

      // Generate Markdown Report File
      const mdLines = [
        `# Advanced Google Ads Account Audit Report`,
        `**Timestamp**: ${report.timestamp}`,
        `**Customer ID**: ${report.customerId}`,
        `**Overall Compliance Score**: ${report.overallAuditScorePercent}%`,
        ``,
        `## Executive Summary`,
        `${report.executiveSummary}`,
        ``,
        `## Strategy Compliance Scoreboard`,
        ...report.strategyCheckupResults.map(s => [
          `### ${s.strategyTitle} (${s.compliancePercent}% - ${s.status})`,
          `**Findings**:`,
          ...s.findings.map(f => `- ${f}`),
          `**Missing Components**:`,
          ...s.missingComponents.map(m => `- ${m}`),
          `**Implementation Steps**:`,
          ...s.implementationSteps.map((st, i) => `${i + 1}. ${st}`),
          ``
        ].join('\n'))
      ];
      fs.writeFileSync(mdReportPath, mdLines.join('\n'), 'utf8');

      console.log(chalk.bold.green(`\n[OK] Complete Audit Report saved persistently to:`));
      console.log(chalk.cyan(`  JSON: ${reportPath}`));
      console.log(chalk.cyan(`  Markdown: ${mdReportPath}\n`));

    } catch (error) {
      console.error(chalk.bold.red('\n[ERROR] Audit failed:'), error.message);
    }
  });

// ============================================================================
// DEDICATED INDIVIDUAL STRATEGY COMMANDS (11 STRATEGIES)
// ============================================================================

const STRATEGIES_LIST = [
  {
    slug: 'conversion-value-hierarchy',
    aliases: ['hierarchy', 'strategy-01'],
    title: 'Conversion Value Hierarchy',
    desc: 'Audit two-stage conversion hierarchy, micro-conversions and offline CRM value imports'
  },
  {
    slug: 'angles-detection',
    aliases: ['angles', 'strategy-02'],
    title: 'Angles Detection & Competitor Analysis',
    desc: 'Audit pain point and solution frame alignment against market competitors'
  },
  {
    slug: 'ads-frameworks',
    aliases: ['frameworks', 'strategy-03'],
    title: 'Ads Frameworks & Psychological Copy',
    desc: 'Audit the 6 framework clusters (PAS, AIDA, FAB, Sophistication, Lifecycle) and pre-scoring'
  },
  {
    slug: 'massen-asset-testing',
    aliases: ['mass-asset-testing', 'asset-testing', 'strategy-04'],
    title: 'Mass Asset Testing (570-1380 Assets)',
    desc: 'Audit creative test volume per campaign offer and matrix pre-screening'
  },
  {
    slug: 'ai-assets-bulk-launch',
    aliases: ['bulk-launch', 'bulk-upload', 'strategy-05'],
    title: 'AI Assets Bulk Launch (Google Ads Editor)',
    desc: 'Audit 10x20 bulk staging architecture and strict PAUSED launch safeguards'
  },
  {
    slug: 'budget-shifting',
    aliases: ['shifting', 'strategy-06'],
    title: 'Budget Shifting Across 9 Reporting Levels',
    desc: 'Audit systematic bi-weekly budget reallocation to top-performing angles'
  },
  {
    slug: 'micro-location-testing',
    aliases: ['micro-location', 'locations', 'strategy-07'],
    title: 'Micro Location Testing (1-km Radius)',
    desc: 'Audit hyper-local radius coordinate needleheads via Maps geospatial data'
  },
  {
    slug: 'pmax-zielgruppensignale',
    aliases: ['pmax-audience-signals', 'audience-signals', 'strategy-08'],
    title: 'PMax Audience Signals (5-Tier Framework)',
    desc: 'Audit 5-tier audience signals (Narrow, Standard, Broad, 30s Visitors, Competitors)'
  },
  {
    slug: 'ziel-cpa-tests',
    aliases: ['target-cpa-tests', 'cpa-tests', 'strategy-09'],
    title: 'Target CPA Tests & Algorithmic Conditioning',
    desc: 'Audit continuous raising and lowering protocol (10-15% steps) over 2-3 months'
  },
  {
    slug: 'ziel-roas-tests',
    aliases: ['target-roas-tests', 'roas-tests', 'strategy-10'],
    title: 'Target ROAS Tests (Maximize Conversion Value)',
    desc: 'Audit step-wise ROAS adjustment protocol (10-20% increments) in Value Bidding'
  },
  {
    slug: 'kuenstliche-budget-ueberhoehung',
    aliases: ['artificial-budget-inflation', 'budget-inflation', 'strategy-11'],
    title: 'Artificial Budget Inflation (Target Impression Share)',
    desc: 'Audit Top of Page domination protocol for high-ticket low-volume campaigns'
  }
];

STRATEGIES_LIST.forEach(strat => {
  const cmd = program
    .command(strat.slug)
    .description(`Audit Strategy: ${strat.title} - ${strat.desc}`)
    .option('-c, --customer-id <id>', 'Override Google Ads Customer ID');

  strat.aliases.forEach(alias => cmd.alias(alias));

  cmd.action(async (options) => {
    console.log(chalk.bold.cyan(`\n=== Strategy Audit: ${strat.title} ===\n`));
    const config = getConfig();
    if (options.customerId) {
      config.customerId = options.customerId;
    }

    try {
      const auditor = new AuditAgent();
      const result = auditor.evaluateSingleStrategy(strat.slug, config);
      printStrategyAuditResult(result);
      console.log(chalk.green(`[OK] Strategy evaluation complete for: ${strat.title}\n`));
    } catch (err) {
      console.error(chalk.bold.red(`[ERROR] Strategy audit failed: ${err.message}`));
    }
  });
});

// Generic STRATEGY command
program
  .command('strategy <name>')
  .description('Audit a specific strategy SOP by name or slug')
  .action((name) => {
    const auditor = new AuditAgent();
    try {
      const result = auditor.evaluateSingleStrategy(name, getConfig());
      printStrategyAuditResult(result);
    } catch (err) {
      console.error(chalk.red(`[ERROR]: ${err.message}`));
    }
  });

// REFRESH TOKEN Command
program
  .command('refresh-token')
  .description('Manually refresh Google Ads access token')
  .action(async () => {
    try {
      console.log(chalk.yellow('Requesting fresh Access Token...'));
      const token = await refreshAccessToken();
      console.log(chalk.green('[OK] Access Token updated successfully.'));
      console.log(chalk.gray(`Token: ${token.substring(0, 10)}...`));
    } catch (error) {
      console.error(chalk.red('[ERROR]:'), error.message);
    }
  });

// AGENT LIST Command
const agentCmd = program.command('agent').description('Manage Persistent AI Agents');
agentCmd
  .command('list')
  .description('List all persistent AI agents')
  .action(() => {
    console.log(chalk.bold.cyan('\n=== Persistent AI Agents ===\n'));
    const agents = listAgents();
    agents.forEach(agent => {
      console.log(chalk.bold.green(`Name:   ${agent.name}`));
      console.log(`Role:   ${agent.role}`);
      console.log(`Prompt: ${agent.description}`);
      console.log(chalk.gray('---------------------------------------------'));
    });
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(getAsciiLogo());
  program.outputHelp();
}
