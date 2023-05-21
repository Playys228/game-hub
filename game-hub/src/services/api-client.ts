import axios from "axios"

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params: {
    key: '63b6cd3843e246fa9f539dff773cf8dc'
  }
})