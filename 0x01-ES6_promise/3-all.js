import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const uploadResult = results[0];
      const userResult = results[1];

      console.log(`${uploadResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;
