console.log('Start App');

var HOST = location.origin.replace(/^http/, 'ws').replace(/8080/, '8090');

var ws = new WebSocket(HOST);
var el = document.getElementById('server-time');

ws.onmessage = function (event) {
	el.innerHTML =  'Server time: ' + event.data;
};