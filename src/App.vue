<template>
  <div id="app">
    <greeting />
    <random-generator />
    <email-validation />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Greeting: () => import("./components/Greeting"),
    RandomGenerator: () => import("./components/RandomGenerator"),
    EmailValidation: () => import("./components/EmailValidation"),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
