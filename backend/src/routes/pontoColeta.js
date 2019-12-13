const express = require('express');
const router = express.Router();
const controller = require('../controllers/pontoColetaController')

router.get('/:id?', controller.get);
//router.get('/:id', controller.getById);
router.post('/', controller.post);
router.patch('/:id', controller.patch);
//router.delete('/', controller.delete);
router.post('/nome', controller.byName);

module.exports = router;