import { getJSON, postJSON, putJSON, deleteJSON } from '../../lib/fetch-json';

const apiRoot = 'https://jsonplaceholder.typicode.com/posts';

const list = () => getJSON(apiRoot);
const get = id => getJSON(`${apiRoot}/${id}`);
const create = body => postJSON(apiRoot, body);
const update = (id, body) => putJSON(`${apiRoot}/${id}`, body);
const remove = id => deleteJSON(`${apiRoot}/${id}`);

// API
export default { list, get, create, update, remove };
