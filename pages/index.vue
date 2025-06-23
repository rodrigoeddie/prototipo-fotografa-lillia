<!-- pages/index.vue - Página inicial -->
<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Fotografia que Conta sua História</h1>
        <p class="hero-subtitle">Ensaios fotográficos e consultoria de imagem em Mogi das Cruzes</p>
        <div class="hero-cta-group">
          <NuxtLink to="/ensaios" class="hero-cta primary">Ver Ensaios</NuxtLink>
          <NuxtLink to="/contato/agendar" class="hero-cta secondary">Agendar Agora</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Serviços em Destaque -->
    <section class="services-section">
      <div class="section-header">
        <h2 class="section-title">Serviços</h2>
        <p class="section-subtitle">Conheça os serviços oferecidos pelo estúdio Lillia Tavares</p>
      </div>
      
      <div class="services-grid">
        <!-- Ensaios Fotográficos -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Ensaios Fotográficos" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Ensaios Fotográficos</h3>
            <p class="service-description">
              Eternize momentos especiais com ensaios personalizados que capturam sua essência e beleza natural.
            </p>
            <NuxtLink to="/ensaios" class="service-link">Conhecer Ensaios</NuxtLink>
          </div>
        </div>
        
        <!-- Consultoria de Imagem -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Consultoria de Imagem" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Consultoria de Imagem</h3>
            <p class="service-description">
              Descubra as cores, estilos e combinações que valorizam sua beleza única e expressam sua personalidade.
            </p>
            <NuxtLink to="/consultoria" class="service-link">Conhecer Consultoria</NuxtLink>
          </div>
        </div>
        
        <!-- Estúdio -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Estúdio" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Estúdio</h3>
            <p class="service-description">
              Espaço completo com diversos cenários e equipamentos profissionais disponíveis para aluguel.
            </p>
            <NuxtLink to="/estudio" class="service-link">Conhecer Estúdio</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Campanhas em Destaque -->
    <section class="campaigns-section">
      <div class="section-header">
        <h2 class="section-title">Campanhas Sazonais</h2>
        <p class="section-subtitle">Ensaios temáticos por tempo limitado</p>
      </div>
      
      <div class="campaign-highlight">
        <div class="campaign-content">
          <span class="campaign-badge">Em Andamento</span>
          <h3 class="campaign-title">Dia das Mães 2025</h3>
          <p class="campaign-description">
            Celebre o amor materno com um ensaio especial que eterniza a conexão entre mães e filhos.
            Promoção por tempo limitado com condições especiais.
          </p>
          <div class="campaign-details">
            <div class="campaign-detail">
              <span class="detail-label">Período:</span>
              <span class="detail-value">15/Abr a 10/Mai</span>
            </div>
            <div class="campaign-detail">
              <span class="detail-label">Vagas:</span>
              <span class="detail-value highlight">Últimas 3 vagas</span>
            </div>
          </div>
          <div class="campaign-cta-group">
            <NuxtLink to="/campanhas/dia-das-maes-2025" class="campaign-cta primary">Ver Detalhes</NuxtLink>
            <NuxtLink to="/contato/agendar" class="campaign-cta secondary">Agendar</NuxtLink>
          </div>
        </div>
        <div class="campaign-image">
          <img src="/images/placeholder.jpg" alt="Campanha Dia das Mães 2025" />
        </div>
      </div>
      
      <div class="campaigns-upcoming">
        <h3 class="upcoming-title">Próximas Campanhas</h3>
        <div class="upcoming-grid">
          <NuxtLink to="/campanhas" class="upcoming-card">
            <span class="upcoming-date">Julho 2025</span>
            <h4 class="upcoming-name">Dia dos Pais</h4>
            <span class="upcoming-status">Em breve</span>
          </NuxtLink>
          <NuxtLink to="/campanhas" class="upcoming-card">
            <span class="upcoming-date">Outubro 2025</span>
            <h4 class="upcoming-name">Halloween</h4>
            <span class="upcoming-status">Em breve</span>
          </NuxtLink>
          <NuxtLink to="/campanhas" class="upcoming-card">
            <span class="upcoming-date">Novembro 2025</span>
            <h4 class="upcoming-name">Natal em Família</h4>
            <span class="upcoming-status">Em breve</span>
          </NuxtLink>
        </div>
        <div class="campaigns-link-container">
          <NuxtLink to="/campanhas" class="campaigns-link">Ver todas as campanhas</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Depoimentos</h2>
        <p class="section-subtitle">O que nossos clientes dizem</p>
      </div>
      
      <div class="testimonials-slider">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "A experiência com a Lillia foi incrível! Ela tem um olhar único e conseguiu captar momentos que representam exatamente quem eu sou. As fotos ficaram maravilhosas e o ambiente do estúdio é super acolhedor."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Ana Paula" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Ana Paula</h4>
              <p class="author-service">Ensaio Sensual</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "A consultoria de coloração pessoal mudou minha vida! Agora sei exatamente quais cores me valorizam e minhas compras são muito mais assertivas. A Lillia é uma profissional incrível e super atenciosa."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Mariana Silva" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Mariana Silva</h4>
              <p class="author-service">Consultoria de Imagem</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "Fizemos um ensaio de Natal em família e foi uma experiência maravilhosa! A Lillia tem muita paciência com crianças e conseguiu registrar momentos espontâneos e cheios de emoção. Recomendo muito!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Família Oliveira" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Família Oliveira</h4>
              <p class="author-service">Ensaio Natal em Família</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="testimonials-link-container">
        <NuxtLink to="/sobre" class="testimonials-link">Ver mais depoimentos</NuxtLink>
      </div>
    </section>

    <!-- Blog em Destaque -->
    <section class="blog-section">
      <div class="section-header">
        <h2 class="section-title">Blog</h2>
        <p class="section-subtitle">Dicas e conteúdos exclusivos</p>
      </div>
      
      <div class="blog-grid">
        <NuxtLink to="/blog/dicas/como-se-preparar-para-ensaio" class="blog-card">
          <div class="blog-image">
            <img src="/images/placeholder.jpg" alt="Como se preparar para um ensaio fotográfico" />
          </div>
          <div class="blog-content">
            <span class="blog-category">Dicas</span>
            <h3 class="blog-title">Como se preparar para um ensaio fotográfico</h3>
            <p class="blog-excerpt">
              Confira as melhores dicas para chegar preparado e aproveitar ao máximo seu ensaio fotográfico.
            </p>
            <span class="blog-read-more">Ler mais</span>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/dicas/cores-que-valorizam" class="blog-card">
          <div class="blog-image">
            <img src="/images/placeholder.jpg" alt="Cores que valorizam cada tipo de pele" />
          </div>
          <div class="blog-content">
            <span class="blog-category">Consultoria</span>
            <h3 class="blog-title">Cores que valorizam cada tipo de pele</h3>
            <p class="blog-excerpt">
              Descubra quais cores combinam melhor com seu subtom de pele e como usá-las a seu favor.
            </p>
            <span class="blog-read-more">Ler mais</span>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/blog/campanhas/ideias-ensaio-natal" class="blog-card">
          <div class="blog-image">
            <img src="/images/placeholder.jpg" alt="5 ideias criativas para seu ensaio de Natal" />
          </div>
          <div class="blog-content">
            <span class="blog-category">Campanhas</span>
            <h3 class="blog-title">5 ideias criativas para seu ensaio de Natal</h3>
            <p class="blog-excerpt">
              Inspire-se com estas ideias para tornar seu ensaio de Natal ainda mais especial e memorável.
            </p>
            <span class="blog-read-more">Ler mais</span>
          </div>
        </NuxtLink>
      </div>
      
      <div class="blog-link-container">
        <NuxtLink to="/blog" class="blog-link">Ver todos os artigos</NuxtLink>
      </div>
    </section>

    <!-- Guias Educativos -->
    <section class="guides-section">
      <div class="section-header">
        <h2 class="section-title">Guias Educativos</h2>
        <p class="section-subtitle">Conteúdo gratuito para download</p>
      </div>
      
      <div class="guides-container">
        <div class="guide-card">
          <div class="guide-image">
            <img src="/images/placeholder.jpg" alt="Guia de Coloração Pessoal" />
          </div>
          <div class="guide-content">
            <h3 class="guide-title">Guia Básico de Coloração Pessoal</h3>
            <p class="guide-description">
              Aprenda os fundamentos da análise de coloração pessoal e descubra como identificar seu subtom de pele.
            </p>
            <NuxtLink to="/guias/coloracao-pessoal" class="guide-cta">
              Baixar Gratuitamente
            </NuxtLink>
          </div>
        </div>
        
        <div class="guides-more">
          <h3 class="guides-more-title">Outros guias disponíveis:</h3>
          <ul class="guides-list">
            <li class="guides-item">
              <NuxtLink to="/guias/preparacao-ensaios" class="guides-link">
                Como se preparar para ensaios fotográficos
              </NuxtLink>
            </li>
            <li class="guides-item">
              <NuxtLink to="/guias/ensaios-corporativos" class="guides-link">
                Guia completo para ensaios corporativos
              </NuxtLink>
            </li>
          </ul>
          <NuxtLink to="/guias" class="guides-all-link">
            Ver todos os guias
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Pronto para eternizar seus momentos?</h2>
        <p class="cta-text">
          Agende seu ensaio fotográfico ou consultoria de imagem e transforme sua experiência.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contato/agendar" class="cta-button primary">
            Agendar Agora
          </NuxtLink>
          <NuxtLink to="/investimento" class="cta-button secondary">
            Ver Investimento
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags para SEO
useHead({
  title: 'Fotógrafa Lillia Tavares - Ensaios Fotográficos e Consultoria de Imagem em Mogi das Cruzes',
  meta: [
    {
      name: 'description',
      content: 'Ensaios fotográficos femininos, corporativos e familiares. Consultoria de imagem e coloração pessoal em Mogi das Cruzes e região.'
    },
    {
      name: 'keywords',
      content: 'fotografia, ensaio fotográfico, consultoria de imagem, coloração pessoal, Mogi das Cruzes'
    }
  ]
});
</script>

