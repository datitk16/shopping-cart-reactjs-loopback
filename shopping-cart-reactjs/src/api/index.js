import axios from "axios";
import _ from "lodash";

const access_token = "nQOlEzvntbttyxDTx0vqypr6mpkYuuqsCICiY2oJj4IuLU8600AWDWiS2J6fByWf";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
})

api.interceptors.request.use(config => {
  config.params = config.params || {}
  config.params["access_token"] = access_token
  return config
})

export const getProduct=()=>{
    return api.get("/products")
    .then(res => _.get(res, "data", []))
    .catch(console.log)
}
export const deleteProductById = (id) => {
    return api.delete(`/products/${id}`)
      .then(console.log)
      .catch(console.log)
  }