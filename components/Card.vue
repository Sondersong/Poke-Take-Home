<script setup>
  const props = defineProps(['name'])
</script>

<template>
  <h1>This is a card</h1>
  <p>{{ props.name }}</p>
</template>