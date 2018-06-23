const cassandra = require('cassandra-driver');
var client = new cassandra.Client({ contactPoints: ['localhost'] })

// client.execute('select key from system.local', function (err, result) {
//   if (err) throw err
//   console.log(result.rows[1])
// })

// client.connect(function(err,result){
//     console.log('cassandra connected')
// });
let createFK = `CREATE KEYSPACE IF NOT EXISTS abletableKey WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor' : 3}`


client.execute(createFK, (err, result) => {
  if(err) {
    console.log(err, 'error during making key space')
  } else {
    console.log('keyspace is created');
  }
});
let createTable = `CREATE TABLE IF NOT EXISTS abletableKey.restaurants 
  (id int, 
  name text, 
  description text,
  dining_style text,
  cuisine text,
  breakfast_hours text,
  lunch_hours text,
  dinner_hours text,
  phone_number text,
  website text, 
  dress_code text,
  chef text,
  lat decimal,
  lng decimal,
  adress text,
  neighborhood text,
  croess_street text,
  parking text,
  public_transit text,
  payment list<text>,
  tag map<text, int>,
  PRIMARY KEY(id)
  )`


client.execute(createTable, (err, result) => {
  if(err) {
    console.log(err, 'error during making table')
  } else {
    console.log('table is created');
  }
});

// // let copyData = `COPY abletableKey.restaurants FROM './noSqlTest.txt' WITH DELIMITER ='|'`
// let copyData = `INSERT INTO abletableKey.restaurants (id, name) VALUES (1, 'jehwa')`

// client.execute(copyData, (err, result) => {
//   if(err) {
//     console.log(err, 'error during coping data')
//   } else {
//     console.log('check your table');
//   }
// });


// let testFuc = () => {
//   console.log('hi');
// }

// module.exports = {
//   testFuc
// }