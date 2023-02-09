<script setup lang="ts">
defineProps({
  rentals: Number,
  returns: Number,
});
</script>

<template>
  <n-row>
    <n-col :span="12">
      <n-statistic label="Ausleihen">
        {{ rentals }}
      </n-statistic>
    </n-col>
    <n-col :span="12">
      <n-statistic label="Rückgaben">
        {{ returns }}
      </n-statistic>
    </n-col>
  </n-row>
</template>
