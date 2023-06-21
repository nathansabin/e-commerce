const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// DONE
router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({include: [{model: Product}]});
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE 
router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {include: [{model: Product}]});
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO
router.post('/', (req, res) => {
  // create a new tag
  
});

// TODO
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then((updatedTag) => {
      res.status(200).json(updatedTag);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DONE 
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    Tag.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    .then((removedTag) => {
      res.status(200).json(removedTag);
    }); 
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
