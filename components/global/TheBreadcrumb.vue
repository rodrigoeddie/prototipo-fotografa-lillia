<!-- components/global/TheBreadcrumb.vue - Componente de breadcrumb atualizado -->
<template>
  <div class="breadcrumb-container" v-if="showBreadcrumb">
    <div class="breadcrumb-wrapper">
      <ul class="breadcrumb-list">
        <li class="breadcrumb-item">
          <NuxtLink to="/" class="breadcrumb-link">Home</NuxtLink>
        </li>
        <template v-for="(crumb, index) in breadcrumbs" :key="index">
          <li class="breadcrumb-separator">/</li>
          <li class="breadcrumb-item" :class="{ 'active': index === breadcrumbs.length - 1 }">
            <NuxtLink 
              v-if="index < breadcrumbs.length - 1" 
              :to="crumb.path" 
              class="breadcrumb-link"
            >
              {{ crumb.name }}
            </NuxtLink>
            <span v-else class="breadcrumb-current">{{ crumb.name }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

// Mapeamento de rotas para nomes amigáveis
const routeNameMap = {
  'index': 'Home',
  'sobre': 'Sobre',
  'sobre-index': 'Sobre',
  'ensaios': 'Ensaios Fotográficos',
  'ensaios-index': 'Ensaios Fotográficos',
  'ensaios-natal-em-familia': 'Natal em Família',
  'ensaios-corporativo': 'Corporativo',
  'ensaios-sensual': 'Sensual/Intimista',
  'ensaios-espetaculos': 'Espetáculos',
  'estudio': 'Estúdio',
  'estudio-index': 'Estúdio',
  'estudio-aluguel': 'Aluguel',
  'estudio-cenarios': 'Cenários',
  'investimento': 'Investimento',
  'blog': 'Blog',
  'blog-index': 'Blog',
  'guias-educativos': 'Guias Educativos',
  'campanhas-sazonais': 'Campanhas Sazonais',
  'presenca-local': 'Presença Local',
  'parcerias': 'Parcerias',
  'faq': 'Perguntas Frequentes',
  'contato': 'Contato',
  'contato-index': 'Contato',
  'consultoria': 'Consultoria de Imagem',
  'consultoria-index': 'Consultoria de Imagem',
  'politica-privacidade': 'Política de Privacidade',
  'termos-de-uso': 'Termos de Uso'
};

// Mapeamento de rotas para rotas pai
const parentRouteMap = {
  'ensaios-natal-em-familia': '/ensaios',
  'ensaios-corporativo': '/ensaios',
  'ensaios-sensual': '/ensaios',
  'ensaios-espetaculos': '/ensaios',
  'estudio-aluguel': '/estudio',
  'estudio-cenarios': '/estudio',
  'blog-categoria': '/blog',
  'blog-post': '/blog'
};

// Computed para determinar se deve mostrar breadcrumb
const showBreadcrumb = computed(() => {
  return route.path !== '/';
});

// Computed para gerar breadcrumbs com base na rota atual
const breadcrumbs = computed(() => {
  const result = [];
  
  // Função para obter nome amigável da rota
  const getRouteName = (path) => {
    const routeName = path.replace(/^\//, '').replace(/\//g, '-') || 'index';
    return routeNameMap[routeName] || path.split('/').pop().replace(/-/g, ' ');
  };
  
  // Função para obter caminho completo da rota
  const getRoutePath = (segments) => {
    return '/' + segments.join('/');
  };
  
  // Dividir a rota em segmentos
  const pathSegments = route.path.split('/').filter(Boolean);
  
  // Caso especial para rotas dinâmicas
  if (route.params.slug) {
    // Verificar se é uma rota dinâmica conhecida
    if (routeNameMap[route.params.slug]) {
      result.push({
        name: routeNameMap[route.params.slug],
        path: `/${route.params.slug}`
      });
    } else {
      // Para rotas dinâmicas desconhecidas, usar o slug como nome
      result.push({
        name: route.params.slug.replace(/-/g, ' '),
        path: `/${route.params.slug}`
      });
    }
    return result;
  }
  
  // Para rotas normais, construir breadcrumbs baseados nos segmentos da URL
  let currentPath = '';
  for (let i = 0; i < pathSegments.length; i++) {
    currentPath += '/' + pathSegments[i];
    
    // Verificar se é o último segmento
    const isLast = i === pathSegments.length - 1;
    
    // Construir o nome do breadcrumb
    const routeKey = currentPath.substring(1).replace(/\//g, '-') || 'index';
    const name = routeNameMap[routeKey] || pathSegments[i].replace(/-/g, ' ');
    
    result.push({
      name: name.charAt(0).toUpperCase() + name.slice(1), // Capitalizar primeira letra
      path: isLast ? '' : currentPath
    });
  }
  
  return result;
});
</script>

<style scoped>
.breadcrumb-container {
  background-color: #f9f7f4;
  padding: 15px 0;
  margin-bottom: 30px;
}

.breadcrumb-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.breadcrumb-item {
  font-size: 0.9rem;
}

.breadcrumb-separator {
  margin: 0 10px;
  color: #999;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.breadcrumb-link:hover {
  color: #a67c52;
}

.breadcrumb-current {
  color: #a67c52;
  font-weight: 500;
}

@media (max-width: 768px) {
  .breadcrumb-container {
    padding: 10px 0;
    margin-bottom: 20px;
  }
  
  .breadcrumb-item {
    font-size: 0.8rem;
  }
  
  .breadcrumb-separator {
    margin: 0 5px;
  }
}
</style>
