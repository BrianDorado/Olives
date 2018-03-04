const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      session = require('express-session'),
      config = require('dotenv'),
      app = express(),
      port = 4000;


// ========== MIDDLEWARE ========== //

// ===== TOP LEVEL MIDDLEWARE ===== //

app.use(bodyParser.json());
app.use(cors());
app.use(session({
     secret: config.secret,
     saveUnitialized: false,
     resave: false
}));

// ===== CUSTOM MIDDLEWARE ===== //



// ========== ENDPOINTS ========== //

// === GET REQUESTS === //



// === PUT REQUESTS === //



// === POST REQUESTS === //



// === DELETE REQUESTS === //



app.listen(port, () => {
    console.log(`listening on port ${port}`)
})