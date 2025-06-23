<!-- pages/blog/index.vue - Página principal do blog -->
<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Blog</h1>
        <p class="hero-subtitle">Dicas, inspirações e conteúdo exclusivo sobre fotografia e consultoria de imagem</p>
      </div>
    </section>

    <!-- Categorias do Blog -->
    <section class="categories-section">
      <div class="categories-container">
        <NuxtLink to="/blog" class="category-item active">
          Todos
        </NuxtLink>
        <NuxtLink to="/blog/categoria/dicas" class="category-item">
          Dicas
        </NuxtLink>
        <NuxtLink to="/blog/categoria/ensaios" class="category-item">
          Ensaios
        </NuxtLink>
        <NuxtLink to="/blog/categoria/consultoria" class="category-item">
          Consultoria
        </NuxtLink>
        <NuxtLink to="/blog/categoria/campanhas" class="category-item">
          Campanhas
        </NuxtLink>
      </div>
    </section>

    <!-- Posts em Destaque -->
    <section class="featured-section">
      <div class="section-header">
        <h2 class="section-title">Posts em Destaque</h2>
      </div>
      
      <div class="featured-grid">
        <div class="featured-main">
          <NuxtLink to="/blog/como-se-preparar-para-ensaio-fotografico" class="featured-card main">
            <div class="featured-image">
              <img src="/images/placeholder.jpg" alt="Como se preparar para um ensaio fotográfico" />
            </div>
            <div class="featured-content">
              <span class="featured-category">Dicas</span>
              <h3 class="featured-title">Como se preparar para um ensaio fotográfico: guia completo</h3>
              <p class="featured-excerpt">
                Descubra as melhores dicas para se preparar para seu ensaio fotográfico e garantir resultados incríveis.
              </p>
              <div class="featured-meta">
                <span class="meta-date">15 de junho de 2025</span>
                <span class="meta-read">5 min de leitura</span>
              </div>
            </div>
          </NuxtLink>
        </div>
        
        <div class="featured-secondary">
          <NuxtLink to="/blog/coloracao-pessoal-o-que-e" class="featured-card secondary">
            <div class="featured-image">
              <img src="/images/placeholder.jpg" alt="Coloração Pessoal: o que é e como pode transformar seu visual" />
            </div>
            <div class="featured-content">
              <span class="featured-category">Consultoria</span>
              <h3 class="featured-title">Coloração Pessoal: o que é e como pode transformar seu visual</h3>
              <div class="featured-meta">
                <span class="meta-date">10 de junho de 2025</span>
                <span class="meta-read">4 min de leitura</span>
              </div>
            </div>
          </NuxtLink>
          
          <NuxtLink to="/blog/tendencias-fotografia-2025" class="featured-card secondary">
            <div class="featured-image">
              <img src="/images/placeholder.jpg" alt="Tendências de fotografia para 2025" />
            </div>
            <div class="featured-content">
              <span class="featured-category">Ensaios</span>
              <h3 class="featured-title">Tendências de fotografia para 2025: o que esperar</h3>
              <div class="featured-meta">
                <span class="meta-date">5 de junho de 2025</span>
                <span class="meta-read">3 min de leitura</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Posts Recentes -->
    <section class="recent-section">
      <div class="section-header">
        <h2 class="section-title">Posts Recentes</h2>
      </div>
      
      <div class="recent-grid">
        <NuxtLink to="/blog/dicas-poses-ensaio-corporativo" class="post-card">
          <div class="post-image">
            <img src="/images/placeholder.jpg" alt="Dicas de poses para ensaio corporativo" />
          </div>
          <div class="post-content">
            <span class="post-category">Dicas</span>
            <h3 class="post-title">Dicas de poses para ensaio corporativo</h3>
            <p class="post-excerpt">
              Aprenda as melhores poses para transmitir profissionalismo e confiança em seu ensaio corporativo.
            </p>
            <div class="post-meta">
              <span class="meta-date">1 de junho de 2025</span>
              <span class="meta-read">4 min de leitura</span>
            </div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/como-escolher-roupas-ensaio-familia" class="post-card">
          <div class="post-image">
            <img src="/images/placeholder.jpg" alt="Como escolher roupas para ensaio em família" />
          </div>
          <div class="post-content">
            <span class="post-category">Dicas</span>
            <h3 class="post-title">Como escolher roupas para ensaio em família</h3>
            <p class="post-excerpt">
              Dicas para coordenar o visual da família sem parecer combinadinho demais e garantir fotos harmoniosas.
            </p>
            <div class="post-meta">
              <span class="meta-date">28 de maio de 2025</span>
              <span class="meta-read">5 min de leitura</span>
            </div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/campanha-dia-das-maes-2025" class="post-card">
          <div class="post-image">
            <img src="/images/placeholder.jpg" alt="Campanha Dia das Mães 2025: bastidores" />
          </div>
          <div class="post-content">
            <span class="post-category">Campanhas</span>
            <h3 class="post-title">Campanha Dia das Mães 2025: bastidores</h3>
            <p class="post-excerpt">
              Confira os bastidores da nossa campanha especial para o Dia das Mães 2025 e os resultados incríveis.
            </p>
            <div class="post-meta">
              <span class="meta-date">20 de maio de 2025</span>
              <span class="meta-read">3 min de leitura</span>
            </div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/analise-de-estilo-encontre-sua-essencia" class="post-card">
          <div class="post-image">
            <img src="/images/placeholder.jpg" alt="Análise de Estilo: encontre sua essência" />
          </div>
          <div class="post-content">
            <span class="post-category">Consultoria</span>
            <h3 class="post-title">Análise de Estilo: encontre sua essência</h3>
            <p class="post-excerpt">
              Descubra como a análise de estilo pode ajudar você a expressar sua personalidade através das roupas.
            </p>
            <div class="post-meta">
              <span class="meta-date">15 de maio de 2025</span>
              <span class="meta-read">6 min de leitura</span>
            </div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/iluminacao-perfeita-para-fotos" class="post-card">
          <div class="post-image">
            <img src="/images/placeholder.jpg" alt="Iluminação perfeita para fotos em casa" />
          </div>
          <div class="post-content">
            <span class="post-category">Dicas</span>
            <h3 class="post-title">Iluminação perfeita para fotos em casa</h3>
            <p class="post-excerpt">
              Aprenda técnicas simples para conseguir uma iluminação profissional em suas fotos caseiras.
            </p>
            <div class="post-meta">
              <span class="meta-date">10 de maio de 2025</span>
              <span class="meta-read">4 min de leitura</span>
            </div>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/guarda-roupa-capsula-como-montar" class="post-card">
          <div class="post-image">
            <img src="/images/placeholder.jpg" alt="Guarda-roupa cápsula: como montar o seu" />
          </div>
          <div class="post-content">
            <span class="post-category">Consultoria</span>
            <h3 class="post-title">Guarda-roupa cápsula: como montar o seu</h3>
            <p class="post-excerpt">
              Dicas práticas para criar um guarda-roupa funcional com menos peças e mais combinações.
            </p>
            <div class="post-meta">
              <span class="meta-date">5 de maio de 2025</span>
              <span class="meta-read">7 min de leitura</span>
            </div>
          </div>
        </NuxtLink>
      </div>
      
      <div class="pagination">
        <span class="pagination-item active">1</span>
        <NuxtLink to="/blog/pagina/2" class="pagination-item">2</NuxtLink>
        <NuxtLink to="/blog/pagina/3" class="pagination-item">3</NuxtLink>
        <span class="pagination-separator">...</span>
        <NuxtLink to="/blog/pagina/7" class="pagination-item">7</NuxtLink>
        <NuxtLink to="/blog/pagina/2" class="pagination-next">
          Próxima página
          <span class="next-icon">→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="newsletter-section">
      <div class="newsletter-container">
        <div class="newsletter-content">
          <h2 class="newsletter-title">Inscreva-se na nossa newsletter</h2>
          <p class="newsletter-text">
            Receba dicas exclusivas, novidades e conteúdo especial diretamente no seu e-mail.
          </p>
        </div>
        <div class="newsletter-form">
          <input type="email" placeholder="Seu melhor e-mail" class="newsletter-input" />
          <button class="newsletter-button">Inscrever-se</button>
        </div>
      </div>
    </section>

    <!-- Guias Educativos -->
    <section class="guides-section">
      <div class="section-header">
        <h2 class="section-title">Guias Educativos</h2>
        <p class="section-subtitle">Materiais gratuitos para download</p>
      </div>
      
      <div class="guides-grid">
        <div class="guide-card">
          <div class="guide-image">
            <img src="/images/placeholder.jpg" alt="Guia de Coloração Pessoal" />
          </div>
          <div class="guide-content">
            <h3 class="guide-title">Guia de Coloração Pessoal</h3>
            <p class="guide-description">
              Descubra as cores que mais combinam com você neste guia introdutório sobre coloração pessoal.
            </p>
            <NuxtLink to="/guias/coloracao-pessoal" class="guide-link">
              Baixar Grátis
            </NuxtLink>
          </div>
        </div>
        
        <div class="guide-card">
          <div class="guide-image">
            <img src="/images/placeholder.jpg" alt="Checklist para Ensaio Fotográfico" />
          </div>
          <div class="guide-content">
            <h3 class="guide-title">Checklist para Ensaio Fotográfico</h3>
            <p class="guide-description">
              Lista completa com tudo o que você precisa preparar antes do seu ensaio fotográfico.
            </p>
            <NuxtLink to="/guias/checklist-ensaio" class="guide-link">
              Baixar Grátis
            </NuxtLink>
          </div>
        </div>
        
        <div class="guide-card">
          <div class="guide-image">
            <img src="/images/placeholder.jpg" alt="Guia de Poses para Ensaio" />
          </div>
          <div class="guide-content">
            <h3 class="guide-title">Guia de Poses para Ensaio</h3>
            <p class="guide-description">
              Aprenda poses naturais e favorecedoras para garantir fotos incríveis em seu ensaio.
            </p>
            <NuxtLink to="/guias/poses-ensaio" class="guide-link">
              Baixar Grátis
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags para SEO
useHead({
  title: 'Blog - Dicas de Fotografia e Consultoria de Imagem | Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Blog com dicas de fotografia, consultoria de imagem, tendências e conteúdo exclusivo. Artigos sobre ensaios fotográficos, coloração pessoal e estilo.'
    },
    {
      name: 'keywords',
      content: 'blog fotografia, dicas ensaio fotográfico, consultoria de imagem, coloração pessoal, estilo pessoal, Mogi das Cruzes'
    }
  ]
});
</script>

