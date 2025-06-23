<!-- pages/consultoria/index.vue - Página principal de consultoria de imagem -->
<template>
  <div class="consultoria-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Consultoria de Imagem</h1>
        <p class="hero-subtitle">Descubra as cores e estilos que valorizam sua beleza natural</p>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-section">
      <div class="intro-grid">
        <div class="intro-content">
          <h2 class="intro-title">Transforme sua Imagem Pessoal</h2>
          <p class="intro-text">
            A consultoria de imagem é um serviço personalizado que ajuda você a descobrir as cores, estilos e combinações que melhor valorizam sua beleza natural, respeitando sua personalidade e estilo de vida.
          </p>
          <p class="intro-text">
            Como consultora de imagem certificada, trabalho para que você se sinta mais confiante e autêntico através das suas escolhas de vestuário, cores e estilo pessoal.
          </p>
          <div class="intro-stats">
            <div class="stat-item">
              <span class="stat-number">5+</span>
              <span class="stat-label">Anos de Experiência</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">300+</span>
              <span class="stat-label">Consultorias Realizadas</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
        <div class="intro-image">
          <img src="/images/placeholder.jpg" alt="Consultoria de Imagem" />
        </div>
      </div>
    </section>

    <!-- Serviços de Consultoria -->
    <section class="services-section">
      <div class="section-header">
        <h2 class="section-title">Serviços de Consultoria</h2>
        <p class="section-subtitle">Conheça os serviços de consultoria de imagem oferecidos</p>
      </div>
      
      <div class="services-grid">
        <!-- Coloração Pessoal -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Coloração Pessoal" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Coloração Pessoal</h3>
            <p class="service-description">
              Descubra quais cores mais valorizam seu tom de pele, olhos e cabelos, potencializando sua beleza natural.
            </p>
            <div class="service-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 2h</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎨</span>
                <span class="feature-text">Cartela de cores personalizada</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📋</span>
                <span class="feature-text">Material digital completo</span>
              </div>
            </div>
            <NuxtLink to="/consultoria/coloracao-pessoal" class="service-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
        
        <!-- Análise de Estilo -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Análise de Estilo" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Análise de Estilo</h3>
            <p class="service-description">
              Identifique seu estilo pessoal e aprenda a expressar sua personalidade através das roupas.
            </p>
            <div class="service-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 2h30</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👗</span>
                <span class="feature-text">Identificação de estilo</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📋</span>
                <span class="feature-text">Guia de compras personalizado</span>
              </div>
            </div>
            <NuxtLink to="/consultoria/analise-estilo" class="service-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
        
        <!-- Consultoria de Guarda-roupa -->
        <div class="service-card">
          <div class="service-image">
            <img src="/images/placeholder.jpg" alt="Consultoria de Guarda-roupa" />
          </div>
          <div class="service-content">
            <h3 class="service-title">Consultoria de Guarda-roupa</h3>
            <p class="service-description">
              Organize seu guarda-roupa de forma prática e funcional, criando looks versáteis com as peças que você já tem.
            </p>
            <div class="service-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 3h</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👚</span>
                <span class="feature-text">Organização de peças</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📸</span>
                <span class="feature-text">Catálogo de looks</span>
              </div>
            </div>
            <NuxtLink to="/consultoria/guarda-roupa" class="service-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefícios -->
    <section class="benefits-section">
      <div class="section-header">
        <h2 class="section-title">Benefícios da Consultoria</h2>
        <p class="section-subtitle">Como a consultoria de imagem pode transformar sua vida</p>
      </div>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">✨</div>
          <h3 class="benefit-title">Autoconhecimento</h3>
          <p class="benefit-description">
            Conheça melhor seu corpo, personalidade e estilo, aprendendo a valorizar suas características únicas.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">💰</div>
          <h3 class="benefit-title">Economia</h3>
          <p class="benefit-description">
            Evite compras por impulso e invista apenas em peças que realmente combinam com você.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">⏰</div>
          <h3 class="benefit-title">Praticidade</h3>
          <p class="benefit-description">
            Reduza o tempo gasto para se arrumar com um guarda-roupa funcional e combinações pré-definidas.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🔄</div>
          <h3 class="benefit-title">Versatilidade</h3>
          <p class="benefit-description">
            Crie múltiplos looks com menos peças, maximizando as possibilidades do seu guarda-roupa.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">👔</div>
          <h3 class="benefit-title">Imagem Profissional</h3>
          <p class="benefit-description">
            Transmita a mensagem correta no ambiente de trabalho, alinhando sua imagem aos seus objetivos profissionais.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🌟</div>
          <h3 class="benefit-title">Autoconfiança</h3>
          <p class="benefit-description">
            Sinta-se mais seguro e confiante ao saber que está vestindo o que realmente valoriza você.
          </p>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Depoimentos</h2>
        <p class="section-subtitle">O que dizem sobre nossas consultorias de imagem</p>
      </div>
      
      <div class="testimonials-slider">
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
              "A análise de estilo me ajudou a entender melhor minha personalidade e como expressá-la através das roupas. Hoje me sinto muito mais confiante e autêntica com minhas escolhas."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Juliana Mendes" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Juliana Mendes</h4>
              <p class="author-service">Análise de Estilo</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "A consultoria de guarda-roupa foi transformadora! Consegui organizar minhas peças de forma prática e funcional, e hoje consigo criar muito mais looks com menos peças. Valeu cada centavo!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Fernanda Costa" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Fernanda Costa</h4>
              <p class="author-service">Consultoria de Guarda-roupa</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo de Consultoria -->
    <section class="process-section">
      <div class="section-header">
        <h2 class="section-title">Como Funciona</h2>
        <p class="section-subtitle">Conheça o processo de consultoria de imagem</p>
      </div>
      
      <div class="process-steps">
        <div class="process-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3 class="step-title">Agendamento</h3>
            <p class="step-description">
              Entre em contato para verificar disponibilidade de data e horário para sua consultoria.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3 class="step-title">Questionário</h3>
            <p class="step-description">
              Preencha um questionário detalhado sobre seus hábitos, preferências e objetivos com a consultoria.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3 class="step-title">Consultoria</h3>
            <p class="step-description">
              No dia agendado, realizamos a consultoria presencial com análises e orientações personalizadas.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3 class="step-title">Material</h3>
            <p class="step-description">
              Receba material digital completo com todas as informações e orientações da sua consultoria.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h3 class="step-title">Acompanhamento</h3>
            <p class="step-description">
              Após 30 dias, realizamos uma sessão de acompanhamento para tirar dúvidas e ajustar orientações.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pacotes -->
    <section class="packages-section">
      <div class="section-header">
        <h2 class="section-title">Pacotes</h2>
        <p class="section-subtitle">Escolha o pacote que melhor atende às suas necessidades</p>
      </div>
      
      <div class="packages-grid">
        <div class="package-card">
          <div class="package-header">
            <h3 class="package-title">Essencial</h3>
            <div class="package-price">
              <span class="price-value">R$ 450</span>
              <span class="price-period">pagamento único</span>
            </div>
          </div>
          <div class="package-content">
            <ul class="package-features">
              <li class="feature-included">Análise de Coloração Pessoal</li>
              <li class="feature-included">Cartela de Cores Personalizada</li>
              <li class="feature-included">Material Digital</li>
              <li class="feature-included">Sessão de 2 horas</li>
              <li class="feature-excluded">Análise de Estilo</li>
              <li class="feature-excluded">Consultoria de Guarda-roupa</li>
              <li class="feature-excluded">Acompanhamento por 3 meses</li>
            </ul>
            <NuxtLink to="/contato/agendar" class="package-cta">
              Agendar Agora
            </NuxtLink>
          </div>
        </div>
        
        <div class="package-card featured">
          <div class="package-badge">Mais Popular</div>
          <div class="package-header">
            <h3 class="package-title">Premium</h3>
            <div class="package-price">
              <span class="price-value">R$ 850</span>
              <span class="price-period">pagamento único</span>
            </div>
          </div>
          <div class="package-content">
            <ul class="package-features">
              <li class="feature-included">Análise de Coloração Pessoal</li>
              <li class="feature-included">Cartela de Cores Personalizada</li>
              <li class="feature-included">Material Digital</li>
              <li class="feature-included">Análise de Estilo</li>
              <li class="feature-included">Guia de Compras Personalizado</li>
              <li class="feature-included">Sessão de 4 horas</li>
              <li class="feature-excluded">Consultoria de Guarda-roupa</li>
              <li class="feature-included">Acompanhamento por 1 mês</li>
            </ul>
            <NuxtLink to="/contato/agendar" class="package-cta">
              Agendar Agora
            </NuxtLink>
          </div>
        </div>
        
        <div class="package-card">
          <div class="package-header">
            <h3 class="package-title">Completo</h3>
            <div class="package-price">
              <span class="price-value">R$ 1.200</span>
              <span class="price-period">pagamento único</span>
            </div>
          </div>
          <div class="package-content">
            <ul class="package-features">
              <li class="feature-included">Análise de Coloração Pessoal</li>
              <li class="feature-included">Cartela de Cores Personalizada</li>
              <li class="feature-included">Material Digital</li>
              <li class="feature-included">Análise de Estilo</li>
              <li class="feature-included">Guia de Compras Personalizado</li>
              <li class="feature-included">Consultoria de Guarda-roupa</li>
              <li class="feature-included">Catálogo de Looks</li>
              <li class="feature-included">Sessão de 6 horas</li>
              <li class="feature-included">Acompanhamento por 3 meses</li>
            </ul>
            <NuxtLink to="/contato/agendar" class="package-cta">
              Agendar Agora
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="packages-note">
        <p>* Todos os pacotes incluem material digital completo e certificado de consultoria.</p>
        <p>* Pagamento pode ser parcelado em até 3x sem juros.</p>
        <NuxtLink to="/investimento" class="packages-link">Ver detalhes completos dos pacotes</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre consultoria de imagem</p>
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
        <h2 class="cta-title">Pronto para transformar sua imagem?</h2>
        <p class="cta-text">
          Agende sua consultoria de imagem e descubra como valorizar sua beleza natural.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contato/agendar" class="cta-button primary">
            Agendar Agora
          </NuxtLink>
          <NuxtLink to="/guias/coloracao-pessoal" class="cta-button secondary">
            Baixar Guia Gratuito
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
    question: "Quanto tempo dura uma consultoria de coloração pessoal?",
    answer: "A consultoria de coloração pessoal tem duração média de 2 horas. Durante este tempo, são realizados testes com tecidos coloridos para identificar sua paleta de cores ideal."
  },
  {
    question: "Preciso levar algo para a consultoria?",
    answer: "Para a coloração pessoal, você deve vir sem maquiagem ou com maquiagem bem leve. Para análise de estilo, é interessante trazer algumas peças que você gosta e outras que tem dúvidas. Para consultoria de guarda-roupa, o atendimento é feito na sua casa."
  },
  {
    question: "A consultoria é só para mulheres?",
    answer: "Não, a consultoria de imagem é para todos os gêneros. Temos pacotes específicos para homens, mulheres e também atendemos o público não-binário, sempre respeitando a individualidade de cada pessoa."
  },
  {
    question: "Vou precisar comprar roupas novas após a consultoria?",
    answer: "Não necessariamente. Um dos objetivos da consultoria é otimizar o uso das peças que você já possui. Claro que podem surgir sugestões de itens que complementariam seu guarda-roupa, mas a decisão de compra é sempre sua."
  },
  {
    question: "A consultoria é presencial ou online?",
    answer: "Oferecemos ambas as modalidades. A consultoria presencial é mais completa e permite uma análise mais precisa, especialmente para coloração pessoal. Já a consultoria online é uma ótima opção para quem mora em outras cidades ou tem agenda limitada."
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
  title: 'Consultoria de Imagem - Coloração Pessoal e Análise de Estilo em Mogi das Cruzes',
  meta: [
    {
      name: 'description',
      content: 'Consultoria de imagem personalizada: coloração pessoal, análise de estilo e organização de guarda-roupa. Descubra as cores e estilos que valorizam sua beleza natural.'
    },
    {
      name: 'keywords',
      content: 'consultoria de imagem, coloração pessoal, análise de estilo, consultoria de guarda-roupa, cartela de cores, Mogi das Cruzes'
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

.intro-stats {
  display: flex;
  margin-top: 30px;
}

.stat-item {
  flex: 1;
  text-align: center;
  padding: 20px;
  border-right: 1px solid #ddd;
}

.stat-item:last-child {
  border-right: none;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #a67c52;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
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
  grid-template-columns: repeat(3, 1fr);
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
  height: 200px;
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

.feature-item {
  display: flex;
  align-items: center;
}

.feature-icon {
  margin-right: 10px;
  font-size: 1.1rem;
}

.feature-text {
  font-size: 0.9rem;
  color: #666;
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

/* Benefits Section */
.benefits-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.benefit-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-10px);
}

.benefit-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.benefit-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.benefit-description {
  color: #666;
  line-height: 1.6;
}

/* Testimonials Section */
.testimonials-section {
  padding: 60px 0;
  background-color: #f9f7f4;
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

/* Process Section */
.process-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.process-steps {
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50px;
  left: 25px;
  width: 2px;
  height: calc(100% - 20px);
  background-color: #f0e6d9;
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: #a67c52;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-right: 20px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.step-content {
  padding-top: 5px;
}

.step-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.step-description {
  color: #666;
  line-height: 1.6;
}

/* Packages Section */
.packages-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.package-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  position: relative;
}

.package-card:hover {
  transform: translateY(-10px);
}

.package-card.featured {
  border: 2px solid #a67c52;
  transform: scale(1.05);
}

.package-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.package-badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #a67c52;
  color: white;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  border-bottom-left-radius: 10px;
}

.package-header {
  padding: 30px;
  text-align: center;
  border-bottom: 1px solid #f0e6d9;
}

.package-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.package-price {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price-value {
  font-size: 2rem;
  font-weight: 700;
  color: #a67c52;
}

.price-period {
  font-size: 0.9rem;
  color: #999;
}

.package-content {
  padding: 30px;
}

.package-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
}

.package-features li {
  padding: 10px 0;
  border-bottom: 1px solid #f0e6d9;
  position: relative;
  padding-left: 30px;
}

.package-features li:last-child {
  border-bottom: none;
}

.feature-included::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #4CAF50;
  font-weight: 700;
}

.feature-excluded {
  color: #999;
  text-decoration: line-through;
}

.feature-excluded::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #F44336;
}

.package-cta {
  display: block;
  background-color: #a67c52;
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s ease;
}

.package-cta:hover {
  background-color: #8a6642;
}

.packages-note {
  max-width: 800px;
  margin: 40px auto 0;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.packages-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  margin-top: 10px;
  position: relative;
  padding-bottom: 2px;
}

.packages-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.packages-link:hover::after {
  width: 100%;
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
  .intro-grid {
    grid-template-columns: 1fr;
  }
  
  .services-grid,
  .benefits-grid,
  .testimonials-slider {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .package-card.featured {
    transform: scale(1);
  }
  
  .package-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .services-grid,
  .benefits-grid,
  .testimonials-slider {
    grid-template-columns: 1fr;
  }
  
  .intro-stats {
    flex-direction: column;
  }
  
  .stat-item {
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
  
  .stat-item:last-child {
    border-bottom: none;
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
  
  .process-step {
    flex-direction: column;
  }
  
  .process-step:not(:last-child)::after {
    left: 25px;
    top: 50px;
    height: calc(100% - 50px);
  }
  
  .step-number {
    margin-bottom: 20px;
  }
}
</style>
