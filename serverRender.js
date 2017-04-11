// fetch the data from the api
import config from './config';
import axios from 'axios';

axios.get(`${config.serverUrl}/api/contests`)
  .then(resp => {
    console.log(`${config.serverUrl}/api/contests`);
    console.log(resp.data);
  })
  .catch(() => console.error());