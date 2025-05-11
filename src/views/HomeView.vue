<template>
  <div class="container">
    <h2>所有目录</h2>
    <header>
      <router-link :to="route.path" v-for="route in router" :key="route.path">
        {{route.name}}
      </router-link>
    </header>
  </div>
</template>

<script setup>
// 获取所有路由列表
import {useRouter} from "vue-router";

const router = useRouter().getRoutes();
router.shift()



</script>

<style lang="scss" scoped>
a {
  border: 1px solid hsla(170, 100%, 20%, 0.5);
  margin: 0 5px;
  border-radius: 4px;
}
</style>
