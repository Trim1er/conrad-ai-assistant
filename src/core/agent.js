// agent.js

export function runAgentCycle(context) {
  return {
    status: 'ok',
    timestamp: new Date().toISOString(),
    contextSummary: context?.summary || 'No context provided'
  };
}
