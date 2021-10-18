const expresss = require('express');
const app = expresss();


// app.get('/', function(req, res) {
//   res.send('Hello team lovegood');
// });


const landingPage = require('./routes/landingPage.js');
app.use('/', landingPage);




const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on http://localhost:${PORT}`)
});