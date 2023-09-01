<script setup>
  const {data} = await useFetch('/api/test')
</script>

<template>
  <h1>This is the home page</h1>
  <div id="test">
    <h1>I live in div</h1>
  </div>
  <pre>{{ data }}</pre>
</template>