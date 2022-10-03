const router = require('express').Router()
const products = require('../controllers/products')


router.get("/", products.getAll)
router.get("/id/:productId", products.getProductById)
router.post("/",  products.create);
// router.put("/:id", products.update)
// router.delete("/:id", products.remove)

module.exports = router;