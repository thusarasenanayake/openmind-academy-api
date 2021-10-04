const faker = require('faker');

faker.locale = 'id_ID';

// ------ students ------

const students = [];
const courseIDs = [425, 102, 145, 232, 221];

for (let i = 0; i < 25; i++) {
  const doc = {
    ID: faker.datatype.number({ min: 800, max: 9999 }),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    address: {
      line1: faker.address.streetAddress(),
      line2: faker.address.streetName(),
      line3: faker.random.objectElement({
        1: '',
        2: faker.address.ordinalDirection(),
      }),
      city: faker.address.city(),
    },
    courseID: courseIDs[faker.datatype.number({ min: 0, max: 4 })],
    phone: faker.phone.phoneNumberFormat(),
    email: faker.internet.email(),
  };
  students.push(doc);
}

console.log(JSON.stringify(students));
