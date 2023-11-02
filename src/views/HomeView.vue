<script setup>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <Header />
  <Banner />

  <main class="flex">
    <Sidebar />

    <div class="flex-1 p-10">
      <p class="text-3xl font-semibold">GAMBARAN UMUM DESA SINARSARI</p>
      <img src="@/assets/visimisi-desa.jpg" alt="" />
      <p class="text-3xl font-semibold">LETAK GEOGRAFIS</p>
      <img src="@/assets/peta-desa-2022.jpg" alt="" />
    </div>
  </main>
</template>

<style>
body {
  background: #f1f1f1;
}
</style>
