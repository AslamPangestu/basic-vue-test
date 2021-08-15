<template>
  <div>
    <p>Parent</p>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "HasChildPage",
  components: { HelloWorld },
};
</script>
