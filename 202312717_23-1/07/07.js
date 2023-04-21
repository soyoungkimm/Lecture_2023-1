const fs = require('fs');

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

readFile('file1.txt')
  .then(data => {
    console.log(`file1.txt contents: ${data}`);
    return readFile('file2.txt');
  })
  .then(data => {
    console.log(`file2.txt contents: ${data}`);
    return writeFile('file3.txt', data);
  })
  .then(() => {
    console.log('file3.txt written successfully');
  })
  .catch(err => {
    console.error('Error:', err);
  });