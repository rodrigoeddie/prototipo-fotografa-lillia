<!-- pages/contato/index.vue - Página principal de contato -->
<template>
  <div class="contato-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Contato</h1>
        <p class="hero-subtitle">Entre em contato conosco para agendar seu ensaio ou tirar dúvidas</p>
      </div>
    </section>

    <!-- Opções de Contato -->
    <section class="options-section">
      <div class="options-grid">
        <NuxtLink to="/contato/agendar" class="option-card">
          <div class="option-icon">📸</div>
          <h3 class="option-title">Agendar Ensaio</h3>
          <p class="option-description">
            Agende seu ensaio fotográfico e garanta sua data na nossa agenda.
          </p>
          <span class="option-link">Agendar agora</span>
        </NuxtLink>
        
        <NuxtLink to="/contato/aluguel" class="option-card">
          <div class="option-icon">🏠</div>
          <h3 class="option-title">Alugar Estúdio</h3>
          <p class="option-description">
            Solicite informações e reserve o estúdio para sua produção.
          </p>
          <span class="option-link">Solicitar orçamento</span>
        </NuxtLink>
        
        <NuxtLink to="/contato/consultoria" class="option-card">
          <div class="option-icon">👗</div>
          <h3 class="option-title">Consultoria de Imagem</h3>
          <p class="option-description">
            Agende sua consultoria de imagem e transforme seu visual.
          </p>
          <span class="option-link">Agendar agora</span>
        </NuxtLink>
        
        <NuxtLink to="/contato/duvidas" class="option-card">
          <div class="option-icon">❓</div>
          <h3 class="option-title">Dúvidas</h3>
          <p class="option-description">
            Tire suas dúvidas sobre nossos serviços e pacotes.
          </p>
          <span class="option-link">Enviar mensagem</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Formulário de Contato -->
    <section class="form-section">
      <div class="section-header">
        <h2 class="section-title">Envie uma Mensagem</h2>
        <p class="section-subtitle">Preencha o formulário abaixo e entraremos em contato o mais breve possível</p>
      </div>
      
      <div class="form-container">
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="form-label">Nome completo</label>
            <input 
              type="text" 
              id="name" 
              v-model="formData.name" 
              class="form-input" 
              placeholder="Digite seu nome completo"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="email" class="form-label">E-mail</label>
            <input 
              type="email" 
              id="email" 
              v-model="formData.email" 
              class="form-input" 
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          
          <div class="form-group">
            <label for="phone" class="form-label">Telefone</label>
            <input 
              type="tel" 
              id="phone" 
              v-model="formData.phone" 
              class="form-input" 
              placeholder="Digite seu telefone com DDD"
            />
          </div>
          
          <div class="form-group">
            <label for="subject" class="form-label">Assunto</label>
            <select 
              id="subject" 
              v-model="formData.subject" 
              class="form-select"
              required
            >
              <option value="" disabled selected>Selecione o assunto</option>
              <option value="ensaio">Ensaio Fotográfico</option>
              <option value="consultoria">Consultoria de Imagem</option>
              <option value="aluguel">Aluguel de Estúdio</option>
              <option value="duvida">Dúvidas</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          
          <div class="form-group full-width">
            <label for="message" class="form-label">Mensagem</label>
            <textarea 
              id="message" 
              v-model="formData.message" 
              class="form-textarea" 
              placeholder="Digite sua mensagem"
              rows="5"
              required
            ></textarea>
          </div>
          
          <div class="form-group full-width">
            <div class="form-checkbox">
              <input 
                type="checkbox" 
                id="privacy" 
                v-model="formData.privacy" 
                required
              />
              <label for="privacy">
                Concordo com a <NuxtLink to="/politica-privacidade" class="privacy-link">Política de Privacidade</NuxtLink>
              </label>
            </div>
          </div>
          
          <div class="form-group full-width">
            <button type="submit" class="form-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- Informações de Contato -->
    <section class="info-section">
      <div class="info-grid">
        <div class="info-map">
          <img src="/images/placeholder.jpg" alt="Mapa de localização do estúdio" />
        </div>
        <div class="info-content">
          <h2 class="info-title">Informações de Contato</h2>
          
          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-text">
              <h3 class="item-title">Endereço</h3>
              <p class="item-description">
                Rua Exemplo, 123 - Centro<br>
                Mogi das Cruzes - SP<br>
                CEP: 08700-000
              </p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-text">
              <h3 class="item-title">Telefone</h3>
              <p class="item-description">
                <a href="tel:+551199999999" class="contact-link">(11) 99999-9999</a>
              </p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div class="info-text">
              <h3 class="item-title">E-mail</h3>
              <p class="item-description">
                <a href="mailto:contato@fotografalilliatavares.com.br" class="contact-link">contato@fotografalilliatavares.com.br</a>
              </p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">🕒</div>
            <div class="info-text">
              <h3 class="item-title">Horário de Atendimento</h3>
              <p class="item-description">
                Segunda a Sexta: 9h às 18h<br>
                Sábado: 9h às 14h<br>
                Domingo: Fechado
              </p>
            </div>
          </div>
          
          <div class="info-social">
            <h3 class="social-title">Redes Sociais</h3>
            <div class="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <span class="social-icon">📷</span>
                <span class="social-name">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <span class="social-icon">👍</span>
                <span class="social-name">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <span class="social-icon">▶️</span>
                <span class="social-name">YouTube</span>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-link">
                <span class="social-icon">📌</span>
                <span class="social-name">Pinterest</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre nossos serviços</p>
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
// Estado para formulário
const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false
});

