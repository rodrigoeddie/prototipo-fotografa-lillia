<!-- pages/guias-educativos.vue - Página de Guias Educativos -->
<template>
  <div class="guias-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Guias Educativos</h1>
        <p class="hero-subtitle">Materiais gratuitos para download com dicas e informações exclusivas</p>
      </div>
    </section>

    <!-- Guias em Destaque -->
    <section class="featured-section">
      <div class="section-header">
        <h2 class="section-title">Guias em Destaque</h2>
        <p class="section-subtitle">Nossos materiais mais populares</p>
      </div>
      
      <div class="featured-grid">
        <div class="featured-guide">
          <div class="guide-image">
            <img src="/images/placeholder.jpg" alt="Guia de Coloração Pessoal" />
          </div>
          <div class="guide-content">
            <div class="guide-badge">Mais Popular</div>
            <h3 class="guide-title">Guia de Coloração Pessoal</h3>
            <p class="guide-description">
              Descubra as cores que mais combinam com você neste guia introdutório sobre coloração pessoal.
              Aprenda sobre as quatro estações e como identificar a sua paleta ideal.
            </p>
            <div class="guide-details">
              <div class="detail-item">
                <span class="detail-icon">📄</span>
                <span class="detail-text">25 páginas</span>
              </div>
              <div class="detail-item">
                <span class="detail-icon">⬇️</span>
                <span class="detail-text">1.250 downloads</span>
              </div>
            </div>
            <div class="guide-form">
              <input type="email" placeholder="Seu melhor e-mail" class="guide-input" />
              <button class="guide-button">Baixar Grátis</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categorias de Guias -->
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
          :class="{ 'active': activeCategory === 'fotografia' }"
          @click="setCategory('fotografia')"
        >
          Fotografia
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'consultoria' }"
          @click="setCategory('consultoria')"
        >
          Consultoria
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'ensaios' }"
          @click="setCategory('ensaios')"
        >
          Ensaios
        </button>
      </div>
    </section>

    <!-- Lista de Guias -->
    <section class="guides-section">
      <div class="guides-grid">
        <div 
          v-for="(guide, index) in filteredGuides" 
          :key="index"
          class="guide-card"
        >
          <div class="guide-image">
            <img :src="guide.image" :alt="guide.title" />
          </div>
          <div class="guide-content">
            <span class="guide-category">{{ guide.category }}</span>
            <h3 class="guide-title">{{ guide.title }}</h3>
            <p class="guide-description">
              {{ guide.description }}
            </p>
            <div class="guide-details">
              <div class="detail-item">
                <span class="detail-icon">📄</span>
                <span class="detail-text">{{ guide.pages }} páginas</span>
              </div>
              <div class="detail-item">
                <span class="detail-icon">⬇️</span>
                <span class="detail-text">{{ guide.downloads }} downloads</span>
              </div>
            </div>
            <button class="guide-button" @click="openDownloadModal(guide)">
              Baixar Grátis
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Por que baixar nossos guias -->
    <section class="benefits-section">
      <div class="section-header">
        <h2 class="section-title">Por que baixar nossos guias?</h2>
        <p class="section-subtitle">Conteúdo exclusivo e de qualidade para você</p>
      </div>
      
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-icon">🔍</div>
          <h3 class="benefit-title">Conteúdo Especializado</h3>
          <p class="benefit-description">
            Todos os nossos guias são desenvolvidos por profissionais com anos de experiência no mercado.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">📱</div>
          <h3 class="benefit-title">Acesso em Qualquer Dispositivo</h3>
          <p class="benefit-description">
            Nossos guias são otimizados para leitura em smartphones, tablets e computadores.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🎯</div>
          <h3 class="benefit-title">Dicas Práticas</h3>
          <p class="benefit-description">
            Conteúdo direto ao ponto com dicas que você pode aplicar imediatamente.
          </p>
        </div>
        
        <div class="benefit-card">
          <div class="benefit-icon">🔄</div>
          <h3 class="benefit-title">Atualizações Constantes</h3>
          <p class="benefit-description">
            Nossos guias são atualizados regularmente com as últimas tendências e informações.
          </p>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">O que dizem sobre nossos guias</h2>
        <p class="section-subtitle">Depoimentos de quem já baixou e aplicou nosso conteúdo</p>
      </div>
      
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "O guia de coloração pessoal me ajudou muito a entender quais cores combinam comigo. Agora minhas compras são muito mais assertivas!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Mariana Silva" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Mariana Silva</h4>
              <p class="author-location">São Paulo, SP</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "As dicas do guia de poses para ensaio fotográfico fizeram toda a diferença nas minhas fotos. Recomendo muito!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Carlos Mendes" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Carlos Mendes</h4>
              <p class="author-location">Rio de Janeiro, RJ</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p class="testimonial-text">
              "O checklist para ensaio fotográfico me ajudou a não esquecer nada importante no dia. Foi fundamental para o sucesso do meu ensaio!"
            </p>
          </div>
          <div class="testimonial-author">
            <div class="author-image">
              <img src="/images/placeholder.jpg" alt="Ana Paula Costa" />
            </div>
            <div class="author-info">
              <h4 class="author-name">Ana Paula Costa</h4>
              <p class="author-location">Mogi das Cruzes, SP</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Específico -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre nossos guias educativos</p>
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
        <h2 class="cta-title">Pronto para aprender mais?</h2>
        <p class="cta-text">
          Baixe nossos guias gratuitos e transforme sua experiência com fotografia e consultoria de imagem.
        </p>
        <div class="cta-form">
          <input type="email" placeholder="Seu melhor e-mail" class="cta-input" />
          <button class="cta-button">
            Receber Todos os Guias
          </button>
        </div>
      </div>
    </section>

    <!-- Modal de Download (visível apenas quando ativado) -->
    <div class="download-modal" v-if="showModal">
      <div class="modal-content">
        <span class="modal-close" @click="closeModal">&times;</span>
        <h3 class="modal-title">Baixar {{ selectedGuide.title }}</h3>
        <p class="modal-description">
          Preencha o formulário abaixo para receber o guia no seu e-mail:
        </p>
        <form class="modal-form" @submit.prevent="submitDownload">
          <div class="form-group">
            <label for="name" class="form-label">Nome completo</label>
            <input 
              type="text" 
              id="name" 
              v-model="downloadForm.name" 
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
              v-model="downloadForm.email" 
              class="form-input" 
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          
          <div class="form-group">
            <div class="form-checkbox">
              <input 
                type="checkbox" 
                id="newsletter" 
                v-model="downloadForm.newsletter" 
              />
              <label for="newsletter">
                Desejo receber novidades e conteúdos exclusivos por e-mail
              </label>
            </div>
          </div>
          
          <div class="form-group">
            <div class="form-checkbox">
              <input 
                type="checkbox" 
                id="privacy" 
                v-model="downloadForm.privacy" 
                required
              />
              <label for="privacy">
                Concordo com a <NuxtLink to="/politica-privacidade" class="privacy-link">Política de Privacidade</NuxtLink>
              </label>
            </div>
          </div>
          
          <button type="submit" class="modal-button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Baixar Agora' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Estado para controle de categoria ativa
