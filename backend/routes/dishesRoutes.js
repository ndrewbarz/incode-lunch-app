const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const Menu = require('../models/menuModel');

// @desc  	Fetch all dishes
// @route  	GET /api/dishes
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const menu = await Menu.find({});

    res.json(menu);
  })
);

// @desc  	Fetch single dishe
// @route  	GET /api/dishes/:id
// @access  Public
// router.get(
//   '/:id',
//   asyncHandler(async (req, res) => {
//     const dish = await Menu.findById(req.params.id);

//     if (dish) {
//       res.json(dish);
//     } else {
//       res.status(404).json({ message: 'Dish not found' });
//     }
//   })
// );

module.exports = router;
