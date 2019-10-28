/* eslint-disable no-undef */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const core = require('../src/core');


describe('authorise', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const mock = new MockAdapter(axios);
    const data = { userid: '1234', secret: '1WPk4zRLK4f2q5frPdAqeLqBePD58MBW' };
    mock.onPost('https://www.onlinescoutmanager.co.uk/users.php?action=authorise').reply(200, data);

    // Act
    const response = await core.authorise();
    // Assert
    expect(response).to.equal(true);
  });
});
