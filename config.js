require('dotenv-flow').config();

// Env vars loader and checker
function loadEnvVar(name, required = false) {
  const envVar = process.env[name];
  if (envVar || !required) {
    return envVar;
  }
  throw new Error(`Missing environment variable: ${name}`);
}

const config = {
  NODE_ENV: loadEnvVar('NODE_ENV') || 'development',
  HOST: loadEnvVar('HOST') || '0.0.0.0',
  PORT: loadEnvVar('PORT') || 3000,
  AUTH_TOKEN: loadEnvVar('AUTH_TOKEN') || 'TEST_TOKEN_123',
  MONGO_DB_URL: loadEnvVar('MONGO_DB_URL') || 'mongodb://192.168.178.5:27017/simple_db',
  HERE_API_URL: loadEnvVar('HERE_API_URL', true),
  HERE_API_KEY: loadEnvVar('HERE_API_KEY', true),
};

module.exports = config;
