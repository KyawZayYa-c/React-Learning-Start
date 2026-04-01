"use strict";
function hello(msg) {
    console.log('msg : ', msg);
}
async function getData(data) {
    return 3;
}
getData(5).then(console.log);
