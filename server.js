const express = require('express')
    , app = express()
    , multer = require('multer')
    , path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'upload/');
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`);
                // Alt. Nome original do arquivo uploadiado: file.originalname 
    }
})

const upload = multer({storage});
const porta = process.env.PORT || 3000;

app.use(express.static('publico'));

app.post('/file/upload', upload.single('file'),
    (req, res) => res.send('<h2>Upload realizado com sucesso</h2>'));

app.listen(porta, () => {
    console.log(`Servidor aberto em http://localhost:${porta}`)
});