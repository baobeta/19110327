const {
  listAll,
  addItem,
  getMessage,
  listMessage,
  getItem,
} = require('../controller');

const router = (app) => {
  app.get('/', listAll);
  app.get('/19110327/:id', getItem);
  app.post('/19110327/:id', addItem);
  app.get('/message/:id', getMessage);
  app.get('/message', listMessage);
};

module.exports = router;
