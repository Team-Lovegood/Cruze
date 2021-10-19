const expresss = require('express');
const app = expresss();


const landingPage = require('./routes/landingPage.js');
app.use('/', landingPage);




const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on http://localhost:${PORT}`)
});