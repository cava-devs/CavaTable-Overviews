const faker = require('faker');

const diningStyleOption = ['Casual Dining', 'Casual Elegant', 'Fast Casual', 'Family Style', 'Fine Dining', 'Café or Bistro', 'Pop Up Restaurant'];
const cuisineOption = ['American', 'Italian', 'Steakhouse', 'Seafood', 'French', 'Indian', 'Mexican', 'Japanese', 'Chinese', 'German', 'Spanish', 'Pizzeria', 'Fusion / Eclectic', 'Tpas /Small Plates'];
const paymentOption = ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'JCB', 'MasterCard', 'Visa'];
const dressCodeOption = ['Casual Dress', 'Casual', 'Smart Casual', 'Formal', 'Business Casual'];
const tagOption = ['Business meals', 'Great for Lunch', 'Banquet', 'Full Bar', 'Corkage Fee', 'Non-smoking', 'Wheelchair Access' ]


const randomNumber = max => (
  Math.floor(Math.random() * Math.floor(max))
);
const breakfastTime = 'Breakfast: Daily 6:30am - 11:30am';
const lunchTime = 'Lunch: Daily 11:30am - 2:30pm';
const dinnerTime = 'Tuesday through Saturday 6:00pm - 10:00pm';
const restaurantName = faker.company.companyName();
const description = () => faker.lorem.sentence();
const diningStyle = () => diningStyleOption[randomNumber(diningStyleOption.length)];
const cuisine = () => cuisineOption[randomNumber(cuisineOption.length)];
const payment = () => paymentOption.slice(-(randomNumber(paymentOption.length)));
const phoneNumber = () => faker.phone.phoneNumberFormat();
const website = () => faker.internet.url();
const dressCode = () => dressCodeOption[randomNumber(dressCodeOption.length)];
const chef = () => faker.name.findName();
const lat = () => faker.address.latitude();
const lng = () => faker.address.longitude();
const address = () => `${faker.address.streetAddress()}, ${faker.address.stateAbbr()} ${faker.address.zipCode()}`;
const neighborhood = () => faker.address.city();
const crossStreet = () => faker.address.streetName()
const parking = () => faker.lorem.sentence();
const publicTransit = () => faker.lorem.sentence();
const tag = () => tagOption.slice(-(randomNumber(tagOption.length)))

// let test = () => {
//   for(let i = 0; i < 10; i ++) {
//     console.log(phoneNumber(), diningStyle(), cuisine(), description(), payment())
//   }
// }

// test();
console.log(tag());