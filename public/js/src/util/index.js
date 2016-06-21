import request from "superagent";

export function postRequest(url, data) {
  console.log("estoy en la funcion");
  return request
  .post(url)
  .send(data)
  .end(function(err, res){
    console.log(res);
    return true;
  });
}

export async function getAllRecipesFromServer() {
  return await request.get("/recipes");
}