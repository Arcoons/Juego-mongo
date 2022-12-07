const express = require('express')
const router = express.Router()
const mongo = require('child_process');
function shell(){
    mongo.spawn('cmd',['/c', 'start C:\\mongosh-1.6.0-win32-x64\\bin\\mongosh']) 
}
router.get('/', (req, res) => {
    res.render('index')
    
  })
router.get('/preguntas', (req, res) => {
    res.render('preguntas')
    
  })
router.get('/boton', (req, res) => {
    res.render('boton', shell)
    
  })
module.exports= router;
