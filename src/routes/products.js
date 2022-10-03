const router = require('express').Router()
const products = require('../controllers/products')

router.get("/checkstatus", products.getStatus)
router.get("/", products.getAll)
router.get("/id/:productId", products.getProductById)
router.get("/name/:productName", products.getProductByName)
router.post("/",  products.create);
router.delete("/:id", products.remove)
router.put("/:id", products.update)

module.exports = router;