import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = path.resolve(__dirname, '../config.json');

const DEFAULT_CONFIG = {
  customerId: '',
  developerToken: '',
  clientId: '',
  clientSecret: '',
  refreshToken: '',
  googleAdsVersion: 'v24',
  loginCustomerId: '',
  accessToken: '',
  tokenExpiry: 0,
  geminiApiKey: process.env.GEMINI_API_KEY || ''
};

export function getConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const data = fs.readFileSync(CONFIG_PATH, 'utf8');
      const parsed = JSON.parse(data);
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch (error) {
    console.error('Error reading config file, using defaults:', error.message);
  }
  return { ...DEFAULT_CONFIG };
}

export function saveConfig(config) {
  try {
    const data = JSON.stringify(config, null, 2);
    fs.writeFileSync(CONFIG_PATH, data, 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving config file:', error.message);
    return false;
  }
}

export async function refreshAccessToken() {
  const config = getConfig();
  if (!config.refreshToken) {
    throw new Error('No OAuth2 refresh token found. Please run the setup command first: advanced-google-ads-audit setup');
  }

  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: config.clientId,
      client_secret: config.clientSecret,
      refresh_token: config.refreshToken,
      grant_type: 'refresh_token'
    });

    const { access_token, expires_in } = response.data;
    config.accessToken = access_token;
    config.tokenExpiry = Date.now() + (expires_in - 300) * 1000;
    saveConfig(config);
    return access_token;
  } catch (error) {
    const errorDetails = error.response ? JSON.stringify(error.response.data) : error.message;
    throw new Error(`Failed to refresh OAuth2 access token: ${errorDetails}`);
  }
}

export async function getAccessToken() {
  const config = getConfig();
  if (!config.accessToken || !config.tokenExpiry || Date.now() >= config.tokenExpiry) {
    return await refreshAccessToken();
  }
  return config.accessToken;
}
