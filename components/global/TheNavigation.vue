<!-- components/global/TheNavigation.vue - Componente de navegação global atualizado -->
<template>
  <nav class="main-navigation">
    <!-- Menu Desktop -->
    <div class="desktop-menu">
      <ul class="nav-list">
        <li class="nav-item">
          <NuxtLink to="/" class="nav-link" exact-active-class="active">Home</NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <span class="nav-link" @mouseenter="toggleDropdown('sobre')" @mouseleave="closeDropdown('sobre')">
            Sobre
            <span class="dropdown-arrow">▼</span>
          </span>
          <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'sobre' }" @mouseenter="keepDropdown('sobre')" @mouseleave="closeDropdown('sobre')">
            <li>
              <NuxtLink to="/sobre" class="dropdown-link">Fotógrafa</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/consultoria" class="dropdown-link">Consultoria de Imagem</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <span class="nav-link" @mouseenter="toggleDropdown('ensaios')" @mouseleave="closeDropdown('ensaios')">
            Ensaios
            <span class="dropdown-arrow">▼</span>
          </span>
          <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'ensaios' }" @mouseenter="keepDropdown('ensaios')" @mouseleave="closeDropdown('ensaios')">
            <li>
              <NuxtLink to="/ensaios" class="dropdown-link">Todos os Ensaios</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ensaios/natal-em-familia" class="dropdown-link">Natal em Família</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ensaios/corporativo" class="dropdown-link">Corporativo</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ensaios/sensual" class="dropdown-link">Sensual/Intimista</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/ensaios/espetaculos" class="dropdown-link">Espetáculos</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <span class="nav-link" @mouseenter="toggleDropdown('estudio')" @mouseleave="closeDropdown('estudio')">
            Estúdio
            <span class="dropdown-arrow">▼</span>
          </span>
          <ul class="dropdown-menu" :class="{ 'show': activeDropdown === 'estudio' }" @mouseenter="keepDropdown('estudio')" @mouseleave="closeDropdown('estudio')">
            <li>
              <NuxtLink to="/estudio" class="dropdown-link">Conheça o Estúdio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/estudio/aluguel" class="dropdown-link">Aluguel</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/estudio/cenarios" class="dropdown-link">Cenários</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <NuxtLink to="/investimento" class="nav-link" active-class="active">Investimento</NuxtLink>
        </li>
        <li class="nav-item dropdown">
          <span class="nav-link" @mouseenter="toggleDropdown('recursos')" @mouseleave="closeDropdown('recursos')">
            Recursos
            <span class="dropdown-arrow">▼</span>
          </span>
          <ul class="dropdown-menu wide-dropdown" :class="{ 'show': activeDropdown === 'recursos' }" @mouseenter="keepDropdown('recursos')" @mouseleave="closeDropdown('recursos')">
            <li>
              <NuxtLink to="/blog" class="dropdown-link">Blog</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/guias-educativos" class="dropdown-link">Guias Educativos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/campanhas-sazonais" class="dropdown-link">Campanhas Sazonais</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/presenca-local" class="dropdown-link">Presença Local</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/parcerias" class="dropdown-link">Parcerias</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="dropdown-link">Perguntas Frequentes</NuxtLink>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <NuxtLink to="/contato" class="nav-link" active-class="active">Contato</NuxtLink>
        </li>
      </ul>
    </div>

    <!-- Menu Mobile -->
    <div class="mobile-menu">
      <button class="menu-toggle" @click="toggleMobileMenu">
        <span class="menu-icon" :class="{ 'open': mobileMenuOpen }"></span>
      </button>
      
      <div class="mobile-menu-container" :class="{ 'open': mobileMenuOpen }">
        <ul class="mobile-nav-list">
          <li class="mobile-nav-item">
            <NuxtLink to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</NuxtLink>
          </li>
          <li class="mobile-nav-item accordion">
            <div class="accordion-header" @click="toggleAccordion('sobre')">
              <span>Sobre</span>
              <span class="accordion-arrow" :class="{ 'open': activeAccordion === 'sobre' }">+</span>
            </div>
            <ul class="accordion-content" :class="{ 'open': activeAccordion === 'sobre' }">
              <li>
                <NuxtLink to="/sobre" class="mobile-nav-link" @click="closeMobileMenu">Fotógrafa</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/consultoria" class="mobile-nav-link" @click="closeMobileMenu">Consultoria de Imagem</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mobile-nav-item accordion">
            <div class="accordion-header" @click="toggleAccordion('ensaios')">
              <span>Ensaios</span>
              <span class="accordion-arrow" :class="{ 'open': activeAccordion === 'ensaios' }">+</span>
            </div>
            <ul class="accordion-content" :class="{ 'open': activeAccordion === 'ensaios' }">
              <li>
                <NuxtLink to="/ensaios" class="mobile-nav-link" @click="closeMobileMenu">Todos os Ensaios</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ensaios/natal-em-familia" class="mobile-nav-link" @click="closeMobileMenu">Natal em Família</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ensaios/corporativo" class="mobile-nav-link" @click="closeMobileMenu">Corporativo</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ensaios/sensual" class="mobile-nav-link" @click="closeMobileMenu">Sensual/Intimista</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/ensaios/espetaculos" class="mobile-nav-link" @click="closeMobileMenu">Espetáculos</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mobile-nav-item accordion">
            <div class="accordion-header" @click="toggleAccordion('estudio')">
              <span>Estúdio</span>
              <span class="accordion-arrow" :class="{ 'open': activeAccordion === 'estudio' }">+</span>
            </div>
            <ul class="accordion-content" :class="{ 'open': activeAccordion === 'estudio' }">
              <li>
                <NuxtLink to="/estudio" class="mobile-nav-link" @click="closeMobileMenu">Conheça o Estúdio</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/estudio/aluguel" class="mobile-nav-link" @click="closeMobileMenu">Aluguel</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/estudio/cenarios" class="mobile-nav-link" @click="closeMobileMenu">Cenários</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mobile-nav-item">
            <NuxtLink to="/investimento" class="mobile-nav-link" @click="closeMobileMenu">Investimento</NuxtLink>
          </li>
          <li class="mobile-nav-item accordion">
            <div class="accordion-header" @click="toggleAccordion('recursos')">
              <span>Recursos</span>
              <span class="accordion-arrow" :class="{ 'open': activeAccordion === 'recursos' }">+</span>
            </div>
            <ul class="accordion-content" :class="{ 'open': activeAccordion === 'recursos' }">
              <li>
                <NuxtLink to="/blog" class="mobile-nav-link" @click="closeMobileMenu">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/guias-educativos" class="mobile-nav-link" @click="closeMobileMenu">Guias Educativos</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/campanhas-sazonais" class="mobile-nav-link" @click="closeMobileMenu">Campanhas Sazonais</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/presenca-local" class="mobile-nav-link" @click="closeMobileMenu">Presença Local</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/parcerias" class="mobile-nav-link" @click="closeMobileMenu">Parcerias</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="mobile-nav-link" @click="closeMobileMenu">Perguntas Frequentes</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="mobile-nav-item">
            <NuxtLink to="/contato" class="mobile-nav-link" @click="closeMobileMenu">Contato</NuxtLink>
          </li>
        </ul>
        
        <div class="mobile-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="social-icon">📷</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="social-icon">👍</span>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="social-icon">▶️</span>
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-link">
            <span class="social-icon">📌</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Estado para controle de dropdown
