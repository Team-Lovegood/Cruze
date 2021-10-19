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

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "dyk960830",
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
  const { firstName, lastName, email, phone } = req.body.params;

  let queryStr =
    "insert into riders(firstname, lastname, email, phone) values ($1, $2, $3, $4)";
  let queryParams = [firstName, lastName, email, phone];
  pool
    .query(queryStr, queryParams)
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};
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
  let queryStr =
    "insert into drivers(firstname, lastname, email, carmake, carmodel, carcolor, licenseplate) values ($1, $2, $3, $4, $5, $6, $7)";
  let queryParams = [
    firstName,
    lastName,
    email,
    carmake,
    carmodel,
    carcolor,
    plate,
  ];
  pool
    .query(queryStr, queryParams)
    .then((response) => {
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
