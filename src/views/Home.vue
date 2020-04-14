<template>
  <div class='home'>
    <a-button>ant button</a-button>
    <a-tag>tag 1</a-tag>
  </div>
</template>

<script>
import { Button, Tag } from 'ant-design-vue';

export default {
  name: 'Home',
  components: {
    AButton: Button,
    ATag: Tag
  }
};
</script>
