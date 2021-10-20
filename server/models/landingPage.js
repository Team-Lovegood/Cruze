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
  let role = req.query.role;
  let email = req.query.email;
  pool.query(`select * from ${role} where email = '${email}'`)
    .then(({rows}) => {
      res.status(200).send(rows);
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

const RiderSignup = (req, res) => {
  const { firstName, lastName, email} = req.body.params;
  let queryStr = 'insert into riders(firstname, lastname, email) values ($1, $2, $3)';
  let queryParams = [firstName, lastName, email];

  pool.query(queryStr, queryParams)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(error => {
      res.status(500).send(error);
    })
}
const DriverSignup = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    carMake: carmake,
    carModel: carmodel,
    carColor: carcolor,
    licensePlate: plate,
  } = req.body.params;

  let queryStr = 'insert into drivers(firstname, lastname, email, carmake, carmodel, carcolor, licenseplate) values ($1, $2, $3, $4, $5, $6, $7)';
  let queryParams = [firstName, lastName, email, carmake, carmodel, carcolor, plate];
  pool.query(queryStr, queryParams)
    .then(response => {
      res.sendStatus(201);
    })
    .catch(err => {
      res.status(500).send(err);
    })
}

module.exports = {
  Login,
  RiderSignup,
  DriverSignup
}