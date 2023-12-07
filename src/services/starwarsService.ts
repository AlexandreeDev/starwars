export const starwarsService = () => {
  const axios = require("axios").default;
  const get = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/people");
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const searchByName = async (searchPeople: any) => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/people/?search=${searchPeople}`,
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const getByUrl = async (apiUrl: any) => {
    try {
      const response = await axios.get(apiUrl);
      return response;
    } catch (error) {}
  };
  return { get, getByUrl, searchByName };
};
