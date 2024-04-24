// Import the crypto module
const crypto = require('crypto');

// Generate a secure secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Print the secret key
console.log('Generated Secret Key:', secretKey);
