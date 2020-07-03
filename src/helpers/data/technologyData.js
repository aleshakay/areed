import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTechnologies = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/technologies.json`)
    .then((result) => {
      const allTechnologiesObj = result.data;
      const technologies = [];
      if (allTechnologiesObj != null) {
        Object.keys(allTechnologiesObj).forEach((technologiesId) => {
          const newTechnology = allTechnologiesObj[technologiesId];
          newTechnology.id = technologiesId;
          technologies.push(newTechnology);
        });
      }
      resolve(technologies);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getTechnologies };
