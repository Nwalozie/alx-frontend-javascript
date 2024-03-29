function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error());
    }
  })
    .then(() => {
      console.log('Got a response from the API');
    })
    .catch((error) => {
      console.error(error);
    });
}

export default handleResponseFromAPI;

