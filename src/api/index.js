export async function getProduct() {
  const baseUrl = "https://fakestoreapi.com/";
  const response = await fetch();

  fetch(baseUrl)
    .then((res) => res.json())
    .then((json) => console.log(json));

  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: "pompom23",
      password: "oreo24",
    }),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));
}

export async function getStore() {
const baseUrl ="https://fakestoreapi.com/";
const response = await fetch();

fetch(baseUrl)
.then((res) => res.json())
.then((json) => console.log(json));


  fetch('https://fakestoreapi.com/products',{
method:"GET",
body: JSON.stringify
  }),


}