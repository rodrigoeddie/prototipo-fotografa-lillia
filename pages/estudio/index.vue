<!-- pages/estudio/index.vue - Página principal do estúdio -->
<template>
  <div class="estudio-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Estúdio Fotográfico</h1>
        <p class="hero-subtitle">Espaço completo para ensaios e produções fotográficas</p>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-section">
      <div class="intro-grid">
        <div class="intro-content">
          <h2 class="intro-title">Conheça Nosso Estúdio</h2>
          <p class="intro-text">
            Localizado em Mogi das Cruzes, nosso estúdio fotográfico foi projetado para oferecer o ambiente ideal para diversos tipos de ensaios e produções fotográficas.
          </p>
          <p class="intro-text">
            Com 80m² de área útil, o espaço conta com equipamentos profissionais, diversos cenários temáticos e uma estrutura completa para garantir o conforto e a qualidade das suas fotos.
          </p>
          <div class="intro-features">
            <div class="feature-item">
              <span class="feature-icon">📏</span>
              <span class="feature-text">80m² de área útil</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎭</span>
              <span class="feature-text">Diversos cenários temáticos</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💡</span>
              <span class="feature-text">Equipamentos profissionais</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🚿</span>
              <span class="feature-text">Vestiário e banheiro</span>
            </div>
          </div>
        </div>
        <div class="intro-image">
          <img src="/images/placeholder.jpg" alt="Estúdio Fotográfico" />
        </div>
      </div>
    </section>

    <!-- Serviços do Estúdio -->
    <section class="services-section">
      <div class="section-header">
        <h2 class="section-title">Serviços do Estúdio</h2>
        <p class="section-subtitle">Conheça as opções disponíveis para uso do espaço</p>
      </div>
      
      <div class="services-grid">
        <!-- Aluguel de Estúdio -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Aluguel de Estúdio" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Aluguel de Estúdio</h3>
            <p class="service-description">
              Alugue o estúdio completo para suas produções fotográficas ou audiovisuais.
            </p>
            <div class="service-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Período mínimo: 2 horas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">💡</span>
                <span class="feature-text">Equipamentos inclusos</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎭</span>
                <span class="feature-text">Acesso a todos os cenários</span>
              </div>
            </div>
            <NuxtLink to="/estudio/aluguel" class="service-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
        
        <!-- Cenários Temáticos -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Cenários Temáticos" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Cenários Temáticos</h3>
            <p class="service-description">
              Diversos cenários temáticos para diferentes tipos de ensaios e produções.
            </p>
            <div class="service-features">
              <div class="feature-item">
                <span class="feature-icon">🎄</span>
                <span class="feature-text">Cenários sazonais</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🏠</span>
                <span class="feature-text">Ambientes diversos</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🔄</span>
                <span class="feature-text">Atualizados regularmente</span>
              </div>
            </div>
            <NuxtLink to="/estudio/cenarios" class="service-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Galeria do Estúdio -->
    <section class="gallery-section">
      <div class="section-header">
        <h2 class="section-title">Galeria do Estúdio</h2>
        <p class="section-subtitle">Conheça nosso espaço e estrutura</p>
      </div>
      
      <div class="gallery-grid">
        <div class="gallery-item">
          <img src="/images/placeholder.jpg" alt="Área principal do estúdio" />
          <div class="gallery-caption">Área principal do estúdio</div>
        </div>
        <div class="gallery-item">
          <img src="/images/placeholder.jpg" alt="Cenário Natal" />
          <div class="gallery-caption">Cenário Natal</div>
        </div>
        <div class="gallery-item">
          <img src="/images/placeholder.jpg" alt="Equipamentos de iluminação" />
          <div class="gallery-caption">Equipamentos de iluminação</div>
        </div>
        <div class="gallery-item">
          <img src="/images/placeholder.jpg" alt="Vestiário" />
          <div class="gallery-caption">Vestiário</div>
        </div>
        <div class="gallery-item">
          <img src="/images/placeholder.jpg" alt="Cenário Neutro" />
          <div class="gallery-caption">Cenário Neutro</div>
        </div>
        <div class="gallery-item">
          <img src="/images/placeholder.jpg" alt="Área de maquiagem" />
          <div class="gallery-caption">Área de maquiagem</div>
        </div>
      </div>
    </section>

    <!-- Cenários em Destaque -->
    <section class="featured-section">
      <div class="section-header">
        <h2 class="section-title">Cenários em Destaque</h2>
        <p class="section-subtitle">Conheça alguns dos nossos cenários temáticos</p>
      </div>
      
      <div class="featured-grid">
        <div class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Cenário Natal" />
          </div>
          <div class="featured-content">
            <h3 class="featured-title">Natal</h3>
            <p class="featured-description">
              Cenário completo com decoração natalina, árvore de Natal, presentes e iluminação especial.
            </p>
            <span class="featured-availability">Disponível: Out-Dez</span>
          </div>
        </div>
        
        <div class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Cenário Dia das Mães" />
          </div>
          <div class="featured-content">
            <h3 class="featured-title">Dia das Mães</h3>
            <p class="featured-description">
              Ambiente aconchegante com decoração floral, poltronas e elementos que remetem à maternidade.
            </p>
            <span class="featured-availability">Disponível: Abr-Mai</span>
          </div>
        </div>
        
        <div class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Cenário Corporativo" />
          </div>
          <div class="featured-content">
            <h3 class="featured-title">Corporativo</h3>
            <p class="featured-description">
              Ambiente clean e profissional, ideal para fotos corporativas e de perfil profissional.
            </p>
            <span class="featured-availability">Disponível: Todo o ano</span>
          </div>
        </div>
        
        <div class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Cenário Neutro" />
          </div>
          <div class="featured-content">
            <h3 class="featured-title">Neutro</h3>
            <p class="featured-description">
              Fundo infinito em diversas cores, ideal para ensaios minimalistas e produções versáteis.
            </p>
            <span class="featured-availability">Disponível: Todo o ano</span>
          </div>
        </div>
      </div>
      
      <div class="featured-link-container">
        <NuxtLink to="/estudio/cenarios" class="featured-link">Ver todos os cenários</NuxtLink>
      </div>
    </section>

    <!-- Equipamentos -->
    <section class="equipment-section">
      <div class="section-header">
        <h2 class="section-title">Equipamentos</h2>
        <p class="section-subtitle">Conheça os equipamentos disponíveis no estúdio</p>
      </div>
      
      <div class="equipment-grid">
        <div class="equipment-category">
          <h3 class="category-title">Iluminação</h3>
          <ul class="equipment-list">
            <li>2 Flash Godox SK400II</li>
            <li>1 Flash Godox SK300II</li>
            <li>3 Tripés de iluminação</li>
            <li>Softboxes e difusores diversos</li>
            <li>Rebatedores de luz</li>
          </ul>
        </div>
        
        <div class="equipment-category">
          <h3 class="category-title">Fundos</h3>
          <ul class="equipment-list">
            <li>Fundo infinito branco (2,70m x 11m)</li>
            <li>Fundo infinito preto (2,70m x 11m)</li>
            <li>Fundo infinito cinza (2,70m x 11m)</li>
            <li>Diversos fundos de tecido e papel</li>
          </ul>
        </div>
        
        <div class="equipment-category">
          <h3 class="category-title">Acessórios</h3>
          <ul class="equipment-list">
            <li>Ventilador para efeitos</li>
            <li>Máquina de fumaça</li>
            <li>Rádio disparador de flash</li>
            <li>Filtros de cor para iluminação</li>
          </ul>
        </div>
        
        <div class="equipment-category">
          <h3 class="category-title">Estrutura</h3>
          <ul class="equipment-list">
            <li>Vestiário com espelho</li>
            <li>Área de maquiagem</li>
            <li>Wi-Fi de alta velocidade</li>
            <li>Sistema de som ambiente</li>
            <li>Ar condicionado</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Localização -->
    <section class="location-section">
      <div class="section-header">
        <h2 class="section-title">Localização</h2>
        <p class="section-subtitle">Como chegar ao estúdio</p>
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
              <span class="detail-text">Estacionamento próximo</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">🚌</span>
              <span class="detail-text">Transporte público a 200m</span>
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

    <!-- FAQ -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre o estúdio</p>
      </div>
      
      <div class="faq-container">
        <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
          <div 
            class="faq-question" 
            :class="{ 'active': activeQuestion === index }"
            @click="toggleQuestion(index)"
          >
            <h3 class="question-text">{{ item.question }}</h3>
            <span class="question-icon">+</span>
          </div>
          <div class="faq-answer" :class="{ 'active': activeQuestion === index }">
            <p class="answer-text">{{ item.answer }}</p>
          </div>
        </div>
      </div>
      
      <div class="faq-link-container">
        <NuxtLink to="/faq" class="faq-link">Ver todas as perguntas frequentes</NuxtLink>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Pronto para usar nosso estúdio?</h2>
        <p class="cta-text">
          Agende seu horário ou solicite mais informações sobre o aluguel do estúdio.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contato/aluguel" class="cta-button primary">
            Agendar Agora
          </NuxtLink>
          <NuxtLink to="/investimento" class="cta-button secondary">
            Ver Valores
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Estado para controle do FAQ
const activeQuestion = ref(null);

