import { mount } from "@vue/test-utils";
import EmailValidation from "../../src/components/EmailValidation";

let wrapper;
describe("email validation component", () => {
  beforeEach(() => {
    wrapper = mount(EmailValidation);
  });
  const DATA_TEST = [
    { email: "hahah", hasErrorMessage: true },
    { email: "aslampangestu@gmail.com", hasErrorMessage: false },
  ];

  test.each(DATA_TEST)(
    "error message will show if email invalid",
    async ({ email, hasErrorMessage }) => {
      const buttonEl = wrapper.findComponent({ ref: "buttonRef" });
      const inputEl = wrapper.findComponent({ ref: "inputRef" });
      await inputEl.setValue(email);
      await buttonEl.trigger("click");
      expect(wrapper.findComponent({ ref: "errorMessageRef" }).exists()).toBe(
        hasErrorMessage
      );
    }
  );
});
