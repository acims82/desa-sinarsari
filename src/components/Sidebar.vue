<template>
  <div class="w-[300px] sidebar h-[400px] mb-40 px-5 pt-10">
    <div
      class="text-lg py-4 px-1 border-b border-slate-200 text-[#00074e] font-semibold cursor-pointer"
    >
      <router-link to="/">Home</router-link>
    </div>
    <div
      class="text-lg py-4 px-1 border-b border-slate-200 text-[#00074e] font-semibold cursor-pointer"
    >
      <router-link to="/map">Peta Desa</router-link>
    </div>

    <div
      class="text-lg py-4 px-1 border-b border-slate-200 text-[#00074e] font-semibold cursor-pointer"
    >
      <router-link to="/about">Tentang Desa</router-link>
    </div>
    
  </div>
</template>

<style scoped>
.sidebar {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 60%,
    rgba(0, 0, 0, 0) 100%
  );
}
</style>
