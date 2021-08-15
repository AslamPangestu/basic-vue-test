import { mount } from "@vue/test-utils";
import Greeting from "../../src/components/Greeting";

let wrapper;
describe("greeting component", () => {
  beforeEach(() => {
    wrapper = mount(Greeting);
  });

  test("p greeting will not show at first", () => {
    const elementGreeting = wrapper.findComponent({ ref: "greetingRef" });
    expect(elementGreeting.exists()).toBeFalsy();
  });

  test("p grettings will show textfield value", async () => {
    const NAME = "Aslam";
    const elementButton = wrapper.findComponent({ ref: "buttonRef" });
    await wrapper.findComponent({ ref: "inputRef" }).setValue(NAME);
    await elementButton.trigger("click");
    expect(wrapper.findComponent({ ref: "greetingRef" }).text()).toContain(
      NAME
    );
  });
});
