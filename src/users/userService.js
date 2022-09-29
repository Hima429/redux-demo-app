import axios from "axios";

//const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = "http://167.71.234.243:4000";

// get user details
const getUserDetails = async () => {
  const response = await axios.get(
    `https://dummyjson.com/users`
  );
  console.log(response);

  return response.data;
};

const settingsService = { getUserDetails };
export default settingsService;
