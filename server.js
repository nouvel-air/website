const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // https://learnnextjs.com/basics/server-side-support-for-clean-urls/create-our-custom-route
    server.get('/blog/:slug', (req, res) => {
      const actualPage = '/article';
      const queryParams = { slug: req.params.slug };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/:locale(it|fr)(/:page)?', (req, res) => {
      const actualPage = req.params.page ? '/' + req.params.page : '/';
      const queryParams = { locale: req.params.locale };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
