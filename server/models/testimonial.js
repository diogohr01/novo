const db = require('../database/db');

function getAll() {
  const stmt = db.prepare(
    'SELECT id, name, message FROM testimonials ORDER BY id DESC'
  );
  return stmt.all();
}

function create({ name, message }) {
  const stmt = db.prepare(
    'INSERT INTO testimonials (name, message) VALUES (?, ?)'
  );
  const result = stmt.run(name.trim(), message.trim());
  return { id: result.lastInsertRowid, name: name.trim(), message: message.trim() };
}

module.exports = { getAll, create };
