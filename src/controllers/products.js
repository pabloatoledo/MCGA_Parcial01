const Products = require("../products");

const getAll = (req, res) => {
    Products.find()
        .then((data) => res.json({ data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const getProductById = (req, res) => {
    const { productId } = req.params
    Products.find({_id: productId})
        .then((data) => res.json({ data }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
}

const create = (req, res) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        description: req.body.description
    };
    Products.create(newProduct)
      .then((data) => res.json({ msg: "Product in shop parcial01 was added with the data: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const update = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndUpdate(id, req.body, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        return res.json({ msg: "Product updated", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

const remove = (req, res) => {
    const { id } = req.params;
    Products.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        return res.json({ msg: "Product deleted", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
};

module.exports = {
    getAll,
    getProductById,
    create,
    update,
    remove
};