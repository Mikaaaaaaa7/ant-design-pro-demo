<template>
  <div>
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider :trigger="null" collapsible v-model="collapsed">
        <div class="logo" />
        <SiderMenu></SiderMenu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="layout-header-style">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
          />
          <Header></Header>
        </a-layout-header>
        <a-layout-content style="margin: 0 16px">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          <Footer></Footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
    <SettingDrawer></SettingDrawer>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';
import SiderMenu from './SiderMenu';
import SettingDrawer from '../components/SettingDrawer';

export default {
  name: 'BasicLayout',
  components: {
    Footer,
    Header,
    SiderMenu,
    SettingDrawer
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style scoped>
.layout-header-style {
  background: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.trigger {
  font-size: 18px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
