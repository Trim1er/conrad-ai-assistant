// api-client.js
// JobTread API scaffold placeholder

export async function queryJobTread(endpoint, payload) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) throw new Error(`JobTread request failed: ${res.status}`);
  return res.json();
}
