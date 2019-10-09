

const host = document.location.host;
const protocol = document.location.protocol;
const env = process.env.NODE_ENV;
const app_env = process.env.VUE_APP_ENV;

const apiPath = window.localStorage.getItem("apiPath");
const cdnPath = window.localStorage.getItem("cdnPath");

/*
const apiLocations = {
  development: `http://domz.67177534.cn/agency/api`,
  staging: `http://domz.67177534.cn/agency/api`,
  production: `http://domz.67177534.cn/agency/api`
}
*/

const apiLocations = {
  development: apiPath,
  staging: apiPath,
  production: apiPath
}

const cdnLocations = {
  development: cdnPath,
  staging: cdnPath,
  production: cdnPath
}

/*
const cdnLocations = {
  development: `http://api.gedasg.club/agency/api`,
  staging: `http://api.gedasg.club/agency/api`,
  production: `http://api.gedasg.club/agency/api`
}*/
/*
const apiLocations = {
  development: `http://apiback.svl1.club/api`,
  staging: `http://apiback.svl1.club/api`,
  production: `http://apiback.svl1.club/api`
}
*/

const socketHosts = {
  development: `ws://us-central1-lithe-window-713.cloudfunctions.net`,
  staging: `ws://us-central1-lithe-window-713.cloudfunctions.net`,
  production: `ws://us-central1-lithe-window-713.cloudfunctions.net`
}


export const apiBaseUrl = apiLocations[app_env] || apiLocations.production;
export const cdnBaseUrl = cdnLocations[app_env] || cdnLocations.production;
export const socketBaseUrl = socketHosts[app_env] || socketHosts.production;



console.log(`host: ${host}, protocol: ${protocol}, env: ${env}, app_env: ${app_env}`);
console.log(`apiBaseUrl ${apiBaseUrl}`);
console.log(`socketBaseUrl ${socketBaseUrl}`);
