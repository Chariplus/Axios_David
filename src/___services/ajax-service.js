import axios from "axios";

let times = 0;
const _RETRIES = 3;
const _DELAYRETRY = 1000;
const client = axios.create();

client.interceptors.request.use((config) => {
  return config;
}, null);

client.interceptors.response.use(null, (error) => {
  console.log('error')
  const status = error.response ? error.response.status : null
  const originalRequest = error.config

  times ++;
  setTimeout(function () {
    debugger
    if(times < _RETRIES) {
      return client(originalRequest);
    }
    else {
      return Promise.reject(error);
    }
  }, _DELAYRETRY);
})

/*function setErrorRequest(error){
  //store.dispatch('errorLoading', true);
  debugger
  if(error.response.status == 401){
      window.location.href = _SESSION_EXPIRED_VIEW;
  } else {
    return error;
  }
}*/


export default {
  async initMaterial() {
    times = 0;
    return await client.get("https://my-json-server.typicode.com/dabizCasAnd/json-server-fake-data/userProgress");
    
    /*try {
      let ajax = await client.get("https://my-json-server.typicode.com/dabizCasAnd/json-server-fake-data/userProgress");
      //debugger
      return ajax
    } catch(e) {
      //debugger
      setErrorRequest(e)
    }*/
  }
};
