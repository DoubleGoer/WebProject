let express = require('express')
// Express 웹서버 관리
let app = express()
let port = 3000
var path = require('path');
let host = '0.0.0.0'
let cookieParser = require('cookie-parser')
let test = require('./Router/test')


// http & https
let http = require('http')
let https = require('https')
let server = http.createServer(app).listen(3000,'localhost',()=>{
    console.log("server is on")
})




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

// 뷰 템플릿 엔진과 현재 view를 담을 path 지정
app.set('views', path.join(__dirname, 'src'));
app.set('view engine', 'ejs');



app.get('/', ((req, res) => {
    res.send("this page")
}))


app.post('/')


// 파일 절대경로 관리
app.use('/data',express.static('public'))
app.use('/page', test)

let sockio = require('./module/socket')

sockio(server)



