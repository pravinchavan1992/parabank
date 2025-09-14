import { faker } from '@faker-js/faker';
export function generateUser() {
  const unique = Date.now() + Math.floor(Math.random() * 10000);
  const username = `user${unique}`;
  return {
  username,
  password: 'Test@1234',
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode('#####'),
  phone: faker.phone.number('##########'),
  ssn: faker.string.numeric(9),
  };
  }