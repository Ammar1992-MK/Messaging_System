
 export function API(){
     const systemApi = {
         getProfile: async () => {
             const res = await fetch("/api/profile");
             if (!res.ok) {
                 throw new Error(
                     `Something went wrong loading ${res.url}: ${res.statusText}`
                 );
             }
             return res.json();
         },
         getUsers: async () => {
             const res = await fetch("/api/users");
             if (!res.ok) {
                 throw new Error(
                     `Something went wrong loading ${res.url}: ${res.statusText}`
                 );
             }
             return res.json();
         },
         retrieveMessage : async () => {
             const res = await fetch ("/api/retrieveMessage");
             if(!res.ok){
                 throw new Error(
                     `Something went wrong loading ${res.url}: ${res.statusText}`
                 );
             }
             return res.json();
         },
         postMessage : async ({message}) => {
            await fetch("/api/sendMessage", {
                 method : "POST",
                 body : JSON.stringify({message}),
                 headers : {
                     "Content-Type" : "application/json"
                 }
             })
         }
     }

     return systemApi;

 }
