import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



const app = express();

//conectar a la base de datos
db.authenticate()
    .then(() => console.log('Conectado a la base de datos'))
    .catch(error => console.log(error))



//definir el puerto
const port = process.env.PORT || 4000;

//habilitar pug
app.set('view engine', 'pug');

//crar un middleware
app.use((req, res, next) => {
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes';
    next();
})

//agragar body parser
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

//definir la carpeta publica
app.use(express.static('public'));

//agregar routers
app.use('/', router);

app.listen(port, () => {
    console.log('El servidor esta funcionando en el puerto ' + port);
})