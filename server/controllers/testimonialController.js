const testimonialModel = require('../models/testimonial');

function getTestimonials(req, res) {
  try {
    const rows = testimonialModel.getAll();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Não foi possível carregar os depoimentos.' });
  }
}

function postTestimonial(req, res) {
  try {
    const { name, message } = req.body || {};
    if (
      typeof name !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !message.trim()
    ) {
      return res
        .status(400)
        .json({ error: 'Nome e mensagem são obrigatórios.' });
    }
    const created = testimonialModel.create({ name, message });
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Não foi possível salvar o depoimento.' });
  }
}

module.exports = { getTestimonials, postTestimonial };
