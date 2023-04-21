// 콜백 핸들러의 전달되는 인수는 
// 콜백 지옥이란 콜백 안에 콜백을 계속 무는 형식으로 코드가 우측으로 너무 들어가는 현상이다.
// 이를 해결하는 방법에는 프로미스가 있다.

// 콜백 지옥 예시
fs.readFile('./file1.txt', 'utf8', function (err, data) {
    if (err) {
      console.error('Error reading file1.txt:', err);
      return;
    } 

    console.log('aa');
  
    fs.readFile('./file2.txt', 'utf8', function (err, data) {
      if (err) {
        console.error('Error reading file2.txt:', err);
        return;
      }
  
      fs.readFile('./file3.txt', data, function (err) {
        if (err) {
          console.error('Error writing file3.txt:', err);
          return;
        }
      });

      console.log('aa');
    });
  });


// 콜백 지옥 해결 -> 프로미스 사용
const fs = require('fs').promises;

fs.readFile('file1.txt', 'utf8')
  .then((data1) => fs.readFile('file2.txt', 'utf8'))
  .then((data2) => fs.writeFile('file3.txt', data2))
  .then(() => console.log('file3.txt written successfully'))
  .catch((error) => console.error('Error:', error));
