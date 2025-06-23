<!-- components/global/TheHeader.vue - Cabeçalho do site com navegação -->
<template>
  <header class="site-header">
    <div class="header-container">
      <NuxtLink to="/" class="logo-container">
        <img src="/images/placeholder.jpg" alt="Lillia Tavares Fotografia" class="logo" />
      </NuxtLink>
      
      <!-- Menu para desktop -->
      <div class="desktop-menu">
        <TheNavigation />
      </div>
      
      <!-- Menu para mobile -->
      <div class="mobile-menu">
        <button 
          class="hamburger-button" 
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Menu"
        >
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        
        <div class="mobile-nav-container" :class="{ 'is-open': isMenuOpen }">
          <TheNavigation @navigate="isMenuOpen = false" />
        </div>
      </div>
      
      <!-- Botão CTA principal -->
      <NuxtLink to="/contato/agendar" class="cta-button">
        Agendar Ensaio
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false);

// Fechar menu ao clicar fora
onMounted(() => {
  document.addEventListener('click', (event) => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerButton = document.querySelector('.hamburger-button');
    
    if (isMenuOpen.value && 
        mobileMenu && 
        !mobileMenu.contains(event.target) && 
        hamburgerButton && 
        !hamburgerButton.contains(event.target)) {
      isMenuOpen.value = false;
    }
  });
});
</script>

<style scoped>
.site-header {
  background-color: #f5f2ed;
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  display: block;
}

.logo {
  height: 60px;
  width: auto;
}

.desktop-menu {
  display: flex;
}

.mobile-menu {
  display: none;
}

.hamburger-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  padding: 0;
}

.hamburger-line {
  width: 30px;
  height: 3px;
  background-color: #a67c52;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.mobile-nav-container {
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #f5f2ed;
  overflow: hidden;
  transition: height 0.3s ease;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}

.mobile-nav-container.is-open {
  height: calc(100vh - 90px);
  overflow-y: auto;
}

.cta-button {
  background-color: #a67c52;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #8a6642;
}

@media (max-width: 992px) {
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .cta-button {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
}
</style>
