var express = require('express');
var router = express.Router();
const multer = require('multer')
const Image = require('../models/db')
const upload = multer({storage: multer.memoryStorage()})

router.get('/', function(req, res, next) {
    res.render('form');
  });

router.post('/', upload.single('file'), async(req, res) => {
    try {
        console.log(req.file)
        const {originalname, mimetype, buffer} = req.file

        const image = new Image({
            name: originalname,
            data: buffer,
            mimetype: mimetype
        });
        console.log(originalname, mimetype, buffer)
        await image.save();
        res.send('image subida exitosamente')
    } catch (error) {
        res.status(500).send('Error al guardar la imagen')
    }
})

router.get('/:name', async (req, res) => {
    try {
        console.log(req.params.name)
        const image = await Image.findOne({name: req.params.name})
        console.log('Documento encontrado: ', image);
        if(!image) return res.status(404).send('imagen no encontrada')
        
        res.contentType(image.mimetype);
        res.send(image.data);
    } catch (error) {
        res.status(500).send('error al recuperar la imagen')
    }
    
})

module.exports = router;