<template>
  <div>
    <center>
      <p>Counter</p>
      <div>
        <button ref="minBtnRef" @click.prevent="_onClickMin">-</button>
        <span ref="numberRef">{{ number }}</span>
        <button ref="plusBtnRef" @click.prevent="_onClickPlus">+</button>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "CounterComponent",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    _onClickPlus() {
      if (this.number >= 10) {
        this.number += 10;
        return;
      }
      this.number += 1;
    },
    _onClickMin() {
      if (this.number >= 10) {
        this.number -= 10;
        return;
      }
      if (this.number > 0) {
        this.number -= 1;
      }
    },
  },
};
</script>
