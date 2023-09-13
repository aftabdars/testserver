const express = require('express');
const router = express.Router();

router.get('/', getOrder);
router.get('/:id', getOrderById);
router.put('/update', updateOrder);
router.post('/add', addOrder);


module.exports = router;