const activeCategory = ref('all');

// Estado para controle de perguntas ativas
const activeQuestion = ref(null);

// Estado para modal de download
const showModal = ref(false);
const selectedGuide = ref({});
const isSubmitting = ref(false);

// Estado para formulário de download
const downloadForm = ref({
  name: '',
  email: '',
  newsletter: true,
  privacy: false
});

// Dados dos guias
const guides = [
  {
    title: "Guia de Coloração Pessoal",
    description: "Descubra as cores que mais combinam com você neste guia introdutório sobre coloração pessoal.",
    category: "Consultoria",
    image: "/images/placeholder.jpg",
    pages: 25,
    downloads: 1250
  },
  {
    title: "Checklist para Ensaio Fotográfico",
    description: "Lista completa com tudo o que você precisa preparar antes do seu ensaio fotográfico.",
    category: "Fotografia",
    image: "/images/placeholder.jpg",
    pages: 10,
    downloads: 980
  },
  {
    title: "Guia de Poses para Ensaio",
    description: "Aprenda poses naturais e favorecedoras para garantir fotos incríveis em seu ensaio.",
    category: "Ensaios",
    image: "/images/placeholder.jpg",
    pages: 30,
    downloads: 1120
  },
  {
    title: "Guia de Estilo Pessoal",
    description: "Descubra seu estilo pessoal e aprenda a expressar sua personalidade através das roupas.",
    category: "Consultoria",
    image: "/images/placeholder.jpg",
    pages: 35,
    downloads: 850
  },
  {
    title: "Como Preparar seu Guarda-roupa para um Ensaio",
    description: "Dicas para escolher as melhores peças e combinações para seu ensaio fotográfico.",
    category: "Ensaios",
    image: "/images/placeholder.jpg",
    pages: 15,
    downloads: 720
  },
  {
    title: "Iluminação para Fotos em Casa",
    description: "Aprenda técnicas simples para conseguir uma iluminação profissional em suas fotos caseiras.",
    category: "Fotografia",
    image: "/images/placeholder.jpg",
    pages: 20,
    downloads: 650
  }
];

