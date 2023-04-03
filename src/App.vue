<template>
  <h1 class="text-3xl font-bold underline bg-red-500">Hello world!</h1>
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="primary" shape="circle">A</a-button>
  <a-button type="primary">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button>
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button type="dashed" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <a-button type="dashed">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <br />
  <br />
  <a-tooltip title="search">
    <a-button type="primary" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button type="primary" shape="circle" size="large">A</a-button>
  <a-button type="primary" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-tooltip title="search">
    <a-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <br />
  <a-tooltip title="search">
    <a-button shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-tooltip title="search">
    <a-button type="dashed" shape="circle" size="large">
      <template #icon><SearchOutlined /></template>
    </a-button>
  </a-tooltip>
  <a-button type="dashed" size="large">
    <template #icon><SearchOutlined /></template>
    Search
  </a-button>
  <a-button size="large" href="https://www.google.com">
    <template #icon><SearchOutlined /></template>
  </a-button>
</template>
<script>
import { SearchOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    SearchOutlined,
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
