import axios from "axios";

//const _API_VERSION = "v1";
//const _LANG = "en";
const _SESSION_EXPIRED_VIEW = "../../../session-expired";
//let requestPayload = {};
const client = axios.create();

/*client.defaults.headers["Accept"] = "application/vnd.materialprovider." + _API_VERSION + "+json";
client.defaults.headers["Content-Type"] = "application/json";
client.defaults.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT";*/

/*client.interceptors.response.use(null, (error) => {
    //console.log(error)
    const status = error.response ? error.response.status : null
    const originalRequest = error.config

    if (status === 401) {
        if (!store.state.auth.isRefreshing) {
            store.dispatch('auth/refresh')
        }

        Axios(originalRequest)
        return retryOrigReq
    } else {
        return Promise.reject(error)
    }
})*/

/*
if (process.env.NODE_ENV == "production") {
  let payload = { ...requestPayload, idQuestions };
  return client.get("questions", { params: payload }).catch(e => { setErrorRequest(e) });
} else {
  return new Promise((resolve, reject) => { resolve({ status: "ok", data: { data: [] } }); });
}
*/

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

  initMaterial() {
    let ajax = client.get("https://my-json-server.typicode.com/dabizCasAnd/json-server-fake-data/userProgress").catch(e => { setErrorRequest(e) });
    debugger
    return ajax
  }
};
