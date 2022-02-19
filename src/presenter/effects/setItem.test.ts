import { setItem } from './setItem';

describe('setItem', () => {
  let setItemStub: jest.Mock<any,any>;
  let mockItem: any;

  beforeEach(() => {
    mockItem = {
      title: 'Mock Todo Title',
      description: 'Mock Todo Description',
    };

    setItemStub = jest.fn();
    Storage.prototype.setItem = setItemStub;
  });

  it('gets the item given the key', () => {
    setItem('todos', mockItem);

    expect(setItemStub).toHaveBeenCalled();
    expect(setItemStub).toHaveBeenCalledWith('todos', JSON.stringify(mockItem));
  });
});