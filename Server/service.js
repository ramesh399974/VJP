var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'VJP Server',
  description: 'VJP',
  script: 'C:\\xampp\\htdocs\\VJP-Quality-Module\\Server\\app.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();