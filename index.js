var app = require('express')()

app.get('*',function (req, res) {
    res.redirect('http://101.200.129.112/login/?next=/')
})

app.listen(80)