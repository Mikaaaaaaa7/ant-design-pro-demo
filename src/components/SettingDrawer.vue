<template>
  <div class="setting-draw">
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :get-container="false"
      width="300px"
    >
      <template v-slot:handle>
        <div @click="visible = !visible" class="btn">
          <a-icon type="setting"></a-icon>
        </div>
      </template>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: 'SettingDrawer',
  component: {},
  data: function() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.setting-draw {
}
.btn {
  position: absolute;
  width: 50px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  right: 300px;
  top: 45%;
  font-size: 20px;
  color: white;
  background-color: #1890ff;
}
</style>
