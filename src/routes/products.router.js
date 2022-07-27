import { Router } from "express";

const router = Router();

const arrayProducts = [
    {
        title: "zapatilla Adidas",
        price: 5000,
        thumbnail: 'https://static.runnea.com/images/202111/adidas-eq21-run-ficha-400x400x80xX.jpg?1'
    },
    {
        title: "zapatilla Nike",
        price: 7000,
        thumbnail: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5d2cf9e4/products/NI_DC3728-003/NI_DC3728-003-1.JPG'
    },
    {
        title: "zapatilla Puma",
        price: 3000,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjp82l1QS66q0CFS8rZNoqSZLtsPeqHFovskslOI9n3eXEZwv8mE63nQ2locua-bXj7M&usqp=CAU'
    }
]

router.get('/', (req, res) => {
    res.send({ arrayProducts })
})

router.get('/:id', (req, res) => {
    if (isNaN(req.params.id)) return res.status(400).send("El parámetro debe ser númerico")
    if (parseInt(req.params.id) < 1 || parseInt(req.params.id) > arrayProducts.length) return res.status(404).send({ error: 'producto no encontrado' })
    let id = parseInt(req.params.id);
    res.send({ product: arrayProducts[id - 1] })
})

router.post('/newProd', (req, res) => {
    let prod = req.body;
    console.log(req.body);
    if (!prod.name) return res.status(400).send({ status: "error", error: "invalid input" })
    arrayProducts.push(prod);
    res.send({ status: "success", message: "prod added" })
})

router.put('/p/:id', (req, res) => {
    console.log('PUT request recibido');
    console.log(req.body);
    let newObj = {
        title: "zapatillas nike 2",
        price: 8000,
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjp82l1QS66q0CFS8rZNoqSZLtsPeqHFovskslOI9n3eXEZwv8mE63nQ2locua-bXj7M&usqp=CAU'
    }
    if (isNaN(req.params.id)) return res.status(400).send("El parámetro debe ser númerico")
    if (parseInt(req.params.id) < 1 || parseInt(req.params.id) > arrayProducts.length) return res.status(404).send({ error: 'producto no encontrado' })
    req.body.splice(arrayProducts.length, 0, newObj)
    res.send(req.body)
    console.log(req.body);



})

router.delete('/:id', (req, res) => {
    if (isNaN(req.params.id)) return res.status(400).send("El parámetro debe ser númerico")
    if (parseInt(req.params.id) < 1 || parseInt(req.params.id) > arrayProducts.length) return res.status(404).send({ error: 'producto no encontrado' })
    req.body.splice((req.params.id - 1), 1)
    res.send(req.body)
})

export default router;