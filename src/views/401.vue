<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>

<template>
  <div class="error-page">
    <h1>401 - Unauthorized</h1>
    <p>对不起，您没有权限访问此页面。</p>
    <button @click="goBack">返回上一页</button>
  </div>
</template>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 3rem;
  color: #e74c3c;
}

p {
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #333;
}

button {
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>