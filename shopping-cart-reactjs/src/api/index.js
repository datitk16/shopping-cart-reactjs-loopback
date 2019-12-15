import axios from "axios";
import _ from "lodash";

const access_token = "q9GwMSCHv8JctxUw0YEKPg9a2vxyhoYo96jGM5E1cYTkBRKhJdJaHVOVOe4bg8ym";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
})

api.interceptors.request.use(config => {
  config.params = config.params || {}
  config.params["access_token"] = access_token
  return config
})

export const getProduct = () => {
  return api.get("/products")
    .then(res => _.get(res, "data", []))
    .catch(console.log)
}
export const deleteProductById = (id) => {
  return api.delete(`/products/${id}`)
    .then(console.log)
    .catch(console.log)
}
export const createProduct = (data) => {
  return api.post(`/products`, data)
    .then(res => {
      return {
        status: _.get(res, "status"),
        data: res.data
      }
    })
    .catch(err => {
      return {
        status: _.get(err, "response.status"),
        messages: _.get(err, "response.data.error.details.messages", [])
      }
    })
}