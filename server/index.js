var express = require('express')
var fs = require('fs')
var path = require('path')
var cors = require('cors')
var app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/api/editConfig', (req, res, next) => {
  var param = req.body
  writeJson(param.configs, param.fileName)
  res.json('success')
})

app.listen(3000, () => {
  console.log('server is started listen port 3000')
})
// // 写入文件
function writeJson (params, url) {
  var fiUrl = '../src/views/components/base/' + url + '/config.js'
  var a = require(fiUrl)
  a['attr'] = params
  var write = 'const config = ' + JSON.stringify(a) + '\n\r module.exports = config'
  fs.writeFile(path.resolve(__dirname, fiUrl), write, function (err, data) {
    if (err) {
      console.error(err)
    }
    console.log('success')
  })
}
