<!-- pages/parcerias.vue - Página de Parcerias e Fornecedores -->
<template>
  <div class="parcerias-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Parcerias e Fornecedores</h1>
        <p class="hero-subtitle">Conheça os profissionais e empresas que trabalham conosco</p>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-section">
      <div class="intro-content">
        <h2 class="intro-title">Nossos Parceiros</h2>
        <p class="intro-text">
          Trabalhamos com uma rede selecionada de profissionais e empresas que compartilham nossos valores e padrões de qualidade.
          Juntos, oferecemos uma experiência completa e integrada para nossos clientes.
        </p>
        <p class="intro-text">
          Nossos parceiros recebem benefícios exclusivos e indicações personalizadas, criando uma relação de confiança e crescimento mútuo.
        </p>
      </div>
    </section>

    <!-- Categorias de Parceiros -->
    <section class="categories-section">
      <div class="categories-container">
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'all' }"
          @click="setCategory('all')"
        >
          Todos
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'beleza' }"
          @click="setCategory('beleza')"
        >
          Beleza
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'moda' }"
          @click="setCategory('moda')"
        >
          Moda
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'decoracao' }"
          @click="setCategory('decoracao')"
        >
          Decoração
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'locacoes' }"
          @click="setCategory('locacoes')"
        >
          Locações
        </button>
      </div>
    </section>

    <!-- Lista de Parceiros -->
    <section class="partners-section">
      <div class="partners-grid">
        <div 
          v-for="(partner, index) in filteredPartners" 
          :key="index"
          class="partner-card"
        >
          <div class="partner-logo">
            <img :src="partner.logo" :alt="partner.name" />
          </div>
          <div class="partner-content">
            <h3 class="partner-name">{{ partner.name }}</h3>
            <p class="partner-category">{{ partner.category }}</p>
            <p class="partner-description">
              {{ partner.description }}
            </p>
            <div class="partner-details">
              <div class="detail-item">
                <span class="detail-icon">📍</span>
                <span class="detail-text">{{ partner.location }}</span>
              </div>
              <div class="detail-item">
                <span class="detail-icon">📱</span>
                <span class="detail-text">{{ partner.contact }}</span>
              </div>
            </div>
            <div class="partner-benefits">
              <h4 class="benefits-title">Benefícios para clientes:</h4>
              <ul class="benefits-list">
                <li v-for="(benefit, i) in partner.benefits" :key="i">
                  {{ benefit }}
                </li>
              </ul>
            </div>
            <div class="partner-actions">
              <a :href="partner.website" target="_blank" rel="noopener noreferrer" class="partner-link">
                Visitar Site
              </a>
              <a :href="partner.instagram" target="_blank" rel="noopener noreferrer" class="partner-social">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos de Parceiros -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Depoimentos de Parceiros</h2>
        <p class="section-subtitle">O que nossos parceiros dizem sobre trabalhar conosco</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "A parceria com a Lillia Tavares tem sido incrível para o nosso salão. Os clientes indicados sempre ficam satisfeitos e acabam se tornando clientes regulares. É uma relação de confiança e profissionalismo."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Ana Oliveira" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Ana Oliveira</h4>
              <p class="author-position">Proprietária, Beleza Express</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "Como loja de roupas, a parceria com uma fotógrafa e consultora de imagem nos trouxe uma nova perspectiva sobre nossos produtos. As indicações são sempre muito assertivas e os clientes valorizam essa integração."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Carlos Santos" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Carlos Santos</h4>
              <p class="author-position">Gerente, Moda & Estilo</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "Os arranjos florais que fornecemos para os ensaios da Lillia sempre recebem elogios e geram novos clientes para nossa floricultura. É uma parceria que valoriza a qualidade e a criatividade."
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Mariana Costa" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Mariana Costa</h4>
              <p class="author-position">Proprietária, Flores do Campo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Torne-se um Parceiro -->
    <section class="become-partner-section">
      <div class="section-header">
        <h2 class="section-title">Torne-se um Parceiro</h2>
        <p class="section-subtitle">Junte-se à nossa rede de parceiros e cresça conosco</p>
      </div>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">👥</div>
          <h3 class="benefit-title">Indicação de Clientes</h3>
          <p class="benefit-description">
            Receba indicações qualificadas de clientes que se encaixam no seu perfil de atendimento.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🌐</div>
          <h3 class="benefit-title">Visibilidade Online</h3>
          <p class="benefit-description">
            Presença na nossa página de parceiros e menções nas redes sociais.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">📸</div>
          <h3 class="benefit-title">Conteúdo Exclusivo</h3>
          <p class="benefit-description">
            Acesso a sessões fotográficas especiais para divulgação do seu negócio.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🤝</div>
          <h3 class="benefit-title">Networking</h3>
          <p class="benefit-description">
            Conexão com outros parceiros e oportunidades de colaboração.
          </p>
        </div>
      </div>
      
      <div class="partner-form-container">
        <h3 class="form-title">Preencha o formulário para se tornar um parceiro</h3>
        <form class="partner-form" @submit.prevent="submitPartnerForm">
          <div class="form-grid">
            <div class="form-group">
              <label for="name" class="form-label">Nome da empresa</label>
              <input 
                type="text" 
                id="name" 
                v-model="partnerForm.name" 
                class="form-input" 
                placeholder="Digite o nome da sua empresa"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="contact-name" class="form-label">Nome do responsável</label>
              <input 
                type="text" 
                id="contact-name" 
                v-model="partnerForm.contactName" 
                class="form-input" 
                placeholder="Digite o nome do responsável"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email" class="form-label">E-mail</label>
              <input 
                type="email" 
                id="email" 
                v-model="partnerForm.email" 
                class="form-input" 
                placeholder="Digite seu e-mail comercial"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="phone" class="form-label">Telefone</label>
              <input 
                type="tel" 
                id="phone" 
                v-model="partnerForm.phone" 
                class="form-input" 
                placeholder="Digite seu telefone com DDD"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="category" class="form-label">Categoria</label>
              <select 
                id="category" 
                v-model="partnerForm.category" 
                class="form-select"
                required
              >
                <option value="" disabled selected>Selecione a categoria</option>
                <option value="Beleza">Beleza</option>
                <option value="Moda">Moda</option>
                <option value="Decoração">Decoração</option>
                <option value="Locações">Locações</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="website" class="form-label">Website</label>
              <input 
                type="url" 
                id="website" 
                v-model="partnerForm.website" 
                class="form-input" 
                placeholder="Digite o endereço do seu site"
              />
            </div>
            
            <div class="form-group full-width">
              <label for="description" class="form-label">Descrição da empresa</label>
              <textarea 
                id="description" 
                v-model="partnerForm.description" 
                class="form-textarea" 
                placeholder="Descreva brevemente sua empresa e serviços"
                rows="4"
                required
              ></textarea>
            </div>
            
            <div class="form-group full-width">
              <label for="proposal" class="form-label">Proposta de parceria</label>
              <textarea 
                id="proposal" 
                v-model="partnerForm.proposal" 
                class="form-textarea" 
                placeholder="Descreva como podemos trabalhar juntos e quais benefícios você pode oferecer aos nossos clientes"
                rows="4"
                required
              ></textarea>
            </div>
            
            <div class="form-group full-width">
              <div class="form-checkbox">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  v-model="partnerForm.privacy" 
                  required
                />
                <label for="privacy">
                  Concordo com a <NuxtLink to="/politica-privacidade" class="privacy-link">Política de Privacidade</NuxtLink>
                </label>
              </div>
            </div>
          </div>
          
          <div class="form-submit">
            <button type="submit" class="form-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Enviando...' : 'Enviar Proposta' }}
            </button>
          </div>
        </form>
      </div>
    </section>

    <!-- FAQ Específico -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre nosso programa de parcerias</p>
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

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Vamos crescer juntos?</h2>
        <p class="cta-text">
          Entre em contato conosco e descubra como podemos estabelecer uma parceria de sucesso.
        </p>
        <div class="cta-buttons">
          <a href="#partner-form" class="cta-button primary">
            Tornar-se Parceiro
          </a>
          <NuxtLink to="/contato" class="cta-button secondary">
            Fale Conosco
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Estado para controle de categoria ativa
const activeCategory = ref('all');

