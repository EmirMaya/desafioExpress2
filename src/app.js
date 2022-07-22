import express from 'express';

import productsRouter from './routes/products.router.js'

const app = express();

const server = app.listen(8080,()=>console.log("Listening on PORT 8080"));
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/api/productos', productsRouter);

app.use(express.static('src/public'));
