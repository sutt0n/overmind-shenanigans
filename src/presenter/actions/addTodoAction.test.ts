import { createOvermindMock, OvermindMock } from "overmind";
import { config } from "../";

describe("addTodoAction", () => {
  let overmind: OvermindMock<{
    state: { todoTitle: string; todoDescription: string };
    actions: typeof import("../actions");
    effects: typeof import("../effects");
  }>;
  let getItemStub: jest.Mock<any, any>;
  let setItemStub: jest.Mock<any, any>;
  let mockTodo = { title: "TODO Title", description: "TODO Description" };

  beforeEach(() => {
    getItemStub = jest.fn().mockReturnValue([mockTodo]);
    setItemStub = jest.fn();

    // TODO: refactor
    overmind = createOvermindMock(
      {
        ...config,
        state: { todoTitle: "TODO Title", todoDescription: "TODO Description" },
      },
      {
        getItem: getItemStub,
        setItem: setItemStub,
      }
    );
  });

  it("loads the initial todos with addTodoAction", () => {
    const newTodo = {
      title: "New Todo Title",
      description: "New Todo Description",
    };

    overmind.actions.addTodoAction(newTodo);

    expect(getItemStub).toHaveBeenCalled();
    expect(getItemStub).toHaveBeenCalledWith("todos");
    expect(setItemStub).toHaveBeenCalled();
    expect(setItemStub).toHaveBeenCalledWith(
      "todos",
      expect.arrayContaining([
        expect.objectContaining(newTodo)
      ])
    );
    expect(overmind.state).toEqual(
      expect.objectContaining({
        todos: [mockTodo, newTodo],
      })
    );
  });
});
