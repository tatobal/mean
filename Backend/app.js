import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import multer from 'multer';

const product_routes = require('./routes/product');
const app = express();
const dbProductos = 'mongodb://localhost:27017/productsDB';

mongoose.Promise = global.Promise;
mongoose.connect(dbProductos)
  .then(() => console.log('Se conectó a la base de datos de MongoDB'))
  .catch((err) => console.log(err));

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, '../Frontend/src/index.html')));
app.use('/api', product_routes);

/* let storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
      cb(null, './update')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
      cb(null, file.originalname);
  }
});

let upload = multer({
  storage: storage
}); */
/* var upload = multer({ dest: 'uploads/' }) */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

app.post('/producto-imagenes', upload.array('file', 12), (req, res) => {
  console.log('************************************************************************************');
  console.log('Files1111111111: ', req);
  console.log('Files22222: ', req.file);
  console.log('************************************************************************************');
  return console.log('hola');
  
});



// Rutas
app.get('/productos', (req, res) => {
  res.send('Hola Productos!');
  req.params;
});


app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), () => {
  console.log('Escuchando desde puerto ' + app.get('puerto'));

});