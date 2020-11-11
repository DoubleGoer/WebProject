let express = require('express')
let router = express.Router()

router.get('/',((req, res) => {
    res.render('test',{ title: 'Express' })
}))
router.get('/chat',((req, res) => {
    res.render('chatclient')
}))




module.exports = router