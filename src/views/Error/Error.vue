<template>
  <div><el-button @click="goBack">Default</el-button></div>
</template>

<script setup lang="ts">
const router = useRouter();

const goBack = () => {
  router.push('/workbench');
};
</script>

<style scoped></style>
