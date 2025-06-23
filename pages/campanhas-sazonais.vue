<!-- pages/campanhas-sazonais.vue - Página de Campanhas Sazonais -->
<template>
  <div class="campanhas-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Campanhas Sazonais</h1>
        <p class="hero-subtitle">Ensaios temáticos e promoções especiais ao longo do ano</p>
      </div>
    </section>

    <!-- Campanha Atual -->
    <section class="current-campaign-section">
      <div class="campaign-container">
        <div class="campaign-content">
          <div class="campaign-badge">Campanha Atual</div>
          <h2 class="campaign-title">Dia dos Pais 2025</h2>
          <p class="campaign-description">
            Eternize momentos especiais com seu pai ou celebre a paternidade com um ensaio fotográfico exclusivo.
            Pacotes especiais com valores promocionais e opções para toda a família.
          </p>
          <div class="campaign-details">
            <div class="detail-item">
              <span class="detail-icon">📅</span>
              <span class="detail-text">Disponível até: 31 de julho de 2025</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">📍</span>
              <span class="detail-text">Local: Estúdio ou locação externa</span>
            </div>
            <div class="detail-item">
              <span class="detail-icon">💰</span>
              <span class="detail-text">A partir de R$ 350,00</span>
            </div>
          </div>
          <div class="countdown-container">
            <p class="countdown-title">Restam apenas:</p>
            <div class="countdown">
              <div class="countdown-item">
                <span class="countdown-number">15</span>
                <span class="countdown-label">Dias</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-number">08</span>
                <span class="countdown-label">Horas</span>
              </div>
              <div class="countdown-item">
                <span class="countdown-number">45</span>
                <span class="countdown-label">Minutos</span>
              </div>
            </div>
          </div>
          <div class="campaign-cta">
            <NuxtLink to="/contato/agendar" class="cta-button primary">
              Agendar Agora
            </NuxtLink>
            <NuxtLink to="/campanhas-sazonais/dia-dos-pais-2025" class="cta-button secondary">
              Ver Detalhes
            </NuxtLink>
          </div>
        </div>
        <div class="campaign-image">
          <img src="/images/placeholder.jpg" alt="Campanha Dia dos Pais 2025" />
        </div>
      </div>
    </section>

    <!-- Calendário de Campanhas -->
    <section class="calendar-section">
      <div class="section-header">
        <h2 class="section-title">Calendário de Campanhas 2025</h2>
        <p class="section-subtitle">Planeje-se com antecedência e garanta sua vaga nas campanhas especiais</p>
      </div>
      
      <div class="calendar-container">
        <div class="calendar-timeline">
          <div class="timeline-item past">
            <div class="timeline-date">
              <span class="month">FEV</span>
              <span class="day">01-14</span>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Dia dos Namorados</h3>
              <p class="timeline-description">
                Ensaios para casais celebrarem seu amor.
              </p>
              <span class="timeline-status">Encerrada</span>
            </div>
          </div>
          
          <div class="timeline-item past">
            <div class="timeline-date">
              <span class="month">ABR</span>
              <span class="day">01-30</span>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Dia das Mães</h3>
              <p class="timeline-description">
                Celebração da maternidade com ensaios especiais.
              </p>
              <span class="timeline-status">Encerrada</span>
            </div>
          </div>
          
          <div class="timeline-item current">
            <div class="timeline-date">
              <span class="month">JUL</span>
              <span class="day">01-31</span>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Dia dos Pais</h3>
              <p class="timeline-description">
                Ensaios para celebrar a paternidade.
              </p>
              <span class="timeline-status">Em andamento</span>
              <NuxtLink to="/campanhas-sazonais/dia-dos-pais-2025" class="timeline-link">
                Ver detalhes
              </NuxtLink>
            </div>
          </div>
          
          <div class="timeline-item upcoming">
            <div class="timeline-date">
              <span class="month">SET</span>
              <span class="day">01-30</span>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Primavera</h3>
              <p class="timeline-description">
                Ensaios com temática floral e cores vibrantes.
              </p>
              <span class="timeline-status">Em breve</span>
              <button class="timeline-button">
                Pré-agendar
              </button>
            </div>
          </div>
          
          <div class="timeline-item upcoming">
            <div class="timeline-date">
              <span class="month">OUT</span>
              <span class="day">15-31</span>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Halloween</h3>
              <p class="timeline-description">
                Ensaios temáticos com cenários especiais.
              </p>
              <span class="timeline-status">Em breve</span>
              <button class="timeline-button">
                Pré-agendar
              </button>
            </div>
          </div>
          
          <div class="timeline-item upcoming">
            <div class="timeline-date">
              <span class="month">NOV</span>
              <span class="day">01-30</span>
            </div>
            <div class="timeline-content">
              <h3 class="timeline-title">Natal 2025</h3>
              <p class="timeline-description">
                Ensaios com cenários natalinos e decoração especial.
              </p>
              <span class="timeline-status">Em breve</span>
              <button class="timeline-button">
                Pré-agendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Campanhas Anteriores -->
    <section class="past-campaigns-section">
      <div class="section-header">
        <h2 class="section-title">Campanhas Anteriores</h2>
        <p class="section-subtitle">Confira os resultados de nossas campanhas passadas</p>
      </div>
      
      <div class="campaigns-grid">
        <div class="campaign-card">
          <div class="campaign-image">
            <img src="/images/placeholder.jpg" alt="Dia das Mães 2025" />
          </div>
          <div class="campaign-content">
            <h3 class="campaign-name">Dia das Mães 2025</h3>
            <p class="campaign-period">Abril 2025</p>
            <p class="campaign-description">
              Ensaios celebrando o amor entre mães e filhos, com cenários delicados e iluminação suave.
            </p>
            <NuxtLink to="/ensaio-fotografico/dia-das-maes-2025" class="campaign-link">
              Ver galeria
            </NuxtLink>
          </div>
        </div>
        
        <div class="campaign-card">
          <div class="campaign-image">
            <img src="/images/placeholder.jpg" alt="Dia dos Namorados 2025" />
          </div>
          <div class="campaign-content">
            <h3 class="campaign-name">Dia dos Namorados 2025</h3>
            <p class="campaign-period">Fevereiro 2025</p>
            <p class="campaign-description">
              Ensaios românticos para casais, com cenários elegantes e iluminação intimista.
            </p>
            <NuxtLink to="/ensaio-fotografico/dia-dos-namorados-2025" class="campaign-link">
              Ver galeria
            </NuxtLink>
          </div>
        </div>
        
        <div class="campaign-card">
          <div class="campaign-image">
            <img src="/images/placeholder.jpg" alt="Carnaval 2025" />
          </div>
          <div class="campaign-content">
            <h3 class="campaign-name">Carnaval 2025</h3>
            <p class="campaign-period">Janeiro 2025</p>
            <p class="campaign-description">
              Ensaios vibrantes e coloridos, celebrando a alegria e a energia do carnaval.
            </p>
            <NuxtLink to="/ensaio-fotografico/carnaval-2025" class="campaign-link">
              Ver galeria
            </NuxtLink>
          </div>
        </div>
        
        <div class="campaign-card">
          <div class="campaign-image">
            <img src="/images/placeholder.jpg" alt="Natal 2024" />
          </div>
          <div class="campaign-content">
            <h3 class="campaign-name">Natal 2024</h3>
            <p class="campaign-period">Novembro 2024</p>
            <p class="campaign-description">
              Ensaios natalinos com cenários decorados e clima festivo para famílias.
            </p>
            <NuxtLink to="/ensaio-fotografico/natal-2024" class="campaign-link">
              Ver galeria
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Específico -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre nossas campanhas sazonais</p>
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
    </section>

    <!-- Inscrição Newsletter -->
    <section class="newsletter-section">
      <div class="newsletter-container">
        <div class="newsletter-content">
          <h2 class="newsletter-title">Fique por dentro das próximas campanhas</h2>
          <p class="newsletter-text">
            Inscreva-se em nossa newsletter e receba em primeira mão informações sobre campanhas futuras e promoções exclusivas.
          </p>
        </div>
        <div class="newsletter-form">
          <input type="email" placeholder="Seu melhor e-mail" class="newsletter-input" />
          <button class="newsletter-button">Inscrever-se</button>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Garanta sua vaga na campanha atual</h2>
        <p class="cta-text">
          Não perca a oportunidade de participar da nossa campanha do Dia dos Pais 2025.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contato/agendar" class="cta-button primary">
            Agendar Agora
          </NuxtLink>
          <NuxtLink to="/campanhas-sazonais/dia-dos-pais-2025" class="cta-button secondary">
            Ver Detalhes
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
    question: "Como funciona o agendamento para campanhas sazonais?",
    answer: "O agendamento para campanhas sazonais é feito mediante disponibilidade de agenda. Recomendamos agendar com pelo menos 2 semanas de antecedência para garantir sua vaga. Para campanhas muito procuradas, como Natal, o ideal é agendar com 1 mês de antecedência."
  },
  {
    question: "Posso pré-agendar para campanhas futuras?",
    answer: "Sim, oferecemos a opção de pré-agendamento para campanhas futuras. Ao pré-agendar, você garante prioridade na escolha de datas e horários quando a campanha for oficialmente lançada, além de receber um desconto especial de 10%."
  },
  {
    question: "As campanhas sazonais têm preços diferentes dos ensaios regulares?",
    answer: "Sim, as campanhas sazonais geralmente têm valores promocionais e pacotes especiais. Cada campanha tem sua própria tabela de preços, que é divulgada com antecedência em nosso site e redes sociais."
  },
  {
    question: "O que está incluso nos pacotes de campanhas sazonais?",
    answer: "Os pacotes de campanhas sazonais geralmente incluem o ensaio fotográfico com duração específica, cenário temático exclusivo, seleção e tratamento de fotos, e um número determinado de fotos digitais e impressas. Os detalhes específicos variam conforme a campanha."
  },
  {
    question: "Posso personalizar o cenário da campanha sazonal?",
    answer: "As campanhas sazonais têm cenários pré-definidos para manter a temática. No entanto, é possível fazer pequenas personalizações, como incluir objetos pessoais ou adaptar cores conforme sua preferência. Converse com nossa equipe sobre suas necessidades específicas."
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
  title: 'Campanhas Sazonais - Ensaios Temáticos | Fotógrafa Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Campanhas sazonais e ensaios temáticos ao longo do ano. Dia dos Pais, Dia das Mães, Natal e outras datas comemorativas com cenários especiais e promoções exclusivas.'
    },
    {
      name: 'keywords',
      content: 'campanhas fotográficas, ensaios temáticos, Natal, Dia das Mães, Dia dos Pais, ensaio fotográfico temático, Mogi das Cruzes'
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

/* Current Campaign Section */
.current-campaign-section {
  padding: 0 0 60px;
  margin-bottom: 60px;
}

.campaign-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.campaign-content {
  padding: 40px;
}

.campaign-badge {
  display: inline-block;
  background-color: #e74c3c;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 20px;
}

.campaign-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.campaign-description {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
  font-size: 1.1rem;
}

.campaign-details {
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

.countdown-container {
  margin-bottom: 30px;
}

.countdown-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
  font-weight: 600;
}

.countdown {
  display: flex;
  gap: 15px;
}

.countdown-item {
  background-color: #f9f7f4;
  border-radius: 10px;
  padding: 15px;
  min-width: 80px;
  text-align: center;
}

.countdown-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 5px;
}

