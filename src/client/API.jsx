import {fetchJSON, postJSON} from "./https";

export function API() {
  const systemApi = {
    getProfile: async () => await fetchJSON("api/profile"),
    addUser : async ({name, email, description}) => postJSON("/api/createUser", {
      method : "POST",
      json : {name, email, description}
    }),
    getUsers: async () => await fetchJSON("/api/users"),
    retrieveMessage: async () => await fetchJSON("/api/retrieveMessage"),
    postMessage: async ({message, sender}) => postJSON("/api/sendMessage", {
      method : "POST",
      json : {message, sender}
    }),
  };

  return systemApi;
}
