import { mount } from "@vue/test-utils";
import Counter from "../../src/components/Counter";

let wrapper;
describe("counter component", () => {
  beforeEach(() => {
    wrapper = mount(Counter);
  });
  it.todo("will increase number if click + button", () => {});
  it.todo("will decrease number if click - button", () => {});
  it.todo("won't decrease number if click - button and number = 0", () => {});
  it.todo("will increase by 10 if click + button and number = 10", () => {});
});
