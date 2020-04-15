<template>
  <div>
    analysis
    <HelloWorld v-on:helloWorld="handleClick"></HelloWorld>
    <input v-model.trim="inputVal" />
    <p>input value is : {{ inputVal }}</p>
    <p>input value'length is : {{ inputVal.length }}</p>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld';

export default {
  name: 'Analysis',
  data: function() {
    return {
      inputVal: ''
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    handleClick: function(val) {
      console.log('get hello event', val.target.value);
    }
  }
};
</script>

<style scoped></style>
