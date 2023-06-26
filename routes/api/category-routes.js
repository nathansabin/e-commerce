const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// DONE
// gets all data in categories
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
// gets all data with a related id
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

// DONE 
// creates a new category 
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.status(200).json(newCategory);
    })
    .catch((err) => {
      res.status(400).json(err)
    });
});

// DONE
//  update a category by its `id` value
router.put('/:id', (req, res) => {
  try {
    return Category.update(
      {
        category_name: req.body.category_name
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

// Done
 // delete a category by its `id` value
router.delete('/:id', (req, res) => {
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

