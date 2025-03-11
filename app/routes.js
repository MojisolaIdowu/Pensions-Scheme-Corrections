//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Logging session data
router.use((req, res, next) => {
  console.log(JSON.stringify({
    method: req.method,
    url: req.originalUrl,
    data: req.session.data
  }, null, 2))
  next()

})

// Routes

router.post('/radio-address-answer', function(request, response) {
  var radioName = request.session.data['radioName']
  if (radioName == "Yes"){
      response.redirect("/check-answers")
  } else if (radioName == "No") {
      response.redirect("/radio-trading")
  }
})

router.post('/radio-trading-answer', function(request, response) {
  var radioTrading = request.session.data['radioTrading']
  if (radioTrading == "Yes"){
      response.redirect("/company-name-previous-postcode")
  } else if (radioTrading == "No") {
      response.redirect("/check-answers-trading-no")
  }

})