const isSubmitting = ref(false);

// Função para enviar formulário
const submitForm = () => {
  isSubmitting.value = true;
  
  // Simulação de envio de formulário
  setTimeout(() => {
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    formData.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacy: false
    };
    isSubmitting.value = false;
  }, 2000);
};

// Estado para controle do FAQ
const activeQuestion = ref(null);

// Dados do FAQ
const faqItems = [
  {
    question: "Quanto tempo de antecedência devo agendar meu ensaio?",
    answer: "Recomendamos agendar com pelo menos 2 semanas de antecedência para garantir disponibilidade na data desejada. Para ensaios em datas especiais ou campanhas temáticas, o ideal é agendar com 1 mês de antecedência."
  },
  {
    question: "Como funciona o pagamento dos serviços?",
    answer: "Para confirmar o agendamento, é necessário o pagamento de 50% do valor como sinal. O restante pode ser pago no dia do ensaio ou conforme acordado no contrato. Aceitamos PIX, transferência bancária e cartões de crédito/débito."
  },
  {
    question: "Qual o prazo para entrega das fotos?",
    answer: "O prazo de entrega é de até 15 dias úteis após a seleção das fotos. Para ensaios de espetáculos ou eventos, o prazo pode ser de até 20 dias úteis devido ao volume maior de imagens."
  },
  {
    question: "É possível reagendar meu ensaio?",
    answer: "Sim, o reagendamento pode ser feito sem custo adicional com até 48 horas de antecedência, sujeito à disponibilidade de agenda. Reagendamentos com menos de 48 horas de antecedência estão sujeitos a uma taxa de 20% sobre o valor do serviço."
  },
  {
    question: "Vocês atendem em domicílio?",
    answer: "Sim, oferecemos serviço de fotografia em domicílio para alguns tipos de ensaio, mediante consulta de disponibilidade e valor adicional conforme a distância. Entre em contato para mais informações."
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
  title: 'Contato - Fotógrafa Lillia Tavares em Mogi das Cruzes',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato para agendar seu ensaio fotográfico, consultoria de imagem ou aluguel de estúdio em Mogi das Cruzes. Atendimento personalizado e rápido.'
    },
    {
      name: 'keywords',
      content: 'contato fotógrafa, agendar ensaio fotográfico, consultoria de imagem, aluguel estúdio, Mogi das Cruzes'
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

/* Options Section */
.options-section {
  padding: 0 0 60px;
  margin-bottom: 60px;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.option-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.option-card:hover {
  transform: translateY(-10px);
}

.option-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.option-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.option-description {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
  font-size: 0.95rem;
}

.option-link {
  color: #a67c52;
  font-weight: 600;
  position: relative;
  padding-bottom: 2px;
}

.option-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.option-card:hover .option-link::after {
  width: 100%;
}

/* Form Section */
.form-section {
  padding: 60px 0;
  margin-bottom: 60px;
  background-color: #f9f7f4;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-form {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.form-group {
  margin-bottom: 0;
}

.form-group.full-width {
  grid-column: span 2;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: #a67c52;
  outline: none;
}

.form-checkbox {
  display: flex;
  align-items: center;
}

.form-checkbox input {
  margin-right: 10px;
}

.privacy-link {
  color: #a67c52;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.privacy-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.privacy-link:hover::after {
  width: 100%;
}

.form-button {
  background-color: #a67c52;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
}

.form-button:hover {
  background-color: #8a6642;
}

.form-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Info Section */
.info-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.info-map {
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.info-map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  padding-bottom: 15px;
}

.info-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: #a67c52;
}

.info-item {
  display: flex;
  margin-bottom: 25px;
}

.info-icon {
  font-size: 1.8rem;
  margin-right: 20px;
}

.item-title {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #333;
}

.item-description {
  color: #666;
  line-height: 1.6;
}

.contact-link {
  color: #a67c52;
  text-decoration: none;
  position: relative;
  padding-bottom: 2px;
}

.contact-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #a67c52;
  transition: width 0.3s ease;
}

.contact-link:hover::after {
  width: 100%;
}

.social-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  color: #666;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #a67c52;
}

.social-icon {
  font-size: 1.2rem;
  margin-right: 5px;
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
  .options-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-form {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
  }
  
  .social-links {
    flex-wrap: wrap;
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
