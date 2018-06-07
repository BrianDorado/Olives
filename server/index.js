require('dotenv').config()

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    session = require('express-session'),
    massive = require('massive'),
    products = require('./Controllers/Products/prodCont'),
    stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY),
    stripe_actions = require('./Controllers/Stripe/stripe.js')
    port = process.env.SERVER_PORT;


// ========== MIDDLEWARE ========== //

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance))

// ===== TOP LEVEL MIDDLEWARE ===== //

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUnitialized: false,
    resave: false
}));

// ===== CUSTOM MIDDLEWARE ===== //



// ========== ENDPOINTS ========== //

// === GET REQUESTS === //
app.get('/api/products', products.getAllProducts)
app.get('/api')


// === PUT REQUESTS === //



// === POST REQUESTS === //

// ===== Stripe ===== //
app.post('/api/payment', stripe_actions.stripe_post_req)

// === DELETE REQUESTS === //



app.listen(port || 3060, () => {
    console.log(`listening on port ${port}`)
})