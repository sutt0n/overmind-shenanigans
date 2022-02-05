import { createOvermindMock, OvermindMock } from "overmind";
import { config } from '../';

describe("onInitializeOvermind", () => {
  let overmind: OvermindMock<{ state: { todoTitle: string; todoDescription: string; }; actions: typeof import("../actions"); effects: typeof import("../effects"); }>;
  let getItemStub: jest.Mock<any, any>;
  let mockTodo = { title: "TODO Title", description: "TODO Description" };

  beforeEach(() => {
    getItemStub = jest.fn().mockReturnValue([mockTodo]);

    // TODO: refactor
    overmind = createOvermindMock(
      {
        ...config,
        state: { todoTitle: "TODO Title", todoDescription: "TODO Description" },
      },
      {
        getItem: getItemStub,
      }
    );
  });

  it('loads the initial todos with onInitializeOvermind', () => {
    overmind.actions.onInitializeOvermind();

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith('todos');
    expect(overmind.state).toEqual(
      expect.objectContaining({
        todos: [mockTodo],
      })
    );
  });
});