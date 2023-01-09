import {once} from 'events';
import express from 'express';
import markoMiddleware from '@marko/express';
import compressionMiddleware from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import authRedirect from './src/middlewares/authRedirect.js';
import setAuthSession from './src/middlewares/setAuthSession.js';

const devEnv = 'development';
const {NODE_ENV = devEnv, PORT = 3000} = process.env;
const corsOptions = {origin: '*', optionsSuccessStatus: 200};
const sessionOptions = {
  secret: 'm$%jkGNA%s5QJg6r*!d6*K2J@@%zbZo9M%DDGfx@',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
};

console.time('Start');

const app = express()
  .use(cors(corsOptions))
  .use(cookieParser())
  .use(session(sessionOptions))
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use(compressionMiddleware())
  .use(markoMiddleware())
  .use(setAuthSession)
  .use(authRedirect);

if (NODE_ENV === devEnv) {
  const {createServer} = await import('vite');
  const devServer = await createServer({
    appType: 'custom',
    server: {middlewareMode: true},
  });
  app
    .use(devServer.middlewares)
    .use(async (req, res, next) => {
      try {
        const {router} = await devServer.ssrLoadModule('./src/index.js');
        router(req, res, handleNext);
      } catch (err) {
        handleNext(err);
      }

      function handleNext(err) {
        if (err) devServer.ssrFixStacktrace(err);
        next(err);
      }
    })
    .use('/assets', express.static('src/assets'));
} else {
  app
    .use('/assets', express.static('dist/assets')) // Serve assets generated from vite.
    .use((await import('./dist/index.js')).router);
}

await once(app.listen(PORT), 'listening');

console.timeEnd('Start');
console.log(`Env: ${NODE_ENV}`);
console.log(`Address: http://localhost:${PORT}`);
