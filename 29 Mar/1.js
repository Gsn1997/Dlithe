//Promise.allSettled
const promise1 = Promise.resolve("success");
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'failed'));
const promises = [promise1, promise2];

Promise.allSettled(promises).
  then((values) => console.log(values));

