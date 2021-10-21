const expresss = require("express");
const app = expresss();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const cors = require("cors");

app.use(expresss.json());
app.use(cors());

io.on('connection', (socket) => {
  socket.on('new trip', (trip) => {
    io.emit('new trip', trip);
    console.log('trip info', trip);
  });
  socket.on('tripStatus', (status) => {
    console.log(status);
    io.emit('tripStatus', status);
  });
});



const landingPage = require('./routes/landingPage.js');
app.use('/', landingPage);




// const languageRouter = require("./languages/routes");
// app.use("/languages", languageRouter);

const PORT = process.env.PORT || 3000;
server.listen(PORT, function() {
  console.log(`listening on http://localhost:${PORT}`)
});