// Dados do FAQ
const faqItems = [
  {
    question: "Qual o período mínimo de aluguel do estúdio?",
    answer: "O período mínimo de aluguel é de 2 horas. Após esse período, é possível alugar por hora adicional."
  },
  {
    question: "É necessário ter experiência para alugar o estúdio?",
    answer: "Não é necessário ter experiência prévia. Oferecemos orientação básica sobre o uso dos equipamentos no início do aluguel. Para equipamentos mais específicos, recomendamos a contratação de um assistente."
  },
  {
    question: "Posso levar meu próprio equipamento?",
    answer: "Sim, você pode levar seu próprio equipamento. O valor do aluguel inclui o uso do espaço e dos equipamentos disponíveis no estúdio, mas você tem liberdade para utilizar seus próprios equipamentos."
  },
  {
    question: "É possível alugar apenas para ensaios fotográficos pessoais?",
    answer: "Sim, o estúdio pode ser alugado para ensaios pessoais, profissionais, comerciais ou qualquer outro tipo de produção fotográfica ou audiovisual, desde que dentro das normas de uso do espaço."
  },
  {
    question: "Como funciona o agendamento e pagamento?",
    answer: "O agendamento é feito mediante disponibilidade e confirmado após o pagamento de 50% do valor total como sinal. O restante deve ser pago no dia do uso do estúdio. Aceitamos PIX, transferência bancária e cartões de crédito/débito."
  }
];

