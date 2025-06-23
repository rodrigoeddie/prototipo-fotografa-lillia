<!-- pages/ensaios/index.vue - Página principal de ensaios fotográficos -->
<template>
  <div class="ensaios-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Ensaios Fotográficos</h1>
        <p class="hero-subtitle">Eternize momentos especiais com ensaios personalizados</p>
      </div>
    </section>

    <!-- Categorias de Ensaios -->
    <section class="categories-section">
      <div class="section-header">
        <h2 class="section-title">Categorias de Ensaios</h2>
        <p class="section-subtitle">Escolha o tipo de ensaio que melhor atende às suas necessidades</p>
      </div>
      
      <div class="categories-grid">
        <!-- Natal em Família -->
        <div class="category-card">
          <div class="category-image">
            <img src="/images/placeholder.jpg" alt="Natal em Família" />
          </div>
          <div class="category-content">
            <h3 class="category-title">Natal em Família</h3>
            <p class="category-description">
              Ensaios temáticos para celebrar o Natal com toda a família em um ambiente acolhedor e festivo.
            </p>
            <div class="category-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 1h30</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📸</span>
                <span class="feature-text">30 fotos editadas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👪</span>
                <span class="feature-text">Até 6 pessoas</span>
              </div>
            </div>
            <NuxtLink to="/ensaios/natal-familia" class="category-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
        
        <!-- Corporativo -->
        <div class="category-card">
          <div class="category-image">
            <img src="/images/placeholder.jpg" alt="Corporativo" />
          </div>
          <div class="category-content">
            <h3 class="category-title">Corporativo</h3>
            <p class="category-description">
              Fotos profissionais para perfil corporativo, LinkedIn e materiais institucionais.
            </p>
            <div class="category-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 1h</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📸</span>
                <span class="feature-text">15 fotos editadas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👔</span>
                <span class="feature-text">2 trocas de roupa</span>
              </div>
            </div>
            <NuxtLink to="/ensaios/corporativo" class="category-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
        
        <!-- Sensual/Intimista -->
        <div class="category-card">
          <div class="category-image">
            <img src="/images/placeholder.jpg" alt="Sensual/Intimista" />
          </div>
          <div class="category-content">
            <h3 class="category-title">Sensual/Intimista</h3>
            <p class="category-description">
              Ensaios que celebram a autoestima e a beleza feminina em um ambiente seguro e respeitoso.
            </p>
            <div class="category-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 2h</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📸</span>
                <span class="feature-text">25 fotos editadas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">👗</span>
                <span class="feature-text">3 trocas de roupa</span>
              </div>
            </div>
            <NuxtLink to="/ensaios/sensual" class="category-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
        
        <!-- Espetáculos -->
        <div class="category-card">
          <div class="category-image">
            <img src="/images/placeholder.jpg" alt="Espetáculos" />
          </div>
          <div class="category-content">
            <h3 class="category-title">Espetáculos</h3>
            <p class="category-description">
              Cobertura fotográfica de espetáculos, shows e eventos culturais.
            </p>
            <div class="category-features">
              <div class="feature-item">
                <span class="feature-icon">⏱️</span>
                <span class="feature-text">Duração: 3h</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">📸</span>
                <span class="feature-text">50+ fotos editadas</span>
              </div>
              <div class="feature-item">
                <span class="feature-icon">🎭</span>
                <span class="feature-text">Cobertura completa</span>
              </div>
            </div>
            <NuxtLink to="/ensaios/espetaculos" class="category-link">
              Ver detalhes
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Ensaios em Destaque -->
    <section class="featured-section">
      <div class="section-header">
        <h2 class="section-title">Ensaios em Destaque</h2>
        <p class="section-subtitle">Confira alguns dos nossos trabalhos recentes</p>
      </div>
      
      <div class="featured-grid">
        <NuxtLink to="/ensaios/dia-das-maes-2025/rosiney-de-melo" class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Ensaio Dia das Mães 2025 - Rosiney de Melo" />
          </div>
          <div class="featured-content">
            <span class="featured-category">Dia das Mães</span>
            <h3 class="featured-title">Rosiney de Melo</h3>
            <span class="featured-date">Maio 2025</span>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/ensaios/corporativo/carlos-mendes" class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Ensaio Corporativo - Carlos Mendes" />
          </div>
          <div class="featured-content">
            <span class="featured-category">Corporativo</span>
            <h3 class="featured-title">Carlos Mendes</h3>
            <span class="featured-date">Abril 2025</span>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/ensaios/natal-familia/familia-oliveira" class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Ensaio Natal em Família - Família Oliveira" />
          </div>
          <div class="featured-content">
            <span class="featured-category">Natal em Família</span>
            <h3 class="featured-title">Família Oliveira</h3>
            <span class="featured-date">Dezembro 2024</span>
          </div>
        </NuxtLink>
        
        <NuxtLink to="/ensaios/sensual/ana-paula" class="featured-card">
          <div class="featured-image">
            <img src="/images/placeholder.jpg" alt="Ensaio Sensual - Ana Paula" />
          </div>
          <div class="featured-content">
            <span class="featured-category">Sensual</span>
            <h3 class="featured-title">Ana Paula</h3>
            <span class="featured-date">Março 2025</span>
          </div>
        </NuxtLink>
      </div>
      
      <div class="featured-link-container">
        <NuxtLink to="/trabalhos" class="featured-link">Ver todos os trabalhos</NuxtLink>
      </div>
    </section>

    <!-- Processo de Ensaio -->
    <section class="process-section">
      <div class="section-header">
        <h2 class="section-title">Como Funciona</h2>
        <p class="section-subtitle">Conheça o processo de realização do seu ensaio fotográfico</p>
      </div>
      
      <div class="process-steps">
        <div class="process-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3 class="step-title">Agendamento</h3>
            <p class="step-description">
              Entre em contato para verificar disponibilidade de data e horário para seu ensaio.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3 class="step-title">Preparação</h3>
            <p class="step-description">
              Receba orientações sobre como se preparar para o ensaio, incluindo dicas de roupas e maquiagem.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3 class="step-title">Ensaio</h3>
            <p class="step-description">
              No dia do ensaio, você será recebido no estúdio e orientado durante toda a sessão fotográfica.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3 class="step-title">Seleção</h3>
            <p class="step-description">
              Após o ensaio, você receberá uma galeria online para selecionar suas fotos favoritas.
            </p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h3 class="step-title">Entrega</h3>
            <p class="step-description">
              Receba suas fotos editadas em alta resolução, prontas para impressão e compartilhamento.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre os ensaios fotográficos</p>
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
        <h2 class="cta-title">Pronto para eternizar seus momentos?</h2>
        <p class="cta-text">
          Agende seu ensaio fotográfico e transforme sua experiência.
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
// Estado para controle do FAQ
const activeQuestion = ref(null);

