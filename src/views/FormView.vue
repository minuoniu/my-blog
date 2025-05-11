<script setup>

import {useUserInfoStore} from "@/stores/userInfo.js";

const {userInfo: {name, age, address}, setUserInfo} = useUserInfoStore()

function handleChange(userInfo) {
  console.log(userInfo)
  setUserInfo(userInfo)
}


</script>

<template>
  <div>
    <form action="" @change="handleChange({name, age, address})">
      <label for="name"><input id="name" v-model="name" type="text"/>name</label>
      <label for="age"><input id="age" v-model="age" type="text"/>age</label>
      <label for="address"><input id="address" v-model="address" type="text"/>address</label>
    </form>
  </div>
</template>

<style scoped>

</style>
