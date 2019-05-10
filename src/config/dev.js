const host = process.env.DB_HOST || 'localhost';
const databaseName = 'express-mongo-docker'

module.exports = {
  server: {
    port: 9000
  },
  database: {
    url: `mongodb://${host}/${databaseName}`,
  },
  key: {
    privateKey: '37LvDSm4XvjYOh9Y',
    tokenExpireInMinutes: 1440
  },
};
