// handle API call in service file.
// set response type as Promise to handle async methods.

const promiseExample = new Promise((resolve, reject) => {
  // API call
  setTimeout(() => {
    resolve('success');
  }, 2000);

  // setTimeout(() => {
  //   reject('reject');
  // }, 2000);
});

// handle response from API inside controller with then() and catch() method.

// let result = promiseExample;
// console.log(result);

promiseExample
  .then((result) => {
    console.log(result);
  })
  .catch((result) => {
    console.log(result);
  });
