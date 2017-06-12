import { getJSON, postJSON, putJSON, deleteJSON } from '../../lib/fetch-json';

// const apiRoot = 'https://jsonplaceholder.typicode.com/posts';
const apiRoot = 'http://localhost:8000/api';

/* const list = () => getJSON(apiRoot);*/
const list = endPoint => (
  getJSON(`${apiRoot}/${endPoint}`)
);

const get = id => (
  getJSON(`${apiRoot}/${id}`)
);

const create = body => (
  postJSON(apiRoot, body)
);

const update = (id, body) => (
  putJSON(`${apiRoot}/${id}`, body)
);

const remove = id => (
  deleteJSON(`${apiRoot}/${id}`)
);

export default { list, get, create, update, remove };
