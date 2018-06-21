const faker = require('faker');
const pgp = require('pg-promise')();
const Promise = require('bluebird');
const fs = require('fs');


const db = pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/restaurant');

const diningOptionArray = ['Casual Dining', 'Casual Elegant', 'Fast Casual', 'Family Style', 'Fine Dining', 'Café or Bistro', 'Pop Up Restaurant'];
const cuisineOptionArray = ['American', 'Italian', 'Steakhouse', 'Seafood', 'French', 'Indian', 'Mexican', 'Japanese', 'Chinese', 'German', 'Spanish', 'Pizzaria', 'Fusion / Eclectic', 'Tapas / Small Plates'];
const paymentOptionArray = ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'JCB', 'Master Card', 'Visa'];
const dressCodeOptionArray = ['Casual Dress', 'Casual', 'Smart Casual', 'Formal', 'Business Casual'];
const tagOptionArray = ['Business meals', 'Great for Lunch', 'Banquet', 'Full Bar', 'Corkage Fee', 'Non-smoking', 'Wheelchair Access', 'Special Occasion', 'Good for a Date', 'Great for Dinner', 'Neighborhood Gem', 'Casual'];


const cuisineOption = {
  American: '1',
  Italian: '2',
  Steakhouse: '3',
  Seafood: '4',
  French: '5',
  Indian: '6',
  Mexican: '7',
  Japanese: '8',
  Chinese: '9',
  German: '10',
  Spanish: '11',
  Pizzaria: '12',
  'Fusion / Eclectic': '13',
  'Tapas / Small Plates': '14',
};

const diningOption = {
  'Casual Dining': '1',
  'Casual Elegant': '2',
  'Fast Casual': '3',
  'Family Style': '4',
  'Fine Dining': '5',
  'Café or Bistro': '6',
  'Pop Up Restaurant': '7',
};

const dressCodeOption = {
  'Casual Dress': '1',
  Casual: '2',
  'Smart Casual': '3',
  Formal: '4',
  'Business Casual': '5',
};

const paymentOption = {
  AMEX: '1',
  'Carte Blanche': '2',
  'Diners Club': '3',
  Discover: '4',
  JCB: '5',
  'Master Card': '6',
  Visa: '7',
};

const tagOption = {
  'Business meals': '1',
  'Great for Lunch': '2',
  Banquet: '3',
  'Full Bar': '4',
  'Corkage Fee': '5',
  'Non-smoking': '6',
  'Wheelchair Access': '7',
  'Special Occasion': '8',
  'Good for a Date': '9',
  'Great for Dinner': '10',
  'Neighborhood Gem': '11',
  Casual: '12',
};

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const makeTable = () => {
  //diningTable
  for (let a = 0; a < diningOptionArray.length; a++) {
    db.none(`INSERT INTO dining_style VALUES ('${a + 1}', '${diningOptionArray[a]}')`).catch((err) => console.log(err))
  }

  for (let b = 0; b < cuisineOptionArray.length; b++) {
    db.none(`INSERT INTO cuisine VALUES ('${b + 1}', '${cuisineOptionArray[b]}')`);
  }
  for (let c = 0; c < paymentOptionArray.length; c++) {
    db.none(`INSERT INTO payment VALUES ('${c + 1}', '${paymentOptionArray[c]}')`)
  }
  for(let d = 0; d < tagOptionArray.length; d++) {
    db.none(`INSERT INTO tag VALUES ('${d + 1}', '${tagOptionArray[d]}')`)
  }
  for(let e = 0; e < dressCodeOptionArray.length; e++) {
    db.none(`INSERT INTO dress_code VALUES ('${e + 1}', '${dressCodeOptionArray[e]}')`)
  }
}


let id = 0;
const breakfastTime = 'Breakfast: Daily 6:30am - 11:30am';
const lunchTime = 'Lunch: Daily 11:30am - 2:30pm';
const dinnerTime = 'Tuesday through Saturday 6:00pm - 10:00pm';
let restaurantName = '';
let description = '';
let diningStyle = '';
let cuisine = '';
let payment = [];
let phoneNumber = '';
let website = '';
let dressCode = '';
let chef = '';
let lat = 0;
let lng = 0;
let address = '';
let neighborhood = '';
let crossStreet = '';
let parking = '';
let publicTransit = '';
let tag = [];
let string = '';
let paymentStr = '';
let tagStr = '';

const writeData = () => {
  for (let k = 0; k < 10; k ++) {
    for (let i = 0; i < 100000; i ++) {
      id = (100000 * k) + i;
      restaurantName = faker.lorem.words();
      description = faker.lorem.sentence();
      diningStyle = diningOptionArray[randomNumber(1, diningOptionArray.length)];
      cuisine = cuisineOptionArray[randomNumber(1, cuisineOptionArray.length)];
      phoneNumber = faker.phone.phoneNumberFormat();
      website = faker.internet.url();
      payment = paymentOptionArray.slice(-(randomNumber(0, paymentOptionArray.length)));
      dressCode = dressCodeOptionArray[randomNumber(1, dressCodeOptionArray.length)];
      chef = faker.lorem.words();
      lat = faker.address.latitude();
      lng = faker.address.longitude();
      address = `${faker.lorem.words()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`;
      neighborhood = faker.lorem.words();
      crossStreet = faker.lorem.words();
      parking = faker.lorem.sentence();
      publicTransit = faker.lorem.sentence();
      tag = tagOptionArray.slice(-(randomNumber(0, tagOptionArray.length)));

      string += `${id}|${restaurantName}|${description}|${diningOption[diningStyle]}|${cuisineOption[cuisine]}|${breakfastTime}|${lunchTime}|${dinnerTime}|${phoneNumber}|${website}|${dressCodeOption[dressCode]}|${chef}|${lat}|${lng}|${address}|${neighborhood}|${crossStreet}|${parking}|${publicTransit}\n`;

      for (let j = 0; j < payment.length; j ++) {
        paymentStr += `${id}|${paymentOption[payment[j]]}\n`;
      }
      for (let l = 0; l < tag.length; l ++) {
        tagStr += `${id}|${tagOption[tag[l]]}|${randomNumber(0, 50)}\n`
      }          
    }
    fs.appendFileSync('restaurant.txt', string);
    string = '';
    fs.appendFileSync('paymentPerRestaurant.txt', paymentStr);
    paymentStr = '';
    fs.appendFileSync('tagPerRestaurant.txt', tagStr);
    tagStr = '';
  }
};

makeTable();
console.log('table is done?');

// console.time('10M-elements');
// writeData();
// console.timeEnd('10M-elements');
// console.log('making data is done?');




