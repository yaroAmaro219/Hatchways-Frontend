import Axios from 'axios'

const URL = "https://api.hatchways.io/assessment/students"

export default async function fetchUser() {
  const resp = await Axios.get(URL)
  // console.log(resp.data)
  return resp.data
}