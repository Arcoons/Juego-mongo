const express = require('express')
const router = express.Router()
const comando = require('child_process');
function abrir(){
    comando.spawn('cmd',['/c', 'start C:\\mongosh-1.6.0-win32-x64\\bin\\mongosh']) 
}
router.get('/', (req, res) => {
    res.render('index')
    
  })
router.get('/preguntas', (req, res) => {
    res.render('preguntas')
    
  })
router.get('/boton', (req, res) => {
    res.render('boton', abrir)
    
  })
module.exports= router;