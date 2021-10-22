const Pool = require("pg").Pool;
const pool = new Pool({
  user: "",
  database: "cruze",
  host: "",
  port: 5432,
});
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected to databse");
  }
});

const Login = (req, res) => {
  let role = req.query.role;
  let email = req.query.email;
  pool
    .query(`select * from ${role} where email = '${email}'`)
    .then(({ rows }) => {
      res.status(200).send(rows);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const RiderSignup = (req, res) => {
  const { firstName, lastName, email, phone} = req.body.params;
  let queryStr = 'insert into riders(firstname, lastname, email, phone) values ($1, $2, $3, $4)';
  let queryParams = [firstName, lastName, email, phone];

  pool
    .query(queryStr, queryParams)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};
const DriverSignup = (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    carMake,
    carModel,
    carColor,
    carCapacity,
    licensePlate,
  } = req.body.params;

  let queryStr = 'insert into drivers(firstname, lastname, email, phone, carmake, carmodel, carcolor, carcapacity, licenseplate) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
  let queryParams = [firstName, lastName, email, phone, carMake, carModel, carColor, carCapacity, licensePlate];
  pool.query(queryStr, queryParams)
    .then(response => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  Login,
  RiderSignup,
  DriverSignup,
};
