import { mount } from "@vue/test-utils";
import RandomGenerator from "../../src/components/RandomGenerator";

let wrapper;
describe("random generator component", () => {
  beforeEach(() => {
    wrapper = mount(RandomGenerator);
  });

  test("showing number after click button", async () => {
    const buttonEl = wrapper.findComponent({ ref: "buttonRef" });
    await buttonEl.trigger("click");
    const numberEl = wrapper.findComponent({ ref: "randomNumberRef" });
    expect(numberEl.exists()).toBeTruthy();
  });

  test("showing info special number if number > 90", async () => {
    const buttonEl = wrapper.findComponent({ ref: "buttonRef" });
    await buttonEl.trigger("click");
    const number = wrapper.findComponent({ ref: "randomNumberRef" }).text();
    if (number > 90) {
      expect(
        wrapper.findComponent({ ref: "messageRef" }).exists()
      ).toBeTruthy();
    } else {
      expect(wrapper.findComponent({ ref: "messageRef" }).exists()).toBeFalsy();
    }
  });
});
