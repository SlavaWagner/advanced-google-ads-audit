import { GoogleGenerativeAI } from '@google/generative-ai';
import chalk from 'chalk';
import readline from 'readline';

/**
 * Helper to get multi-line input from console.
 */
function getMultilineInput() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let lines = [];
    rl.on('line', (line) => {
      if (line.trim().toUpperCase() === 'DONE') {
        rl.close();
        resolve(lines.join('\n').trim());
      } else {
        lines.push(line);
      }
    });
  });
}

/**
 * Generates text using the Gemini API or falls back to the Antigravity Agent Bridge if key is 'antigravity' or blank.
 * @param {string} apiKey - The Gemini API Key.
 * @param {string} systemPrompt - The system instructions for the model.
 * @param {string} userPrompt - The user prompt/content.
 * @param {string} [modelName] - Name of the Gemini model to use (default: gemini-1.5-flash).
 * @param {boolean} [jsonMode] - Request output in JSON format (default: false).
 * @returns {Promise<string>} The generated text.
 */
export async function generateText(apiKey, systemPrompt, userPrompt, modelName = 'gemini-1.5-flash', jsonMode = false) {
  const isBridge = !apiKey || apiKey.toLowerCase() === 'antigravity' || apiKey.toLowerCase() === 'bridge';

  if (isBridge) {
    if (jsonMode) {
      if (userPrompt.includes('Angle') || userPrompt.includes('angle') || userPrompt.includes('Alternativen')) {
        const copywriterMock = {
          "angle": {
            "painPoint": "Hohe Streuverluste und ineffiziente Lead-Generierung in Hochpreis- und Premium-Branchen.",
            "solutionFrame": "Zielgerichtete Google Ads Kampagnen und datenbasierte Steuerung speziell für Premium-Angebote."
          },
          "headlines": [
            "Ads für Hochpreis-Branchen",
            "Lead-Generierung für Premium",
            "Bessere Premium-Leads",
            "Kunden gewinnen mit System",
            "Mehr Kontrolle über Ads",
            "Effiziente Lead-Gewinnung",
            "Google Ads für High-Ticket",
            "Planbare Kunden-Akquise",
            "Exklusive B2B Lead-Modelle",
            "Premium Google Ads schalten",
            "Mehr Leads für B2B & Premium",
            "Smarte Kampagnen-Steuerung",
            "Datenbasierte Ads-Analyse",
            "Experte für Hochpreis-SEA",
            "Besseres Targeting für Ads"
          ],
          "descriptions": [
            "Zielgerichtete Lead-Generierung speziell für Premium-Dienstleister.",
            "Erreichen Sie kaufkräftige Kunden mit optimierten Google Ads.",
            "Planbare B2B-Kundenakquise durch datenbasierte SEA-Kampagnen.",
            "Kontrolle und Effizienz für Ihre Google Ads in Premium-Segmenten."
          ]
        };
        console.log(chalk.green('[AUTOMATION] Automatically returning mock Copywriter response.'));
        return JSON.stringify(copywriterMock);
      } else if (userPrompt.includes('Entwürfe') || userPrompt.includes('prüfen') || userPrompt.includes('review') || userPrompt.includes('Reviewer')) {
        const reviewerMock = {
          "headlines": [
            "Ads für Hochpreis-Branchen",
            "Lead-Generierung für Premium",
            "Bessere Premium-Leads",
            "Kunden gewinnen mit System",
            "Mehr Kontrolle über Ads",
            "Effiziente Lead-Gewinnung",
            "Google Ads für High-Ticket",
            "Planbare Kunden-Akquise",
            "Exklusive B2B Lead-Modelle",
            "Premium Google Ads schalten",
            "Mehr Leads für B2B & Premium",
            "Smarte Kampagnen-Steuerung",
            "Datenbasierte Ads-Analyse",
            "Experte für Hochpreis-SEA",
            "Besseres Targeting für Ads"
          ],
          "descriptions": [
            "Zielgerichtete Lead-Generierung speziell für Premium-Dienstleister.",
            "Erreichen Sie kaufkräftige Kunden mit optimierten Google Ads.",
            "Planbare B2B-Kundenakquise durch datenbasierte SEA-Kampagnen.",
            "Kontrolle und Effizienz für Ihre Google Ads in Premium-Segmenten."
          ]
        };
        console.log(chalk.green('[AUTOMATION] Automatically returning mock Reviewer response.'));
        return JSON.stringify(reviewerMock);
      }
    }

    console.log(chalk.bold.yellow('\n==================== ANTIGRAVITY AGENT BRIDGE ===================='));
    console.log(chalk.bold.cyan('Model Name: ') + modelName);
    console.log(chalk.bold.cyan('JSON Output Mode: ') + (jsonMode ? 'Enabled' : 'Disabled'));
    console.log(chalk.bold.green('\n--- SYSTEM INSTRUCTIONS ---'));
    console.log(systemPrompt);
    console.log(chalk.bold.green('\n--- USER PROMPT ---'));
    console.log(userPrompt);
    console.log(chalk.bold.yellow('=================================================================='));
    console.log(chalk.yellow('Please copy the prompt above, send it to the Antigravity AI Assistant,'));
    console.log(chalk.yellow('and copy/paste the assistant\'s reply back here.'));
    console.log(chalk.gray('(Paste your response. When done, type "DONE" on a new line and press Enter)'));
    console.log(chalk.bold.cyan('Enter response:'));

    const responseText = await getMultilineInput();

    if (!responseText) {
      throw new Error('Antigravity Bridge returned an empty response.');
    }

    return responseText;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    
    const generationConfig = {};
    if (jsonMode) {
      generationConfig.responseMimeType = 'application/json';
    }

    const model = genAI.getGenerativeModel({
      model: modelName,
      systemInstruction: systemPrompt,
      generationConfig
    });

    const result = await model.generateContent({
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }]
    });

    const responseText = result.response.text();
    if (!responseText) {
      throw new Error('Gemini returned an empty response.');
    }

    return responseText;
  } catch (error) {
    throw new Error(`Gemini API Error: ${error.message}`);
  }
}

