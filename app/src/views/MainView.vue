<script setup lang="ts">
import { socket } from "@/lib/socket-client";
socket.on("kafka-message", (message) => {
  console.log(message);
});
</script>

<template>
  <main>
    <h1>Here comes the app</h1>
    <NSkeleton height="70vh" />
  </main>
</template>
