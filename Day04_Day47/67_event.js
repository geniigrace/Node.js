//이벤트 관련

const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.addListener('event1', ()=>{
    console.log('이벤트1');
});

myEvent.on('event2', ()=>{
    console.log('이벤트2');
});

myEvent.on('event2', ()=>{
    console.log('이벤트2 추가');
});


//once : 한번만 실행됨 
myEvent.once('event3', ()=>{
    console.log('이벤트 3');
});

//이벤트 호출
myEvent.emit('event1');
// event2는 event2로 두개 이벤트 연결했으므로 두개가 호출됨
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event4', ()=>{
    console.log('이벤트4');
});

//삭제
myEvent.removeAllListeners('event4');
myEvent.emit('event4');

//listener 함수를 만들고 
const listener=()=>{
    console.log('이벤트5');
};
//이벤트에 listener 연결
myEvent.on('event5', listener);

//삭제
myEvent.removeListener('event5', listener);
myEvent.emit('event5');

console.log(myEvent.listenerCount('event2'));