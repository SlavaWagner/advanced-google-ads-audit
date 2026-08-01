import { getAgent } from '../storage.js';
import { generateText } from '../gemini.js';
import { getConfig } from '../config.js';

export default class BaseAgent {
  /**
   * Initializes a persistent agent by loading its config from storage.
   * @param {string} agentName - The name of the agent JSON file (e.g. 'copywriter')
   */
  constructor(agentName) {
    const config = getAgent(agentName);
    if (!config) {
      throw new Error(`Failed to load persistent agent configuration for: "${agentName}"`);
    }

    this.name = config.name;
    this.role = config.role;
    this.description = config.description;
    this.systemPrompt = config.systemPrompt;
    this.skills = config.skills || [];
    this.model = config.model || 'gemini-1.5-flash';
    this.logs = [];
  }

  /**
   * Add a log entry for this agent execution step.
   * @param {string} message - Message to log
   */
  log(message) {
    const timestamp = new Date().toISOString();
    const formatted = `[${timestamp}] [${this.role}]: ${message}`;
    this.logs.push(formatted);
    console.log(formatted);
  }

  /**
   * Checks if the agent has access to a specific skill.
   * @param {string} skillName - Name of the skill
   * @returns {boolean}
   */
  hasSkill(skillName) {
    return this.skills.includes(skillName);
  }

  /**
   * Runs an authorized skill.
   * @param {object} skillInstance - The instantiated skill
   * @param {...any} args - Arguments to pass to the skill execution
   * @returns {Promise<any>}
   */
  async runSkill(skillInstance, ...args) {
    const skillName = skillInstance.constructor.name;
    if (!this.hasSkill(skillName)) {
      throw new Error(`Permission Denied: Agent "${this.name}" does not have access to Skill "${skillName}"`);
    }
    
    this.log(`Running skill: ${skillName}...`);
    try {
      const result = await skillInstance.execute(...args);
      this.log(`Skill ${skillName} completed successfully.`);
      return result;
    } catch (error) {
      this.log(`Skill ${skillName} failed: ${error.message}`);
      throw error;
    }
  }

  /**
   * Helper to generate LLM completions for this agent.
   * @param {string} userPrompt - User prompt to send to LLM
   * @param {boolean} [jsonMode] - Request JSON response structure
   * @returns {Promise<string>} Model output
   */
  async generateCompletion(userPrompt, jsonMode = false) {
    this.log(`Requesting LLM completion using model: ${this.model}...`);
    const appConfig = getConfig();
    
    try {
      const response = await generateText(
        appConfig.geminiApiKey,
        this.systemPrompt,
        userPrompt,
        this.model,
        jsonMode
      );
      this.log('LLM completion received.');
      return response;
    } catch (error) {
      this.log(`LLM execution failed: ${error.message}`);
      throw error;
    }
  }
}
