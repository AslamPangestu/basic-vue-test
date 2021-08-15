import { mount, shallowMount } from "@vue/test-utils";
import HasChild from "../../src/HasChild";

test("use mount", () => {
  const wrapper = mount(HasChild);
  console.log("Mount", wrapper.html());
});

test("use shallow mount", () => {
  const wrapper = shallowMount(HasChild);
  console.log("ShallowMount", wrapper.html());
});
