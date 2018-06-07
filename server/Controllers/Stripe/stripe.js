const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

module.exports ={ 
    stripe_post_req: (req, res, next) => {
        const charge = stripe.charges.create({
            source: req.body.token.id,
            amount: req.body.amount,
            currency: 'usd',
            description: 'stripe test charge'
        },
        function(err, charge) {
            if (err) return res.sendStatus(500)
            else return res.sendStatus(200)
        }
    )
    }
}