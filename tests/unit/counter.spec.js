import { mount } from "@vue/test-utils";
import Counter from "../../src/components/Counter";

let wrapper;
describe("counter component", () => {
  beforeEach(() => {
    wrapper = mount(Counter);
  });

  it("will increase number if click + button", async () => {
    const btnPlusEl = wrapper.findComponent({ ref: "plusBtnRef" });
    const currentNumber = wrapper.findComponent({ ref: "numberRef" }).text();
    await btnPlusEl.trigger("click");
    expect(wrapper.findComponent({ ref: "numberRef" }).text()).toBe(
      String(Number(currentNumber) + 1)
    );
  });

  it("will decrease number if click - button", async () => {
    const btnMinEl = wrapper.findComponent({ ref: "minBtnRef" });
    const btnPlusEl = wrapper.findComponent({ ref: "plusBtnRef" });
    await btnPlusEl.trigger("click");
    const currentNumber = wrapper.findComponent({ ref: "numberRef" }).text();
    await btnMinEl.trigger("click");
    expect(wrapper.findComponent({ ref: "numberRef" }).text()).toBe(
      String(Number(currentNumber) - 1)
    );
  });

  it("won't decrease number if click - button and number = 0", async () => {
    // wrapper.vm.number; -> Acces Data
    const btnMinEl = wrapper.findComponent({ ref: "minBtnRef" });
    const currentNumber = wrapper.findComponent({ ref: "numberRef" }).text();
    await btnMinEl.trigger("click");
    expect(wrapper.findComponent({ ref: "numberRef" }).text()).toBe(
      currentNumber
    );
  });

  it("will increase by 10 if click + button and number = 10", async () => {
    await wrapper.setData({ number: 10 });
    const btnPlusEl = wrapper.findComponent({ ref: "plusBtnRef" });
    const currentNumber = wrapper.findComponent({ ref: "numberRef" }).text();
    await btnPlusEl.trigger("click");
    expect(wrapper.findComponent({ ref: "numberRef" }).text()).toBe(
      String(Number(currentNumber) + 10)
    );
  });

  it("will decrease by 10 if click - button and number = 10", async () => {
    await wrapper.setData({ number: 10 });
    const btnMinEl = wrapper.findComponent({ ref: "minBtnRef" });
    const currentNumber = wrapper.findComponent({ ref: "numberRef" }).text();
    await btnMinEl.trigger("click");
    expect(wrapper.findComponent({ ref: "numberRef" }).text()).toBe(
      String(Number(currentNumber) - 10)
    );
  });
});
