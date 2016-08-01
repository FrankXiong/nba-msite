var path = require('path')
var express = require('express')
var favicon = require('serve-favicon')
var path = require('path')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var session = require('express-session')
var cookieParser = require('cookie-parser')
var mongoStore = require('connect-mongo')(session)
var logger = require('morgan')

var app = new express();
var port = process.env.PORT || 3000;
var dbUrl = 'mongodb://127.0.0.1/nba-msite'

app.set('view engine', 'jade');

mongoose.connect(dbUrl)

app.use(session({
    secret:'nba',
    resave:false,
    saveUninitialized:false,
    store:new mongoStore({
        url:dbUrl,
        autoReconnect:true,
        collection:'sessions'
    })
}))

app.use(express.static(path.join(__dirname, 'src')));
// app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

if('development' === app.get('env')){
    // 打印错误信息
    app.set('showStackError',true)
    app.use(logger(':method :url :status'))
    // 输出样式格式化
    app.locals.pretty = true
    // 输出数据库报错信息
    mongoose.set('debug',true)
}

app.listen(port)

console.log('server start on '+port)
