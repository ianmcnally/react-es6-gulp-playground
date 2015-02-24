import {addons} from 'react/addons';
var TestUtils = addons.TestUtils;

jest.dontMock('../app.jsx');

describe('App', () => {

  it('runs', () => {
    expect(2).toEqual(2);
  });

});