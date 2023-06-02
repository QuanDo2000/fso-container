const express = require('express');
const redis = require('redis');
const router = express.Router();

const configs = require('../util/config');
const { getAsync } = require('../redis');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get('/statistics', async (_, res) => {
  const tempTodos = await getAsync('added_todos');
  if (!tempTodos) {
    res.send({ added_todos: 0 });
    return;
  }
  res.send({ added_todos: parseInt(tempTodos) });
});

module.exports = router;