.countdown-label {
  color: #666;
  font-size: 0.9rem;
}

.campaign-cta {
  display: flex;
  gap: 15px;
}

.cta-button {
  display: inline-block;
  padding: 15px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button.primary {
  background-color: #a67c52;
  color: white;
}

.cta-button.primary:hover {
  background-color: #8a6642;
}

.cta-button.secondary {
  background-color: transparent;
  color: #a67c52;
  border: 2px solid #a67c52;
}

.cta-button.secondary:hover {
  background-color: rgba(166, 124, 82, 0.1);
}

.campaign-image {
  height: 100%;
  overflow: hidden;
}

.campaign-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Calendar Section */
.calendar-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.calendar-container {
  max-width: 800px;
  margin: 0 auto;
}

.calendar-timeline {
  position: relative;
}

.calendar-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 70px;
  width: 2px;
  background-color: #ddd;
}

.timeline-item {
  display: flex;
  margin-bottom: 30px;
  position: relative;
}

.timeline-date {
  width: 70px;
  text-align: center;
  padding-right: 30px;
  position: relative;
}

.timeline-date::after {
  content: '';
  position: absolute;
  top: 15px;
  right: -9px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 1;
}

.timeline-item.past .timeline-date::after {
  background-color: #ccc;
}

.timeline-item.current .timeline-date::after {
  background-color: #e74c3c;
}

