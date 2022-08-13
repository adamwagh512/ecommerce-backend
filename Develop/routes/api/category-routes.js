const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//Get route works, just need to include associated products
router.get('/', async (req, res) => {
  // find all categories
  Category.findAll().then((allCategories) => {
    res.json(allCategories)
  })
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData)
  })
  // be sure to include its associated Products
});

//create a new category
//tested and working
router.post('/', async (req, res) => {
  Category.create({
    category_name: req.body.category_name
  }).then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  })
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
