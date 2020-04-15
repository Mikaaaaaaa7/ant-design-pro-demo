<template>
  <div class="hello">
    here is hell world
    <div @click="handleClick" class="emit-class">
      click here to commit 'helloWorld' event
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    handleClick: function() {
      this.$emit('helloWorld');
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang="less">
.emit-class {
  background-color: antiquewhite;
  color: black;
  cursor: pointer;
}
</style>
