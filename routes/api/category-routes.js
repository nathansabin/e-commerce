const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// DONE
router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({include: [{model: Product}]});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {include: [{model: Product}]});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO needs work
router.post('/', (req, res) => {
  // create a new category
  Category.create(res.body)
    .then((newCategory) => {
      res.status(200).json(newCategory);
    })
    .catch((err) => {
      res.status(400).json(err)
    });
});

// TODO needs work
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    Category.update(
      {
        category_name: res.body.category_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then((updatedBook) => {
      res.status(200).json(updatedBook);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// TODO
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((removeBook) => {
      res.status(200).json(removeBook);
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
