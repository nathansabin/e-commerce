const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// DONE
// Post all tag info and related info
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
// lets you add a number to your end point, if that number has a tag id it will grab that data and related data
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

// DONE
// lets you add a new entry
// formated as {tag_name: "data", product_id: -number-}
router.post('/', (req, res) => {
  // create a new tag
  try {
    Tag.create(req.body).then((newTag) => {
      ProductTag.create({
        product_id: req.body.product_id,
        tag_id: newTag.id
      });
      res.status(200).json(newTag);
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// Done
// will let you update the name of a tag
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
// removes a tag if you add a valid id to the end point
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
