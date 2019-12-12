import axios from "axios";

const client = axios.create();


//client.interceptors.response.use(null, (error) => {
//    console.log('error')
//   // const status = error.response ? error.response.status : null
//   const originalRequest = error.config
//
//    setTimeout(function(){
//      return client(originalRequest);
//    }, 5000)
//})

function setErrorRequest(error){
  //store.dispatch('errorLoading', true);
  debugger
  if(error.response.status == 401){
      window.location.href = _SESSION_EXPIRED_VIEW;
  } else {
    return error;
  }
}


export default {
  async initMaterial() {
    try {
      let ajax = await client.get("https://my-json-server.typicode.com/dabizCasAnd/json-server-fake-data/userProgress");
      debugger
      return ajax
    } catch(e) {
      debugger
      setErrorRequest(e)
    }
  }
};
