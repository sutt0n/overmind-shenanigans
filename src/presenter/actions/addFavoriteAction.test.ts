import { createOvermindMock, OvermindMock } from "overmind";
import { config } from "..";

describe("addFavoriteAction", () => {
  let overmind: OvermindMock<{
    state: { favorites: Array<string> };
    actions: typeof import("../actions");
    effects: typeof import("../effects");
  }>;
  let getItemStub: jest.Mock<any, any>;
  let setItemStub: jest.Mock<any, any>;
  let mockFavorite = 'http://swapi.com';

  beforeEach(() => {
    getItemStub = jest.fn().mockReturnValue([mockFavorite]);
    setItemStub = jest.fn();

    // TODO: refactor
    overmind = createOvermindMock(
      {
        ...config,
        state: { favorites: [] },
      },
      {
        getItem: getItemStub,
        setItem: setItemStub,
      }
    );
  });

  it("loads the initial todos with addFavoriteAction", () => {
    const newFavorite = 'https://swapi.com';

    // @todo: fix call signature; prolly make it an object
    overmind.actions.addFavoriteAction(newFavorite);

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith("todos");
    expect(setItemStub).toHaveBeenCalled();
    expect(setItemStub).toHaveBeenCalledWith(
      "favorites",
      expect.arrayContaining([
        newFavorite
      ])
    );
    expect(overmind.state).toEqual(
      expect.objectContaining({
        favorites: [mockFavorite, newFavorite],
      })
    );
  });
});