// Dados do FAQ
const faqItems = [
  {
    question: "Como faço para baixar os guias?",
    answer: "Para baixar qualquer guia, basta clicar no botão 'Baixar Grátis', preencher o formulário com seu nome e e-mail, e o guia será enviado diretamente para sua caixa de entrada."
  },
  {
    question: "Os guias são realmente gratuitos?",
    answer: "Sim, todos os guias disponíveis nesta página são totalmente gratuitos. Oferecemos este conteúdo como uma forma de compartilhar conhecimento e ajudar nossos clientes e seguidores."
  },
  {
    question: "Em qual formato os guias são enviados?",
    answer: "Todos os nossos guias são enviados em formato PDF, que pode ser aberto em qualquer dispositivo (computador, tablet ou smartphone) com um leitor de PDF instalado."
  },
  {
    question: "Posso compartilhar os guias com outras pessoas?",
    answer: "Nossos guias são para uso pessoal. Se você conhece alguém que se beneficiaria do conteúdo, por favor, compartilhe o link da nossa página para que essa pessoa possa baixar diretamente e receber atualizações futuras."
  },
  {
    question: "Com que frequência vocês lançam novos guias?",
    answer: "Lançamos novos guias aproximadamente a cada dois meses. Para ser notificado sobre novos lançamentos, certifique-se de marcar a opção para receber nossa newsletter ao baixar qualquer guia."
  }
];

// Computed para filtrar guias por categoria
const filteredGuides = computed(() => {
  if (activeCategory.value === 'all') {
    return guides;
  } else {
    return guides.filter(guide => guide.category.toLowerCase() === activeCategory.value);
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

// Função para abrir modal de download
const openDownloadModal = (guide) => {
  selectedGuide.value = guide;
  showModal.value = true;
};

// Função para fechar modal
const closeModal = () => {
  showModal.value = false;
};

// Função para enviar formulário de download
const submitDownload = () => {
  isSubmitting.value = true;
  
  // Simulação de envio de formulário
  setTimeout(() => {
    alert(`O guia "${selectedGuide.value.title}" foi enviado para ${downloadForm.value.email}. Verifique sua caixa de entrada!`);
    
    // Resetar formulário
    downloadForm.value = {
      name: '',
      email: '',
      newsletter: true,
      privacy: false
    };
    
    isSubmitting.value = false;
    showModal.value = false;
  }, 2000);
};

// Meta tags para SEO
useHead({
  title: 'Guias Educativos Gratuitos - Fotografia e Consultoria de Imagem | Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Baixe guias educativos gratuitos sobre fotografia, consultoria de imagem, coloração pessoal e preparação para ensaios fotográficos. Conteúdo exclusivo e de qualidade.'
    },
    {
      name: 'keywords',
      content: 'guias gratuitos, e-books fotografia, coloração pessoal, guia de poses, checklist ensaio fotográfico, consultoria de imagem'
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

/* Featured Section */
.featured-section {
  padding: 0 0 60px;
  margin-bottom: 60px;
}

.featured-grid {
  max-width: 1200px;
  margin: 0 auto;
}

.featured-guide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.guide-image {
  height: 100%;
  overflow: hidden;
}

.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-content {
  padding: 40px;
  position: relative;
}

.guide-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #e74c3c;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.guide-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.guide-description {
  color: #666;
  margin-bottom: 25px;
  line-height: 1.6;
  font-size: 1.1rem;
}

.guide-details {
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

.guide-form {
  display: flex;
}

.guide-input {
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
}

.guide-button {
  background-color: #a67c52;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 0 5px 5px 0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.guide-button:hover {
  background-color: #8a6642;
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

/* Guides Section */
.guides-section {
  padding: 0 0 60px;
  margin-bottom: 60px;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.guide-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: transform 0.3s ease;
}

.guide-card:hover {
  transform: translateY(-10px);
}

.guide-card .guide-image {
  height: 200px;
}

.guide-card .guide-content {
  padding: 25px;
}

.guide-category {
  display: inline-block;
  background-color: #f0e6d9;
  color: #a67c52;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.guide-card .guide-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
}

.guide-card .guide-description {
  font-size: 0.95rem;
  margin-bottom: 20px;
}

.guide-card .guide-button {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
}

/* Benefits Section */
.benefits-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
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

/* Testimonials Section */
.testimonials-section {
  padding: 60px 0;
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

.cta-form {
  display: flex;
  max-width: 500px;
  margin: 0 auto;
}

.cta-input {
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 5px 0 0 5px;
  font-size: 1rem;
}

.cta-button {
  background-color: #333;
  color: white;
  border: none;
  padding: 0 25px;
  border-radius: 0 5px 5px 0;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #222;
}

/* Download Modal */
.download-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #333;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
}

.modal-description {
  color: #666;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-input:focus {
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

.modal-button {
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

.modal-button:hover {
  background-color: #8a6642;
}

.modal-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Responsive Styles */
@media (max-width: 1200px) {
  .benefits-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .guides-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .featured-guide {
    grid-template-columns: 1fr;
  }
  
  .featured-guide .guide-image {
    height: 300px;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .guides-grid,
  .benefits-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .guide-form,
  .cta-form {
    flex-direction: column;
  }
  
  .guide-input,
  .cta-input {
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .guide-button,
  .cta-button {
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
