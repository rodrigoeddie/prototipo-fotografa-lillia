<!-- pages/presenca-local.vue - Página de Presença Local -->
<template>
  <div class="presenca-local-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Presença Local</h1>
        <p class="hero-subtitle">Conheça nossos serviços em Mogi das Cruzes e região</p>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-section">
      <div class="intro-content">
        <h2 class="intro-title">Fotografia e Consultoria em Mogi das Cruzes</h2>
        <p class="intro-text">
          Desde 2018, a Fotógrafa Lillia Tavares tem se destacado em Mogi das Cruzes e região, oferecendo serviços de fotografia e consultoria de imagem com excelência e dedicação.
        </p>
        <p class="intro-text">
          Nosso estúdio está localizado no centro da cidade, com fácil acesso e estacionamento próximo, proporcionando conforto e praticidade para nossos clientes.
        </p>
      </div>
    </section>

    <!-- Mapa e Localização -->
    <section class="location-section">
      <div class="section-header">
        <h2 class="section-title">Localização</h2>
        <p class="section-subtitle">Como chegar ao nosso estúdio</p>
      </div>
      
      <div class="location-grid">
        <div class="location-map">
          <img src="/images/placeholder.jpg" alt="Mapa de localização do estúdio" />
        </div>
        <div class="location-info">
          <h3 class="location-title">Estúdio Lillia Tavares</h3>
          <p class="location-address">
            Rua Exemplo, 123 - Centro<br>
            Mogi das Cruzes - SP<br>
            CEP: 08700-000
          </p>
          <div class="location-details">
            <div class="detail-item">
              <span class="detail-icon">🚗</span>
              <span class="detail-text">Estacionamento a 50m</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">🚌</span>
              <span class="detail-text">Ponto de ônibus a 200m</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">🚶</span>
              <span class="detail-text">5 min a pé da estação de trem</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">🕒</span>
              <span class="detail-text">Horário de funcionamento: 9h às 18h</span>
            </div>
          </div>
          <div class="location-cta">
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="location-link">
              Ver no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços na Região -->
    <section class="services-section">
      <div class="section-header">
        <h2 class="section-title">Serviços na Região</h2>
        <p class="section-subtitle">Conheça os serviços que oferecemos em Mogi das Cruzes e cidades vizinhas</p>
      </div>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">📸</div>
          <h3 class="service-title">Ensaios Fotográficos</h3>
          <p class="service-description">
            Realizamos ensaios fotográficos em nosso estúdio no centro de Mogi das Cruzes e também em locações externas selecionadas na região.
          </p>
          <div class="service-cities">
            <span class="city-tag">Mogi das Cruzes</span>
            <span class="city-tag">Suzano</span>
            <span class="city-tag">Poá</span>
            <span class="city-tag">Guararema</span>
          </div>
          <NuxtLink to="/ensaios" class="service-link">
            Ver detalhes
          </NuxtLink>
        </div>
        
        <div class="service-card">
          <div class="service-icon">👗</div>
          <h3 class="service-title">Consultoria de Imagem</h3>
          <p class="service-description">
            Oferecemos consultoria de imagem presencial em nosso estúdio e também atendimento a domicílio em Mogi das Cruzes e cidades próximas.
          </p>
          <div class="service-cities">
            <span class="city-tag">Mogi das Cruzes</span>
            <span class="city-tag">Suzano</span>
            <span class="city-tag">Arujá</span>
            <span class="city-tag">Itaquaquecetuba</span>
          </div>
          <NuxtLink to="/consultoria" class="service-link">
            Ver detalhes
          </NuxtLink>
        </div>
        
        <div class="service-card">
          <div class="service-icon">🏠</div>
          <h3 class="service-title">Aluguel de Estúdio</h3>
          <p class="service-description">
            Nosso estúdio está disponível para aluguel para fotógrafos e produtores da região, com equipamentos profissionais e diversos cenários.
          </p>
          <div class="service-cities">
            <span class="city-tag">Mogi das Cruzes</span>
          </div>
          <NuxtLink to="/estudio" class="service-link">
            Ver detalhes
          </NuxtLink>
        </div>
        
        <div class="service-card">
          <div class="service-icon">🎭</div>
          <h3 class="service-title">Cobertura de Eventos</h3>
          <p class="service-description">
            Realizamos cobertura fotográfica de eventos corporativos, sociais e culturais em toda a região do Alto Tietê.
          </p>
          <div class="service-cities">
            <span class="city-tag">Mogi das Cruzes</span>
            <span class="city-tag">Suzano</span>
            <span class="city-tag">Poá</span>
            <span class="city-tag">Biritiba Mirim</span>
            <span class="city-tag">Salesópolis</span>
          </div>
          <NuxtLink to="/ensaios/espetaculos" class="service-link">
            Ver detalhes
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Locais para Ensaios -->
    <section class="locations-section">
      <div class="section-header">
        <h2 class="section-title">Locais para Ensaios</h2>
        <p class="section-subtitle">Conheça os melhores locais para ensaios fotográficos na região</p>
      </div>
      
      <div class="locations-grid">
        <div class="location-card">
          <div class="location-image">
            <img src="/images/placeholder.jpg" alt="Parque Centenário" />
          </div>
          <div class="location-content">
            <h3 class="location-name">Parque Centenário</h3>
            <p class="location-description">
              Com áreas verdes, lago e estruturas arquitetônicas, o Parque Centenário oferece cenários variados para ensaios externos.
            </p>
            <div class="location-features">
              <span class="feature-tag">Natureza</span>
              <span class="feature-tag">Arquitetura</span>
              <span class="feature-tag">Água</span>
            </div>
          </div>
        </div>
        
        <div class="location-card">
          <div class="location-image">
            <img src="/images/placeholder.jpg" alt="Centro Histórico" />
          </div>
          <div class="location-content">
            <h3 class="location-name">Centro Histórico</h3>
            <p class="location-description">
              O centro histórico de Mogi das Cruzes possui construções antigas, ruas de paralelepípedos e uma atmosfera nostálgica perfeita para ensaios.
            </p>
            <div class="location-features">
              <span class="feature-tag">Urbano</span>
              <span class="feature-tag">Histórico</span>
              <span class="feature-tag">Arquitetura</span>
            </div>
          </div>
        </div>
        
        <div class="location-card">
          <div class="location-image">
            <img src="/images/placeholder.jpg" alt="Serra do Itapety" />
          </div>
          <div class="location-content">
            <h3 class="location-name">Serra do Itapety</h3>
            <p class="location-description">
              Com trilhas, cachoeiras e vistas panorâmicas, a Serra do Itapety é ideal para ensaios com temática de aventura e natureza.
            </p>
            <div class="location-features">
              <span class="feature-tag">Natureza</span>
              <span class="feature-tag">Montanha</span>
              <span class="feature-tag">Cachoeira</span>
            </div>
          </div>
        </div>
        
        <div class="location-card">
          <div class="location-image">
            <img src="/images/placeholder.jpg" alt="Casarão do Chá" />
          </div>
          <div class="location-content">
            <h3 class="location-name">Casarão do Chá</h3>
            <p class="location-description">
              Patrimônio histórico com arquitetura japonesa, jardins e ambiente bucólico, perfeito para ensaios pré-wedding e familiares.
            </p>
            <div class="location-features">
              <span class="feature-tag">Histórico</span>
              <span class="feature-tag">Cultural</span>
              <span class="feature-tag">Jardim</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Eventos Locais -->
    <section class="events-section">
      <div class="section-header">
        <h2 class="section-title">Eventos Locais</h2>
        <p class="section-subtitle">Participamos e cobrimos os principais eventos da região</p>
      </div>
      
      <div class="events-grid">
        <div class="event-card">
          <div class="event-image">
            <img src="/images/placeholder.jpg" alt="Festival de Inverno" />
          </div>
          <div class="event-content">
            <h3 class="event-title">Festival de Inverno</h3>
            <p class="event-date">Julho 2025</p>
            <p class="event-description">
              Cobertura fotográfica oficial do Festival de Inverno de Mogi das Cruzes, com apresentações culturais e artísticas.
            </p>
          </div>
        </div>
        
        <div class="event-card">
          <div class="event-image">
            <img src="/images/placeholder.jpg" alt="Festa do Divino" />
          </div>
          <div class="event-content">
            <h3 class="event-title">Festa do Divino</h3>
            <p class="event-date">Maio/Junho 2025</p>
            <p class="event-description">
              Registro fotográfico da tradicional Festa do Divino Espírito Santo, uma das mais antigas celebrações religiosas da cidade.
            </p>
          </div>
        </div>
        
        <div class="event-card">
          <div class="event-image">
            <img src="/images/placeholder.jpg" alt="Expo Mogi" />
          </div>
          <div class="event-content">
            <h3 class="event-title">Expo Mogi</h3>
            <p class="event-date">Setembro 2025</p>
            <p class="event-description">
              Participação na feira de negócios Expo Mogi, oferecendo serviços de fotografia corporativa e consultoria de imagem.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos Locais -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Depoimentos de Clientes Locais</h2>
        <p class="section-subtitle">O que dizem nossos clientes de Mogi das Cruzes e região</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "A Lillia é uma profissional incrível! Fiz um ensaio no Parque Centenário e as fotos ficaram maravilhosas. Super recomendo para quem busca uma fotógrafa talentosa em Mogi."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Ana Paula Silva" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Ana Paula Silva</h4>
              <p class="author-location">Mogi das Cruzes</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "A consultoria de coloração pessoal mudou minha vida! Agora sei exatamente quais cores me valorizam e minhas compras são muito mais assertivas. Vale muito a pena!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Mariana Oliveira" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Mariana Oliveira</h4>
              <p class="author-location">Suzano</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "Aluguei o estúdio para um projeto pessoal e fiquei impressionado com a estrutura e equipamentos disponíveis. Atendimento excelente e preço justo."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Carlos Mendes" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Carlos Mendes</h4>
              <p class="author-location">Mogi das Cruzes</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parceiros Locais -->
    <section class="partners-section">
      <div class="section-header">
        <h2 class="section-title">Parceiros Locais</h2>
        <p class="section-subtitle">Empresas e profissionais que trabalham conosco</p>
      </div>
      
      <div class="partners-grid">
        <div class="partner-card">
          <div class="partner-logo">
            <img src="/images/placeholder.jpg" alt="Beleza Express" />
          </div>
          <h3 class="partner-name">Beleza Express</h3>
          <p class="partner-category">Salão de Beleza</p>
          <p class="partner-description">
            Maquiagem e penteados para ensaios fotográficos.
          </p>
        </div>
        
        <div class="partner-card">
          <div class="partner-logo">
            <img src="/images/placeholder.jpg" alt="Moda & Estilo" />
          </div>
          <h3 class="partner-name">Moda & Estilo</h3>
          <p class="partner-category">Loja de Roupas</p>
          <p class="partner-description">
            Aluguel de peças para ensaios temáticos.
          </p>
        </div>
        
        <div class="partner-card">
          <div class="partner-logo">
            <img src="/images/placeholder.jpg" alt="Flores do Campo" />
          </div>
          <h3 class="partner-name">Flores do Campo</h3>
          <p class="partner-category">Floricultura</p>
          <p class="partner-description">
            Arranjos florais para cenários e ensaios.
          </p>
        </div>
        
        <div class="partner-card">
          <div class="partner-logo">
            <img src="/images/placeholder.jpg" alt="Espaço Celebrar" />
          </div>
          <h3 class="partner-name">Espaço Celebrar</h3>
          <p class="partner-category">Buffet e Eventos</p>
          <p class="partner-description">
            Locação para eventos e ensaios fotográficos.
          </p>
        </div>
      </div>
      
      <div class="partners-cta">
        <NuxtLink to="/parcerias" class="partners-link">
          Ver todos os parceiros
        </NuxtLink>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Agende seu serviço em Mogi das Cruzes</h2>
        <p class="cta-text">
          Entre em contato conosco e agende seu ensaio fotográfico ou consultoria de imagem.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contato/agendar" class="cta-button primary">
            Agendar Agora
          </NuxtLink>
          <NuxtLink to="/contato" class="cta-button secondary">
            Fale Conosco
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Meta tags para SEO
useHead({
  title: 'Presença Local - Fotógrafa em Mogi das Cruzes e Região | Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Serviços de fotografia e consultoria de imagem em Mogi das Cruzes e região. Ensaios fotográficos, consultoria de imagem e aluguel de estúdio no Alto Tietê.'
    },
    {
      name: 'keywords',
      content: 'fotógrafa Mogi das Cruzes, ensaio fotográfico Alto Tietê, consultoria de imagem Mogi, estúdio fotográfico Mogi, locais para ensaio fotográfico'
    }
  ]
});
</script>

