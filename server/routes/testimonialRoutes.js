const express = require('express');
const testimonialController = require('../controllers/testimonialController');

const router = express.Router();

router.get('/testimonials', testimonialController.getTestimonials);
router.post('/testimonials', testimonialController.postTestimonial);

module.exports = router;
