const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// DONE [v]
router.use('/categories', categoryRoutes);

// DONE
router.use('/products', productRoutes);
// POST [X]----

// DONE [V]
router.use('/tags', tagRoutes);

module.exports = router;