// Função para alternar perguntas do FAQ
const toggleQuestion = (index) => {
  if (activeQuestion === index) {
    activeQuestion.value = null;
  } else {
    activeQuestion.value = index;
  }
};

// Meta tags para SEO
useHead({
  title: 'Estúdio Fotográfico - Aluguel e Cenários em Mogi das Cruzes',
  meta: [
    {
      name: 'description',
      content: 'Estúdio fotográfico completo para aluguel em Mogi das Cruzes. Diversos cenários temáticos, equipamentos profissionais e estrutura completa para suas produções.'
    },
    {
      name: 'keywords',
      content: 'estúdio fotográfico, aluguel de estúdio, cenários para fotos, equipamentos fotográficos, Mogi das Cruzes'
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
  padding: 60px 0;
  margin-bottom: 60px;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
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
}

.intro-features {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
}

.feature-item {
  display: flex;
  align-items: center;
  background-color: #f9f7f4;
  padding: 10px 20px;
  border-radius: 30px;
}

.feature-icon {
  margin-right: 10px;
  font-size: 1.2rem;
}

.feature-text {
  font-size: 0.95rem;
  color: #666;
}

.intro-image {
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
}

.intro-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Services Section */
.services-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.service-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  display: flex;
  flex-direction: column;
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

.service-features {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  flex: 1;
}

.service-link {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
  align-self: flex-start;
}

.service-link:hover {
  background-color: #8a6642;
}

/* Gallery Section */
.gallery-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 250px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  font-size: 0.9rem;
  text-align: center;
}

/* Featured Section */
.featured-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.featured-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.featured-card:hover {
  transform: translateY(-10px);
}

.featured-image {
  height: 200px;
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
  padding: 20px;
}

.featured-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.featured-description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 0.9rem;
}

.featured-availability {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.featured-link-container {
  text-align: center;
  margin-top: 40px;
}

.featured-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.featured-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.featured-link:hover::after {
  width: 100%;
}

/* Equipment Section */
.equipment-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.equipment-category {
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.category-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #a67c52;
}

.equipment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.equipment-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f0e6d9;
  color: #666;
  font-size: 0.95rem;
}

.equipment-list li:last-child {
  border-bottom: none;
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

/* FAQ Section */
.faq-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: white;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.faq-question {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background-color: #f9f7f4;
}

.faq-question.active {
  background-color: #f0e6d9;
}

.question-text {
  font-size: 1.1rem;
  color: #333;
  margin: 0;
}

.question-icon {
  font-size: 1.5rem;
  color: #a67c52;
  transition: transform 0.3s ease;
}

.faq-question.active .question-icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-answer.active {
  max-height: 200px;
}

.answer-text {
  padding: 0 20px 20px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.faq-link-container {
  text-align: center;
  margin-top: 40px;
}

.faq-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.faq-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.faq-link:hover::after {
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
  .intro-grid,
  .location-grid {
    grid-template-columns: 1fr;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .gallery-grid,
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .equipment-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .gallery-grid,
  .featured-grid,
  .equipment-grid {
    grid-template-columns: 1fr;
  }
  
  .intro-features {
    flex-direction: column;
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
