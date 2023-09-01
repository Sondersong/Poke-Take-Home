<script setup>
  // const {data} = await useFetch('/api/test')
  const searchInput = useState('searchInput')
  const exampleArr = ref(['Cheddar', 'Chalupa', 'Chimney'])
</script>

<template>
  <h1>This is the home page</h1>
  <Card v-for="name in exampleArr" :name="name"/>
</template>