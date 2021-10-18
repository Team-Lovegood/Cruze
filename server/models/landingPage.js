//login routes
  //firebase to sign in
  //user.role === rider || driver
  // get information from user.role table where firebase email matches given email, get all ratings and format them to decimal
  // pass information to home page

//sign up routes
  // user.role === rider || driver
  // insert all data into user.role table
  // need conditional for no ratings, maybe start everyone at 5? --sounds good
  //


const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'isaacmfavila',
  database: 'cruze',
  host: '',
  port: 5432
});
pool.connect(err => {
  if (err) {
  console.error('connection error', err.stack);
  } else {
    console.log('connected to databse');
  }
});


const Login = (req, res) => {
  let role = 'drivers';
  let email = 'isaac@test.com';
  pool.query(`select * from ${role} where email = '${email}'`)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

const RiderSignup = (req, res) => {
}
const DriverSignup = (req, res) => {
}

module.exports = {
  Login
}