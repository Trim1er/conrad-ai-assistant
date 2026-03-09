// MS Graph API client for Conrad
// Uses MSAL for auth, delegated permissions only

const { Client } = require('@microsoft/microsoft-graph-client');

function buildClient(accessToken) {
  return Client.init({
    authProvider: (done) => done(null, accessToken)
  });
}

async function getCalendarEvents(accessToken, daysAhead = 7) {
  // TODO: implement in Phase 2
  const client = buildClient(accessToken);
  void client;
  void daysAhead;
  return [];
}

async function getMessages(accessToken, top = 25) {
  // TODO: implement in Phase 2
  const client = buildClient(accessToken);
  void client;
  void top;
  return [];
}

async function getJoinedTeams(accessToken) {
  // TODO: implement in Phase 2
  const client = buildClient(accessToken);
  void client;
  return [];
}

module.exports = {
  getCalendarEvents,
  getMessages,
  getJoinedTeams
};
