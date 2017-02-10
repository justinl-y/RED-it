// FetchJson, a Fetch wrapper to aid in our sanity
// Meant for use with JSON APIs and async/await

const createErrorContext = (url, params) => {
  return {
    name: 'FetchJsonError',
    url,
    params,
  };
};

const fetchJSON = (url, params = { method: 'GET' }) => {
  const headers = { headers: new Headers({ 'Content-Type': 'application/json;charset=UTF-8' }), credentials: 'include' };

  return fetch(url, Object.assign(params, headers)).then((res) => {
    console.log(params);
    if (res.ok) return res.json();
    throw createErrorContext(url, params);
  });
};

const requestJSON = (url, body, method) => (
  fetchJSON(url, { method, body })
);

// api of library
const getJSON = fetchJSON;
const postJSON = (url, body) => requestJSON(url, body, 'POST');
const putJSON = (url, body) => requestJSON(url, body, 'PUT');
const deleteJSON = url => requestJSON(url, null, 'DELETE');

export { getJSON, postJSON, putJSON, deleteJSON };


/* somehow integrate this */
/* const postRequest = {
  method: 'POST',
  credentials: 'include', // 'same-origin'
  headers: new Headers({
    'Content-Type': 'application/json;charset=UTF-8',
  }),
};

fetch('/skjdfn') */

