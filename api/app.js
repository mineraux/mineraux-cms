const process = require('process');
const express = require('express')
const https = require('https')
const fs = require('fs');
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const mongoose = require('mongoose')
const graphQLSchema = require('./graphql/schema/index.graphql')
const graphQLResolvers = require('./graphql/resolvers/index')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())

const apiPath = "/api"

app.use(cors());

app.use(apiPath,
  graphqlHttp({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
  }
));

const PORT = process.env.PORT;

mongoose
  .connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`, { useNewUrlParser: true })
  .then(() => {
    console.log('🗄 Connected to mongoDB')
  })
  .catch(err => {
    console.error('🗄 Error connect to mongoDB', err)
  })

// // APP
// To create certificate :
// https://flaviocopes.com/express-https-self-signed-certificate/
https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(PORT, () => {
  console.log('🚀 🔒 HTTPS 🔒 : Listening on port : ' + PORT)
  console.log('Check: https://localhost:' + PORT + apiPath)
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})