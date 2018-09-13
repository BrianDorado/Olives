require('dotenv').config()

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    massive = require('massive'),
    products = require('./Controllers/Products/prodCont'),
    user = require('./Controllers/Users/user_controllers')
    stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY),
    stripe_actions = require('./Controllers/Stripe/stripe.js')
    port = process.env.SERVER_PORT;


// ========== MIDDLEWARE ========== //

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance))

// ===== TOP LEVEL MIDDLEWARE ===== //

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUnitialized: false,
    resave: false
}));

// ===== CUSTOM MIDDLEWARE ===== //



// ========== ENDPOINTS ========== //

// === GET REQUESTS === //
app.get('/api/products', products.getAllProducts)
// app.get('/api')


// === PUT REQUESTS === //
// app.post('/api/users/update-user-info')


// === POST REQUESTS === //

app.post('/api/users/create-user')
app.post('api/products/create-product', products.createProduct)

// === DELETE REQUESTS === //


// ===== Stripe ===== //

app.post('/api/payment', stripe_actions.stripe_post_req)


// ===== Port ===== //

app.listen(port || 4000, () => {
    console.log(`listening on port ${port}`)
})