const activeDropdown = ref(null);
const mobileMenuOpen = ref(false);
const activeAccordion = ref(null);

// Funções para controle de dropdown no desktop
const toggleDropdown = (dropdown) => {
  activeDropdown.value = dropdown;
};

const keepDropdown = (dropdown) => {
  activeDropdown.value = dropdown;
};

const closeDropdown = (dropdown) => {
  if (activeDropdown.value === dropdown) {
    activeDropdown.value = null;
  }
};

// Funções para controle de menu mobile
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  
  // Fechar todos os acordeões quando fechar o menu
  if (!mobileMenuOpen.value) {
    activeAccordion.value = null;
  }
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  activeAccordion.value = null;
};

// Função para controle de acordeão no mobile
const toggleAccordion = (accordion) => {
  if (activeAccordion.value === accordion) {
    activeAccordion.value = null;
  } else {
    activeAccordion.value = accordion;
  }
};
</script>

<style scoped>
/* Estilos gerais de navegação */
.main-navigation {
  position: relative;
  z-index: 100;
}

/* Estilos para menu desktop */
.desktop-menu {
  display: block;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: block;
  padding: 15px 20px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.nav-link:hover,
.nav-link.active {
  color: #a67c52;
}

.dropdown-arrow {
  font-size: 0.7rem;
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.nav-link:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.wide-dropdown {
  min-width: 220px;
}

.dropdown-link {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dropdown-link:hover {
  background-color: #f9f7f4;
  color: #a67c52;
}

/* Estilos para menu mobile */
.mobile-menu {
  display: none;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 15px;
  position: relative;
  z-index: 110;
}

.menu-icon {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #333;
  position: relative;
  transition: background-color 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 30px;
  height: 3px;
  background-color: #333;
  transition: transform 0.3s ease;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

.menu-icon.open {
  background-color: transparent;
}

.menu-icon.open::before {
  transform: rotate(45deg);
  top: 0;
}

.menu-icon.open::after {
  transform: rotate(-45deg);
  bottom: 0;
}

.mobile-menu-container {
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 350px;
  height: 100vh;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 80px 20px 20px;
  overflow-y: auto;
  transition: right 0.3s ease;
  z-index: 100;
}

.mobile-menu-container.open {
  right: 0;
}

.mobile-nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid #eee;
}

.mobile-nav-link {
  display: block;
  padding: 15px 0;
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  font-weight: 500;
  color: #333;
}

.accordion-arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.accordion-arrow.open {
  transform: rotate(45deg);
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-left: 15px;
  list-style: none;
}

.accordion-content.open {
  max-height: 500px;
}

.mobile-social {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f9f7f4;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.social-link:hover {
  background-color: #f0e6d9;
}

/* Media queries para responsividade */
@media (max-width: 992px) {
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu {
    display: block;
  }
}
</style>