<style scoped>
/* Hero Section */
.hero-section {
  height: 50vh;
  min-height: 400px;
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

/* Intro Section */
.intro-section {
  padding: 0 0 60px;
  margin-bottom: 60px;
  text-align: center;
}

.intro-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.intro-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.intro-text {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 1.1rem;
}

/* Location Section */
.location-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.location-map {
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.location-map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.location-title {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #333;
}

.location-address {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
}

.location-details {
  margin-bottom: 30px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.detail-icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.detail-text {
  color: #666;
}

.location-link {
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

.location-link:hover {
  background-color: #8a6642;
}

/* Services Section */
.services-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.service-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.service-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
}

.service-cities {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.city-tag {
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
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

/* Locations Section */
.locations-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.location-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.location-image {
  height: 250px;
  overflow: hidden;
}

.location-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.location-card:hover .location-image img {
  transform: scale(1.1);
}

.location-content {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.location-name {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.location-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
}

.location-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.feature-tag {
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Events Section */
.events-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.event-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.event-image {
  height: 200px;
  overflow: hidden;
}

.event-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.event-card:hover .event-image img {
  transform: scale(1.1);
}

.event-content {
  padding: 25px;
}

.event-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.event-date {
  color: #a67c52;
  font-weight: 600;
  margin-bottom: 15px;
}

.event-description {
  color: #666;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-content {
  margin-bottom: 20px;
  flex-grow: 1;
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

.author-location {
  color: #999;
  font-size: 0.9rem;
}

/* Partners Section */
.partners-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.partner-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.partner-card:hover {
  transform: translateY(-10px);
}

.partner-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 20px;
}

.partner-logo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.partner-name {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #333;
}

.partner-category {
  color: #a67c52;
  font-weight: 600;
  margin-bottom: 15px;
}

.partner-description {
  color: #666;
  line-height: 1.6;
}

.partners-cta {
  text-align: center;
  margin-top: 40px;
}

.partners-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.partners-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.partners-link:hover::after {
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
@media (max-width: 1200px) {
  .services-grid,
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .location-grid {
    grid-template-columns: 1fr;
  }
  
  .locations-grid,
  .events-grid,
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .services-grid,
  .locations-grid,
  .events-grid,
  .testimonials-grid,
  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
