// auth.js
// MSAL auth scaffold placeholder

export function getMsalConfig() {
  return {
    auth: {
      clientId: process.env.MS_CLIENT_ID || '',
      authority: process.env.MS_AUTHORITY || 'https://login.microsoftonline.com/common',
      redirectUri: process.env.MS_REDIRECT_URI || 'http://localhost'
    }
  };
}
