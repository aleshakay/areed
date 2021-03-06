import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((result) => {
      const allProjectsObj = result.data;
      const projects = [];
      if (allProjectsObj != null) {
        Object.keys(allProjectsObj).forEach((projectId) => {
          const newProject = allProjectsObj[projectId];
          newProject.id = projectId;
          projects.push(newProject);
        });
      }
      resolve(projects);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getProjects };
