const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// get / works
// get /id works
// TODO fix all other routes
router.use('/categories', categoryRoutes);

// DONE
router.use('/products', productRoutes);

// TODO ALL 
router.use('/tags', tagRoutes);

module.exports = router;
