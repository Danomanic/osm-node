/* eslint-disable no-undef */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const terms = require('../src/terms');


describe('getTerms', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost('https://www.onlinescoutmanager.co.uk/api.php?action=getTerms').reply(200, data);

    // Act
    const response = await terms.getTerms();
    // Assert
    expect(response).to.equal(data);
  });
});
