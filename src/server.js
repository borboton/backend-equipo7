const http = require('http');

const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const PORT = process.env.PORT || 8081;

const logger = require('./config/logger');

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    logger.info(`Server Listening on ${PORT}`);
  });
}

startServer();
