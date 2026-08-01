#!/usr/bin/env node

import { Command } from 'commander';
import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';
import http from 'http';
import { URL, fileURLToPath } from 'url';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';

import { getConfig, saveConfig, getAccessToken, refreshAccessToken } from '../src/config.js';
import { listAgents, getAgent, saveAgent, saveRunLog, initStorage } from '../src/storage.js';
import BaseAgent from '../src/agents/BaseAgent.js';
import AuditAgent from '../src/agents/AuditAgent.js';

// Initialize storage folders and default agent configurations
initStorage();

function getAsciiLogo() {
  const greenCube = chalk.hex('#1dd900');
  const cyanCube = chalk.hex('#06b6d4');
  const blueCube = chalk.hex('#4064d7');
  
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
    chalk.gray('This AI Agent was created with the help of Google Antigravity CLI'),
    ''
  ].join('\n');
}

const program = new Command();

program
  .name('advanced-google-ads-audit')
  .description('Advanced Google Ads Audit AI Agent (High Ticket Lead Gen)')
  .version('1.0.0');

program.addHelpText('before', getAsciiLogo());

// SETUP Command
program
  .command('setup')
  .description('Setup Google Ads Credentials and Authorize OAuth2')
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

      console.log(chalk.green('\nPlease open the following link in your browser to authorize access:\n'));
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
              res.end('<h1>Authentication successful!</h1><p>You can close this window now and return to the CLI.</p>');
              resolve(code);
            } else {
              res.writeHead(400);
              res.end('Authentication failed: No code found in URL.');
              reject(new Error('No code received.'));
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
          reject(new Error('OAuth timeout after 3 minutes.'));
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

      console.log(chalk.yellow('Exchanging code for Refresh Token...'));
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

// AUDIT Command
program
  .command('audit')
  .alias('checkup')
  .description('Run Advanced Google Ads Account Audit & Strategy SOP Compliance Checkup')
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
        const color = s.compliancePercent >= 80 ? chalk.green : s.compliancePercent >= 60 ? chalk.yellow : chalk.red;
        console.log(chalk.bold.white(`Strategy: ${s.strategyTitle}`));
        console.log(`  Erfüllungsgrad: ${color(s.compliancePercent + '%')} (${s.status})`);
        
        if (s.missingComponents && s.missingComponents.length > 0) {
          console.log(chalk.red(`  Fehlende Komponenten:`));
          s.missingComponents.forEach(mc => console.log(chalk.gray(`    - ${mc}`)));
        }

        if (s.implementationSteps && s.implementationSteps.length > 0) {
          console.log(chalk.cyan(`  Handlungsanweisung zur 100% Umsetzung:`));
          s.implementationSteps.forEach((step, idx) => console.log(chalk.gray(`    ${idx + 1}. ${step}`)));
        }
        console.log(chalk.gray('--------------------------------------------------'));
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

// DASHBOARD Command
program
  .command('dashboard')
  .description('Start visual dashboard server')
  .option('-p, --port <number>', 'Port to run dashboard on', '8080')
  .action((options) => {
    const port = parseInt(options.port, 10);
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const projectRoot = path.resolve(__dirname, '..');

    const server = http.createServer((req, res) => {
      let safePath = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
      if (safePath === '/' || safePath === '\\') {
        safePath = '/index.html';
      }
      const filePath = path.join(projectRoot, safePath);

      const ext = path.extname(filePath).toLowerCase();
      let contentType = 'text/plain';
      if (ext === '.html') contentType = 'text/html; charset=utf-8';
      else if (ext === '.css') contentType = 'text/css';
      else if (ext === '.js') contentType = 'application/javascript';
      else if (ext === '.json') contentType = 'application/json';

      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        }
      });
    });

    server.listen(port, () => {
      console.log(chalk.bold.green(`\n[OK] Dashboard server started on http://localhost:${port}`));
      console.log(chalk.gray('Press Ctrl+C to stop.\n'));
      const openCmd = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
      exec(`${openCmd} http://localhost:${port}`, () => {});
    });
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
