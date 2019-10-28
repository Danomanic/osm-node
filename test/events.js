/* eslint-disable no-undef */
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { expect } = require('chai');
const events = require('../src/events');

describe('getEventsSummary', () => {
  it('Should call API and return response successfully when called with sectionid and termid', async () => {
    // Arrange
    const sectionid = 1234;
    const termid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/events/summary/?action=get&sectionid=${sectionid}&termid=${termid}`).reply(200, data);

    // Act
    const response = await events.getEventsSummary(sectionid, termid);
    // Assert
    expect(response).to.equal(data);
  });
  it('Should call API and return response successfully when called with just sectionid', async () => {
    // Arrange
    const sectionid = 1234;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/events/summary/?action=get&sectionid=${sectionid}&termid=-1`).reply(200, data);

    // Act
    const response = await events.getEventsSummary(sectionid);
    // Assert
    expect(response).to.equal(data);
  });
});

describe('getEventStructure', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const sectionid = 1234;
    const eventid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/events/event/?action=getStructureForEvent&sectionid=${sectionid}&eventid=${eventid}`).reply(200, data);

    // Act
    const response = await events.getEventStructure(sectionid, eventid);
    // Assert
    expect(response).to.equal(data);
  });
});

describe('getEventAttendance', () => {
  it('Should call API and return response successfully when called with eventid, sectionid and termid', async () => {
    // Arrange
    const sectionid = 1234;
    const eventid = 5678;
    const termid = 9123;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/events/event/?action=getAttendance&eventid=${eventid}&sectionid=${sectionid}&termid=${termid}`).reply(200, data);

    // Act
    const response = await events.getEventAttendance(sectionid, eventid, termid);
    // Assert
    expect(response).to.equal(data);
  });
  it('Should call API and return response successfully when called with just eventid and sectionid', async () => {
    // Arrange
    const sectionid = 1234;
    const eventid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/events/event/?action=getAttendance&eventid=${eventid}&sectionid=${sectionid}&termid=-1`).reply(200, data);

    // Act
    const response = await events.getEventAttendance(sectionid, eventid);
    // Assert
    expect(response).to.equal(data);
  });
});

describe('getEventAttachments', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const sectionid = 1234;
    const eventid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/uploads/events/?action=listAttachments&sectionid=${sectionid}&eventid=${eventid}`).reply(200, data);

    // Act
    const response = await events.getEventAttachments(sectionid, eventid);
    // Assert
    expect(response).to.equal(data);
  });
});

describe('getEventEquipment', () => {
  it('Should call API and return response successfully', async () => {
    // Arrange
    const sectionid = 1234;
    const eventid = 5678;
    const mock = new MockAdapter(axios);
    const data = 'test';
    mock.onPost(`https://www.onlinescoutmanager.co.uk/ext/quartermaster/eventbookings/?action=loadListsForEvent&sectionid=${sectionid}&eventid=${eventid}`).reply(200, data);

    // Act
    const response = await events.getEventEquipment(sectionid, eventid);
    // Assert
    expect(response).to.equal(data);
  });
});