// Estado para controle de perguntas ativas
const activeQuestion = ref(null);

// Estado para formulário de parceria
const partnerForm = ref({
  name: '',
  contactName: '',
  email: '',
  phone: '',
  category: '',
  website: '',
  description: '',
  proposal: '',
  privacy: false
});

const isSubmitting = ref(false);

// Dados dos parceiros
const partners = [
  {
    name: "Beleza Express",
    category: "Beleza",
    description: "Salão de beleza especializado em maquiagem e penteados para ensaios fotográficos e eventos.",
    location: "Centro, Mogi das Cruzes",
    contact: "(11) 99999-9999",
    logo: "/images/placeholder.jpg",
    benefits: [
      "10% de desconto em serviços para clientes indicados",
      "Pacote especial para ensaios fotográficos"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Moda & Estilo",
    category: "Moda",
    description: "Loja de roupas com peças selecionadas para diversos tipos de ensaios fotográficos.",
    location: "Shopping, Mogi das Cruzes",
    contact: "(11) 98888-8888",
    logo: "/images/placeholder.jpg",
    benefits: [
      "15% de desconto em compras para clientes indicados",
      "Aluguel de peças para ensaios temáticos"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Flores do Campo",
    category: "Decoração",
    description: "Floricultura especializada em arranjos para cenários fotográficos e eventos.",
    location: "Jardim Bela Vista, Mogi das Cruzes",
    contact: "(11) 97777-7777",
    logo: "/images/placeholder.jpg",
    benefits: [
      "Desconto de 12% em arranjos para ensaios",
      "Consultoria gratuita para escolha de flores"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Espaço Celebrar",
    category: "Locações",
    description: "Espaço para eventos com ambientes versáteis para ensaios fotográficos.",
    location: "Mogilar, Mogi das Cruzes",
    contact: "(11) 96666-6666",
    logo: "/images/placeholder.jpg",
    benefits: [
      "20% de desconto no aluguel para ensaios",
      "Horários exclusivos para fotografia"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Lys Clothing",
    category: "Moda",
    description: "Marca de roupas femininas com peças exclusivas para ensaios sensuais e intimistas.",
    location: "Online",
    contact: "(11) 95555-5555",
    logo: "/images/placeholder.jpg",
    benefits: [
      "Cupom de 15% para clientes indicados",
      "Peças exclusivas para ensaios fotográficos"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Cenário Perfeito",
    category: "Decoração",
    description: "Empresa especializada em cenografia e decoração para ensaios temáticos.",
    location: "Brás Cubas, Mogi das Cruzes",
    contact: "(11) 94444-4444",
    logo: "/images/placeholder.jpg",
    benefits: [
      "Desconto de 10% em decoração temática",
      "Montagem gratuita para ensaios no estúdio"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Chácara Vista Verde",
    category: "Locações",
    description: "Espaço com área verde, lago e estruturas rústicas para ensaios externos.",
    location: "Taiaçupeba, Mogi das Cruzes",
    contact: "(11) 93333-3333",
    logo: "/images/placeholder.jpg",
    benefits: [
      "Desconto de 25% para ensaios em dias de semana",
      "Acesso exclusivo a áreas reservadas"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  },
  {
    name: "Brilho & Glamour",
    category: "Beleza",
    description: "Estúdio de maquiagem especializado em produções para ensaios fotográficos.",
    location: "Vila Oliveira, Mogi das Cruzes",
    contact: "(11) 92222-2222",
    logo: "/images/placeholder.jpg",
    benefits: [
      "Desconto de 15% em maquiagem para ensaios",
      "Teste de maquiagem gratuito"
    ],
    website: "https://exemplo.com",
    instagram: "https://instagram.com"
  }
];

// Dados do FAQ
const faqItems = [
  {
    question: "Como funciona o programa de parcerias?",
    answer: "Nosso programa de parcerias é baseado em indicações mútuas e benefícios compartilhados. Trabalhamos com empresas e profissionais que complementam nossos serviços, criando uma rede de atendimento integrado para nossos clientes."
  },
  {
    question: "Quais são os critérios para se tornar um parceiro?",
    answer: "Buscamos parceiros que compartilhem nossos valores de qualidade, profissionalismo e atendimento personalizado. Avaliamos a reputação da empresa, qualidade dos serviços/produtos, e a complementaridade com nosso negócio."
  },
  {
    question: "Há custos para participar do programa de parcerias?",
    answer: "Não há custos financeiros para participar do programa. Nossa parceria é baseada em indicações mútuas e benefícios compartilhados. Esperamos apenas que os parceiros ofereçam algum tipo de benefício exclusivo para nossos clientes."
  },
  {
    question: "Como são feitas as indicações de clientes?",
    answer: "As indicações são feitas de forma personalizada, considerando as necessidades específicas de cada cliente. Indicamos apenas parceiros que realmente podem agregar valor à experiência do cliente, mantendo a confiança e credibilidade da nossa marca."
  },
  {
    question: "Qual o prazo para análise de novas propostas de parceria?",
    answer: "Analisamos todas as propostas em até 15 dias úteis. Após este período, entramos em contato para agendar uma reunião de alinhamento ou fornecer um feedback sobre a proposta."
  }
];

// Computed para filtrar parceiros por categoria
const filteredPartners = computed(() => {
  if (activeCategory.value === 'all') {
    return partners;
  } else {
    return partners.filter(partner => partner.category.toLowerCase() === activeCategory.value);
  }
});

// Função para definir categoria ativa
const setCategory = (category) => {
  activeCategory.value = category;
};

// Função para alternar perguntas do FAQ
const toggleQuestion = (index) => {
  if (activeQuestion === index) {
    activeQuestion.value = null;
  } else {
    activeQuestion.value = index;
  }
};

// Função para enviar formulário de parceria
const submitPartnerForm = () => {
  isSubmitting.value = true;
  
  // Simulação de envio de formulário
  setTimeout(() => {
    alert('Sua proposta de parceria foi enviada com sucesso! Entraremos em contato em breve.');
    
    // Resetar formulário
    partnerForm.value = {
      name: '',
      contactName: '',
      email: '',
      phone: '',
      category: '',
      website: '',
      description: '',
      proposal: '',
      privacy: false
    };
    
    isSubmitting.value = false;
  }, 2000);
};

// Meta tags para SEO
useHead({
  title: 'Parcerias e Fornecedores | Fotógrafa Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Conheça nossos parceiros e fornecedores que oferecem serviços complementares e benefícios exclusivos. Saiba como se tornar um parceiro e crescer conosco.'
    },
    {
      name: 'keywords',
      content: 'parcerias, fornecedores, programa de parcerias, maquiagem para ensaio, locação para ensaio fotográfico, decoração para ensaio'
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

/* Categories Section */
.categories-section {
  margin-bottom: 40px;
}

.categories-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
}

.category-item {
  padding: 10px 20px;
  border-radius: 30px;
  background-color: #f9f7f4;
  color: #666;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}

.category-item:hover {
  background-color: #f0e6d9;
  color: #a67c52;
}

.category-item.active {
  background-color: #a67c52;
  color: white;
}

/* Partners Section */
.partners-section {
  padding: 0 0 60px;
  margin-bottom: 60px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.partner-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 100%;
}

.partner-logo {
  width: 200px;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f7f4;
}

.partner-logo img {
  width: 100%;
  height: auto;
  object-fit: contain;
  border-radius: 5px;
}

.partner-content {
  flex: 1;
  padding: 30px;
}

.partner-name {
  font-size: 1.5rem;
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
  margin-bottom: 20px;
  line-height: 1.6;
}

.partner-details {
  margin-bottom: 20px;
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

.partner-benefits {
  margin-bottom: 20px;
}

.benefits-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #333;
}

.benefits-list {
  padding-left: 20px;
  color: #666;
}

.benefits-list li {
  margin-bottom: 5px;
}

.partner-actions {
  display: flex;
  gap: 15px;
}

.partner-link,
.partner-social {
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.partner-link {
  background-color: #a67c52;
  color: white;
}

.partner-link:hover {
  background-color: #8a6642;
}

.partner-social {
  background-color: transparent;
  color: #a67c52;
  border: 1px solid #a67c52;
}

.partner-social:hover {
  background-color: rgba(166, 124, 82, 0.1);
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

.author-position {
  color: #999;
  font-size: 0.9rem;
}

/* Become Partner Section */
.become-partner-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 60px;
}

.benefit-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
  height: 100%;
}

.benefit-card:hover {
  transform: translateY(-10px);
}

.benefit-icon {
  font-size: 3rem;
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

.partner-form-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-title {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.form-grid {
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

.form-submit {
  margin-top: 30px;
  text-align: center;
}

.form-button {
  background-color: #a67c52;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #8a6642;
}

.form-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .partners-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .partner-card {
    flex-direction: column;
  }
  
  .partner-logo {
    width: 100%;
    height: 200px;
  }
  
  .testimonials-grid,
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-group.full-width {
    grid-column: span 1;
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
  
  .categories-container {
    overflow-x: auto;
    padding-bottom: 10px;
    justify-content: flex-start;
  }
}
</style>
