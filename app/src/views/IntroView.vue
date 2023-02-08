<script setup lang="ts">
</script>

<template>
  <h1>What it's about</h1>
  <NSkeleton text size="large" :repeat="3" />
  <n-space>
    <RouterLink to="main" :custom="true" v-slot="{ navigate }">
      <n-button @click="navigate" size="large"> TO MAIN PAGE </n-button>
    </RouterLink>
  </n-space>
</template>
