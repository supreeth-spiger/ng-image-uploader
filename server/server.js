var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var express = require('express');
var homeRouter = require('./routes/homeAPI');

var cluster = require('cluster');
var clusterWorkerSize = require('os').cpus().length;
var path=require('path');

var app = express();
app.engine('html', require('ejs').renderFile);


//Middleware
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));
//app.use(express.static('../dist/cep-global/'))
app.use(cors());






// Mongoose
mongoose.connect('mongodb://localhost:27017/imageUploader', { useNewUrlParser: true }, function (err) {
   if (err) throw err;
   console.log('Successfully connected to MongoDB with' + mongoose.connection.host + mongoose.connection.port);
});


app.use('/api/home', homeRouter);
app.use('/', function(req,res){
res.sendFile(path.join(__dirname,'../dist/cep-global/index.html'))
});

process.on('uncaughtException', (err) => {
   console.log('Caught exception: ' + err);
});
process.on('unhandledRejection', (err) => {
   console.log('Caught exception: ' + err);
});

var port = process.env.PORT || 4500;

if (cluster.isMaster) {
   console.log(`Master ${process.pid} is running`);

   // Listen for dying workers
   for (let i = 0; i < clusterWorkerSize; i++) {
       // Restart the worker
       cluster.fork();
   }

   cluster.on('exit', function (worker, code, signal) {
       console.log(`worker ${worker.process.pid} died`);
       cluster.fork();
   });
}
if (cluster.isWorker) {
   console.log(`Worker ${process.pid} started`);
   app.listen(port, function () {
       console.log("server is running  on port " + port);
   })
}