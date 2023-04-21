// 이벤트 모듈 로드
const EventEmitter = require('events');

// 이벤트 객체 생성
const eventEmitter = new EventEmitter();

// 이벤트 리스너 등록
eventEmitter.on('eventName', () => {
    console.log('Event occurred');
});

// 이벤트 발생
eventEmitter.emit('eventName');

console.log('After event occurred');