<style scoped>
/* Hero Section */
.hero-section {
  height: 40vh;
  min-height: 300px;
  background-image: url('/images/placeholder.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.3rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Section Styles */
.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #a67c52;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
}

/* Categories Section */
.categories-section {
  margin-bottom: 40px;
}

.categories-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.category-item {
  padding: 10px 20px;
  border-radius: 30px;
  background-color: #f9f7f4;
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.category-item:hover {
  background-color: #f0e6d9;
  color: #a67c52;
}

.category-item.active {
  background-color: #a67c52;
  color: white;
}

/* Featured Section */
.featured-section {
  padding: 40px 0;
  margin-bottom: 60px;
}

.featured-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.featured-main {
  grid-column: 1;
}

.featured-secondary {
  grid-column: 2;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.featured-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
}

.featured-card.main {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.featured-card.main .featured-image {
  height: 350px;
}

.featured-card.secondary .featured-image {
  height: 200px;
}

.featured-image {
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-card:hover .featured-image img {
  transform: scale(1.1);
}

.featured-content {
  padding: 25px;
}

.featured-category {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.featured-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
  line-height: 1.4;
}

.featured-card.secondary .featured-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.featured-excerpt {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.featured-meta {
  display: flex;
  gap: 20px;
  color: #999;
  font-size: 0.9rem;
}

/* Recent Section */
.recent-section {
  padding: 40px 0;
  margin-bottom: 60px;
}

.recent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.post-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
}

.post-card:hover {
  transform: translateY(-10px);
}

.post-image {
  height: 200px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-image img {
  transform: scale(1.1);
}

.post-content {
  padding: 25px;
}

.post-category {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.post-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
  line-height: 1.4;
}

.post-excerpt {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.post-meta {
  display: flex;
  gap: 20px;
  color: #999;
  font-size: 0.9rem;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 5px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
}

.pagination-item:hover {
  background-color: #f0e6d9;
  color: #a67c52;
}

.pagination-item.active {
  background-color: #a67c52;
  color: white;
}

.pagination-separator {
  margin: 0 5px;
  color: #666;
}

.pagination-next {
  display: flex;
  align-items: center;
  margin-left: 15px;
  color: #a67c52;
  text-decoration: none;
  font-weight: 600;
}

.next-icon {
  margin-left: 5px;
  transition: transform 0.3s ease;
}

.pagination-next:hover .next-icon {
  transform: translateX(5px);
}

/* Newsletter Section */
.newsletter-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.newsletter-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.newsletter-content {
  margin-bottom: 30px;
}

.newsletter-title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
}

.newsletter-text {
  color: #666;
  font-size: 1.1rem;
}

.newsletter-form {
  display: flex;
  width: 100%;
  max-width: 500px;
}

.newsletter-input {
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
}

.newsletter-button {
  background-color: #a67c52;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 0 5px 5px 0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.newsletter-button:hover {
  background-color: #8a6642;
}

/* Guides Section */
.guides-section {
  padding: 40px 0;
  margin-bottom: 60px;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.guide-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-10px);
}

.guide-image {
  height: 200px;
  overflow: hidden;
}

.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.guide-card:hover .guide-image img {
  transform: scale(1.1);
}

.guide-content {
  padding: 25px;
}

.guide-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.guide-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.guide-link {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.guide-link:hover {
  background-color: #8a6642;
}

/* Responsive Styles */
@media (max-width: 992px) {
  .featured-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-main,
  .featured-secondary {
    grid-column: auto;
  }
  
  .recent-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .recent-grid,
  .guides-grid {
    grid-template-columns: 1fr;
  }
  
  .newsletter-form {
    flex-direction: column;
  }
  
  .newsletter-input {
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .newsletter-button {
    border-radius: 5px;
    padding: 15px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .categories-container {
    overflow-x: auto;
    padding-bottom: 10px;
    justify-content: flex-start;
  }
}
</style>
