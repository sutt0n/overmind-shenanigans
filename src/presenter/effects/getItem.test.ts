import { getItem } from './getItem';

describe('getItem', () => {
  let getItemStub: jest.Mock<any,any>;
  let mockItem: Record<string,string>;

  beforeEach(() => {
    mockItem = {
      foo: 'bar',
      chef: 'Guy Fieri',
      motto: 'Welcome to Flavortown',
      title: 'Mayor of Flavortown',
    };

    getItemStub = jest.fn(() => JSON.stringify(mockItem));
    Storage.prototype.getItem = getItemStub;
  });

  it('gets the item given the key', () => {
    const result = getItem('todos');

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith('todos');
    expect(result).toEqual(mockItem);
  });

  it('returns null for no value found for a given key', () => {
    getItemStub.mockImplementation(() => undefined);

    const result = getItem('null');

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith('null');
    expect(result).toEqual(null);
  });
});