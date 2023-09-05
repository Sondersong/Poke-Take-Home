<template>
  <div id="navbar">
    <NuxtLink to="/" id="homeButton" @mouseover="imgSrc = 'reallyHappy.png'" @mouseleave="imgSrc = 'happy.png'">
      <img :src="imgSrc"/>
      <h1>Poké-pedia</h1>
      <img :src="imgSrc" id="right"/>
    </NuxtLink>
    <input placeholder="Search" v-model="searchInput" />
  </div>
</template>

<script setup>
const searchInput = useState("searchInput");
let imgSrc = ref("happy.png");
</script>