<style scoped>
/* Hero Section */
.hero-section {
  height: 80vh;
  min-height: 600px;
  background-image: url('/images/placeholder.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin-bottom: 60px;
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
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.hero-cta-group {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.hero-cta {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero-cta.primary {
  background-color: #a67c52;
  color: white;
}

.hero-cta.primary:hover {
  background-color: #8a6642;
}

.hero-cta.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.hero-cta.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
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

/* Services Section */
.services-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-image {
  height: 250px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.service-content {
  padding: 25px;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.service-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.service-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.service-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.service-link:hover::after {
  width: 100%;
}

/* Campaigns Section */
.campaigns-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.campaign-highlight {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.campaign-content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.campaign-badge {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.campaign-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.campaign-description {
  color: #666;
  margin-bottom: 30px;
  line-height: 1.6;
}

.campaign-details {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.campaign-detail {
  display: flex;
  flex-direction: column;
}

.detail-label {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 5px;
}

.detail-value {
  font-weight: 600;
  color: #333;
}

.detail-value.highlight {
  color: #e74c3c;
}

.campaign-image {
  height: 100%;
}

.campaign-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.campaign-cta-group {
  display: flex;
  gap: 15px;
}

.campaign-cta {
  display: inline-block;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.campaign-cta.primary {
  background-color: #a67c52;
  color: white;
}

.campaign-cta.primary:hover {
  background-color: #8a6642;
}

.campaign-cta.secondary {
  background-color: transparent;
  color: #a67c52;
  border: 2px solid #a67c52;
}

.campaign-cta.secondary:hover {
  background-color: rgba(166, 124, 82, 0.1);
}

.campaigns-upcoming {
  margin-top: 40px;
}

.upcoming-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.upcoming-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.upcoming-card {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: transform 0.3s ease;
}

.upcoming-card:hover {
  transform: translateY(-5px);
}

.upcoming-date {
  display: block;
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 10px;
}

.upcoming-name {
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
}

.upcoming-status {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.campaigns-link-container {
  text-align: center;
  margin-top: 30px;
}

.campaigns-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.campaigns-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.campaigns-link:hover::after {
  width: 100%;
}

/* Testimonials Section */
.testimonials-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.testimonials-slider {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.testimonial-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.testimonial-content {
  margin-bottom: 20px;
}

.testimonial-text {
  color: #666;
  font-style: italic;
  line-height: 1.6;
  position: relative;
}

.testimonial-text::before {
  content: '"';
  font-size: 3rem;
  color: #f0e6d9;
  position: absolute;
  top: -20px;
  left: -10px;
  z-index: 0;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
}

.author-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.author-name {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #333;
}

.author-service {
  color: #999;
  font-size: 0.9rem;
}

.testimonials-link-container {
  text-align: center;
  margin-top: 40px;
}

.testimonials-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.testimonials-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.testimonials-link:hover::after {
  width: 100%;
}

/* Blog Section */
.blog-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.blog-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-decoration: none;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-content {
  padding: 25px;
}

.blog-category {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.blog-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
  line-height: 1.4;
}

.blog-excerpt {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.blog-read-more {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  position: relative;
  padding-bottom: 2px;
}

.blog-read-more::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.blog-card:hover .blog-read-more::after {
  width: 100%;
}

.blog-link-container {
  text-align: center;
  margin-top: 40px;
}

.blog-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.blog-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.blog-link:hover::after {
  width: 100%;
}

/* Guides Section */
.guides-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.guides-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.guide-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}

.guide-image {
  height: 200px;
}

.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.guide-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.guide-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  flex: 1;
}

.guide-cta {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
}

.guide-cta:hover {
  background-color: #8a6642;
}

.guides-more {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.guides-more-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
}

.guides-list {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.guides-item {
  margin-bottom: 15px;
  padding-left: 25px;
  position: relative;
}

.guides-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background-color: #a67c52;
  border-radius: 50%;
}

.guides-link {
  color: #333;
  text-decoration: none;
  transition: color 0.3s ease;
}

.guides-link:hover {
  color: #a67c52;
}

.guides-all-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.guides-all-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.guides-all-link:hover::after {
  width: 100%;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background-color: #a67c52;
  color: white;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: 40px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.cta-button {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background-color: white;
  color: #a67c52;
}

.cta-button.primary:hover {
  background-color: #f5f5f5;
}

.cta-button.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsive Styles */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .services-grid,
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .testimonials-slider {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .campaign-highlight,
  .guides-container {
    grid-template-columns: 1fr;
  }
  
  .upcoming-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .services-grid,
  .blog-grid,
  .upcoming-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-cta-group,
  .campaign-cta-group,
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .campaign-details {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
