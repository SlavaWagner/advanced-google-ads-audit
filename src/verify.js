import chalk from 'chalk';
import { getAgent, listAgents, initStorage } from './storage.js';
import AuditAgent from './agents/AuditAgent.js';
import { getConfig } from './config.js';

initStorage();

let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  if (condition) {
    console.log(chalk.green(`  ✔ PASSED: ${message}`));
    passedTests++;
  } else {
    console.log(chalk.red(`  ✖ FAILED: ${message}`));
    failedTests++;
  }
}

async function runTests() {
  console.log(chalk.bold.cyan('\n=== Run local verification tests ===\n'));

  // Test 1: Agent Loader and Config Storage
  try {
    console.log(chalk.yellow('Test 1: Agent Loader and Storage...'));
    const agents = listAgents();
    assert(agents.length >= 1, `Expected at least 1 agent, found ${agents.length}`);
    
    const auditor = getAgent('auditor');
    assert(auditor !== null, 'Should be able to load auditor agent config');
    assert(auditor.name === 'auditor', `Expected agent name "auditor", got "${auditor?.name}"`);
  } catch (err) {
    assert(false, `Test 1 failed: ${err.message}`);
  }

  // Test 2: Strategy SOPs Loader & Audit Engine
  try {
    console.log(chalk.yellow('\nTest 2: Strategy SOPs Loader & Account Audit Engine...'));
    const auditor = new AuditAgent();
    const strategies = auditor.loadStrategies();
    assert(strategies.length >= 10, `Expected at least 10 strategy SOPs, found ${strategies.length}`);

    const config = getConfig();
    const report = await auditor.runAudit(config, null);

    assert(report !== null, 'Should return non-null audit report');
    assert(typeof report.overallAuditScorePercent === 'number', 'Report should contain overall audit score percentage');
    assert(report.strategyCheckupResults.length >= 10, 'Report should contain strategy checkup results for all SOPs');
    
    const firstStrategy = report.strategyCheckupResults[0];
    assert(typeof firstStrategy.compliancePercent === 'number', 'First strategy should have compliance percentage');
    assert(Array.isArray(firstStrategy.implementationSteps), 'Strategy should contain actionable implementation steps');
  } catch (err) {
    assert(false, `Test 2 failed: ${err.message}`);
  }

  console.log(chalk.bold.cyan('\n=== Test Summary ==='));
  console.log(chalk.green(`Passed: ${passedTests}`));
  if (failedTests > 0) {
    console.log(chalk.red(`Failed: ${failedTests}`));
    process.exit(1);
  } else {
    console.log(chalk.bold.green('All tests passed successfully!\n'));
  }
}

runTests();
