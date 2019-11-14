/* eslint-disable no-undef */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const sections = require('../src/sections');


describe('getSectionsNationally', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost('https://www.onlinescoutmanager.co.uk/ext/members/sectionplanning/?action=listSections').reply(200, data);

    // Act
    const response = await sections.getSectionsNationally();
    // Assert
    expect(response).to.equal(data);
  });
});
