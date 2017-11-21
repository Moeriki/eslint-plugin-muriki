'use strict';

const muriki = require('../');

it('should match snapshot', () => {
  expect(muriki).toMatchSnapshot();
});
