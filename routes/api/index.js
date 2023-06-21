const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// TODO fix delete
router.use('/categories', categoryRoutes);

// DONE
router.use('/products', productRoutes);

// TODO ALL 
router.use('/tags', tagRoutes);

module.exports = router;
