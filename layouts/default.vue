<!-- layouts/default.vue - Layout padrão para todas as páginas -->
<template>
  <div class="site-container">
    <TheHeader />
    <main class="main-content">
      <TheBreadcrumb v-if="route.path !== '/'" />
      <slot />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
const route = useRoute();
</script>

<style scoped>
.site-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  .main-content {
    padding: 15px;
  }
}
</style>
