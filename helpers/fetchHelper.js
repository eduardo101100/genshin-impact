const fetchHelper = (endpoint, data, method ="Get") = {
const url = encodeURI(endpoint);

if (method === "get"){
  return fetch(url);
}else
return fetch(url,{
method,
headers: {
  "Content-type": "application/json",
},
body: JSON,stringify(data),
});


};










const opciones = async () => {
    return fetch("https://api.genshin.dev/");
  }
  
  console.log (opciones());