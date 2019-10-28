/* eslint-disable no-undef */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const members = require('../src/members');


describe('getMembers', () => {
  it('Should call API and return response successfully when called with sectionid and termid', async () => {
    // Arrange
    const sectionid = 1234;
    const termid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/members/contact/?action=getListOfMembers&sort=dob&sectionid=${sectionid}&termid=${termid}`).reply(200, data);

    // Act
    const response = await members.getMembers(sectionid, termid);

    // Assert
    expect(response).to.equal(data);
  });
  it('Should call API and return response successfully when called with just sectionid', async () => {
    // Arrange
    const sectionid = 1234;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/members/contact/?action=getListOfMembers&sort=dob&sectionid=${sectionid}&termid=-1`).reply(200, data);

    // Act
    const response = await members.getMembers(sectionid);

    // Assert
    expect(response).to.equal(data);
  });
});


describe('getMemberDetails', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const sectionid = 1234;
    const memberid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/customdata/?action=getData&section_id=${sectionid}`).reply(200, data);

    // Act
    const response = await members.getMemberDetails(sectionid, memberid);

    // Assert
    expect(response).to.equal(data);
  });
});

describe('getAttendance', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const sectionid = 1234;
    const termid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/members/attendance/?action=get&sectionid=${sectionid}&termid=${termid}`).reply(200, data);

    // Act
    const response = await members.getAttendance(sectionid, termid);

    // Assert
    expect(response).to.equal(data);
  });
});
