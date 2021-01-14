var EventEmitter = require('events').EventEmitter;
var proxy = new EventEmitter();

var eventName = 'some_event';

proxy.on(eventName, function (index) {
    console.log('on' + eventName + ' ' + index);
});

proxy.once(eventName, function (index) {
    console.log('once' + eventName + ' ' + index);
});

for (let index = 0; index < 10; index++) {
    setTimeout(() => {
        proxy.emit(eventName, index);
    }, 1000);
}