// Dados do FAQ
const faqItems = [
  {
    question: "Quanto tempo dura um ensaio fotográfico?",
    answer: "A duração varia conforme o tipo de ensaio. Ensaios corporativos duram cerca de 1 hora, enquanto ensaios familiares ou sensuais podem durar de 1h30 a 2 horas. Ensaios de espetáculos têm duração conforme o evento."
  },
  {
    question: "Preciso levar minha própria roupa para o ensaio?",
    answer: "Sim, você deve trazer suas próprias roupas para o ensaio. Enviamos um guia com sugestões de looks após a confirmação do agendamento. Para alguns ensaios temáticos, oferecemos acessórios específicos."
  },
  {
    question: "O estúdio oferece serviço de maquiagem?",
    answer: "Sim, oferecemos serviço de maquiagem profissional como adicional. Este serviço deve ser agendado com antecedência e tem um custo extra. Trabalhamos com maquiadoras parceiras especializadas em maquiagem para fotografia."
  },
  {
    question: "Quanto tempo leva para receber as fotos após o ensaio?",
    answer: "O prazo de entrega é de até 15 dias úteis após a seleção das fotos. Para ensaios de espetáculos ou eventos, o prazo pode ser de até 20 dias úteis devido ao volume maior de imagens."
  },
  {
    question: "É possível fazer ensaios externos, fora do estúdio?",
    answer: "Sim, realizamos ensaios externos em locações selecionadas. Este serviço tem um custo adicional que varia conforme a distância e as necessidades específicas do ensaio. Entre em contato para mais informações."
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
  title: 'Ensaios Fotográficos - Fotógrafa Lillia Tavares em Mogi das Cruzes',
  meta: [
    {
      name: 'description',
      content: 'Ensaios fotográficos profissionais em Mogi das Cruzes. Natal em família, corporativo, sensual/intimista e cobertura de espetáculos. Agende seu ensaio personalizado.'
    },
    {
      name: 'keywords',
      content: 'ensaio fotográfico, fotografia, ensaio família, ensaio corporativo, ensaio sensual, fotografia espetáculos, Mogi das Cruzes'
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

/* Categories Section */
.categories-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.category-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.category-image {
  height: 250px;
  overflow: hidden;
}

.category-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
  transform: scale(1.1);
}

.category-content {
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.category-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.category-features {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  flex: 1;
}

.feature-item {
  display: flex;
  align-items: center;
  background-color: #f9f7f4;
  padding: 8px 15px;
  border-radius: 20px;
}

.feature-icon {
  margin-right: 8px;
  font-size: 1.1rem;
}

.feature-text {
  font-size: 0.9rem;
  color: #666;
}

.category-link {
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

.category-link:hover {
  background-color: #8a6642;
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
  text-decoration: none;
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

.featured-category {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.featured-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #333;
}

.featured-date {
  font-size: 0.9rem;
  color: #999;
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

/* FAQ Section */
.faq-section {
  padding: 60px 0;
  background-color: #f9f7f4;
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
  .categories-grid {
    grid-template-columns: 1fr;
  }
  
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .featured-grid {
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
