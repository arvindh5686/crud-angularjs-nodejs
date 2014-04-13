 var fs = require('fs-extra')

 module.exports.create = create

var DATA_FILE = './app/resources/data.json'
var DATA = fs.readJsonSync(DATA_FILE) //happens at server startup

function create(req, res) {
  console.log(req.body);
  var newEmployee = req.body
  newEmployee.id = getLastId() + 1
  DATA.push(newEmployee)
  saveDB(function(err) {
    if (err) 
      res.json(formatRespData(0, err))
    else
      res.json(formatRespData({id: newEmployee.id}))
  })
  //  res.send({'':''});
} 

function getLastId () {
  return DATA.length;
}

function saveDB (callback) {
  fs.writeJson(DATA_FILE, DATA, callback)
}

function formatRespData (code, content) {
  if (typeof code === 'object') {
    content = code,
    code = 1 //0 failure, 1 = success
  }

  return {
    code: code,
    content: content
  }
}