.timeline-item.upcoming .timeline-date::after {
  background-color: #a67c52;
}

.month {
  display: block;
  font-weight: 700;
  color: #333;
}

.day {
  display: block;
  font-size: 0.9rem;
  color: #666;
}

.timeline-content {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex: 1;
}

.timeline-title {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #333;
}

.timeline-description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.timeline-status {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.timeline-item.past .timeline-status {
  background-color: #f0f0f0;
  color: #999;
}

.timeline-item.current .timeline-status {
  background-color: #fde9e7;
  color: #e74c3c;
}

.timeline-item.upcoming .timeline-status {
  background-color: #f0e6d9;
  color: #a67c52;
}

.timeline-link {
  display: inline-block;
  color: #e74c3c;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.timeline-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e74c3c;
  transition: width 0.3s ease;
}

.timeline-link:hover::after {
  width: 100%;
}

.timeline-button {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.timeline-button:hover {
  background-color: #8a6642;
}

/* Past Campaigns Section */
.past-campaigns-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.campaigns-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.campaign-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.campaign-card .campaign-image {
  height: 200px;
  overflow: hidden;
}

.campaign-card .campaign-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.campaign-card:hover .campaign-image img {
  transform: scale(1.1);
}

.campaign-card .campaign-content {
  padding: 20px;
}

.campaign-name {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #333;
}

.campaign-period {
  color: #a67c52;
  font-weight: 600;
  margin-bottom: 15px;
}

.campaign-card .campaign-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.campaign-link {
  display: inline-block;
  color: #a67c52;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.campaign-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.campaign-link:hover::after {
  width: 100%;
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
  max-height: 300px;
}

.answer-text {
  padding: 0 20px 20px;
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Newsletter Section */
.newsletter-section {
  padding: 60px 0;
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

.cta-section .cta-button.primary {
  background-color: white;
  color: #a67c52;
}

.cta-section .cta-button.primary:hover {
  background-color: #f5f5f5;
}

.cta-section .cta-button.secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.cta-section .cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .campaigns-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .campaign-container {
    grid-template-columns: 1fr;
  }
  
  .campaign-image {
    height: 300px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .campaigns-grid {
    grid-template-columns: 1fr;
  }
  
  .countdown {
    justify-content: center;
  }
  
  .campaign-cta {
    flex-direction: column;
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
  
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
