<!-- pages/sobre/index.vue - Página principal sobre -->
<template>
  <div class="sobre-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Sobre Lillia Tavares</h1>
        <p class="hero-subtitle">Fotógrafa e Consultora de Imagem em Mogi das Cruzes</p>
      </div>
    </section>

    <!-- Navegação por Abas -->
    <div class="tabs-navigation">
      <button 
        class="tab-button" 
        :class="{ 'active': activeTab === 'fotografa' }"
        @click="activeTab = 'fotografa'"
      >
        Fotógrafa
      </button>
      <button 
        class="tab-button" 
        :class="{ 'active': activeTab === 'consultora' }"
        @click="activeTab = 'consultora'"
      >
        Consultora de Imagem
      </button>
    </div>

    <!-- Conteúdo da Aba Fotógrafa -->
    <div v-if="activeTab === 'fotografa'" class="tab-content">
      <section class="about-section">
        <div class="about-grid">
          <div class="about-image">
            <img src="/images/placeholder.jpg" alt="Lillia Tavares Fotógrafa" />
          </div>
          <div class="about-content">
            <h2 class="about-title">Fotógrafa Especialista em Retratos Femininos</h2>
            <p class="about-text">
              Com mais de 10 anos de experiência em fotografia, me especializei em capturar a essência e beleza única de cada pessoa através das minhas lentes. Minha paixão pela fotografia começou ainda na adolescência e se transformou em profissão após me formar em Artes Visuais.
            </p>
            <p class="about-text">
              Acredito que cada ensaio fotográfico é uma oportunidade de contar uma história e revelar a beleza autêntica que existe em cada pessoa. Meu trabalho é guiado pela busca da naturalidade, conforto e valorização da individualidade de cada cliente.
            </p>
            <div class="about-stats">
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Anos de Experiência</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">1500+</span>
                <span class="stat-label">Ensaios Realizados</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">98%</span>
                <span class="stat-label">Clientes Satisfeitos</span>
              </div>
            </div>
            <NuxtLink to="/ensaios" class="about-cta">
              Ver Portfólio de Ensaios
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="services-section">
        <div class="section-header">
          <h2 class="section-title">Serviços de Fotografia</h2>
          <p class="section-subtitle">Conheça os tipos de ensaios fotográficos oferecidos</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Natal em Família" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Natal em Família</h3>
              <p class="service-description">
                Ensaios temáticos para celebrar o Natal com toda a família em um ambiente acolhedor e festivo.
              </p>
              <NuxtLink to="/ensaios/natal-familia" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Ensaio Corporativo" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Corporativo</h3>
              <p class="service-description">
                Fotos profissionais para perfil corporativo, LinkedIn e materiais institucionais.
              </p>
              <NuxtLink to="/ensaios/corporativo" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Ensaio Sensual/Intimista" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Sensual/Intimista</h3>
              <p class="service-description">
                Ensaios que celebram a autoestima e a beleza feminina em um ambiente seguro e respeitoso.
              </p>
              <NuxtLink to="/ensaios/sensual" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Espetáculos" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Espetáculos</h3>
              <p class="service-description">
                Cobertura fotográfica de espetáculos, shows e eventos culturais.
              </p>
              <NuxtLink to="/ensaios/espetaculos" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials-section">
        <div class="section-header">
          <h2 class="section-title">Depoimentos</h2>
          <p class="section-subtitle">O que dizem sobre meus ensaios fotográficos</p>
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
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p class="testimonial-text">
                "As fotos para meu perfil profissional ficaram impecáveis! A Lillia soube me orientar nas poses e expressões, deixando o resultado muito natural e profissional. Já recebi vários elogios no LinkedIn!"
              </p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img src="/images/placeholder.jpg" alt="Carlos Mendes" />
              </div>
              <div class="author-info">
                <h4 class="author-name">Carlos Mendes</h4>
                <p class="author-service">Ensaio Corporativo</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Conteúdo da Aba Consultora -->
    <div v-if="activeTab === 'consultora'" class="tab-content">
      <section class="about-section">
        <div class="about-grid">
          <div class="about-image">
            <img src="/images/placeholder.jpg" alt="Lillia Tavares Consultora de Imagem" />
          </div>
          <div class="about-content">
            <h2 class="about-title">Consultora de Imagem Especialista em Coloração Pessoal</h2>
            <p class="about-text">
              Além da fotografia, sou consultora de imagem certificada, especializada em análise de coloração pessoal. Minha formação em consultoria de imagem começou há 5 anos, quando percebi como as cores certas podem transformar completamente a aparência e a autoestima de uma pessoa.
            </p>
            <p class="about-text">
              Meu trabalho como consultora de imagem é ajudar pessoas a descobrirem as cores, estilos e combinações que melhor valorizam sua beleza natural, respeitando sua personalidade e estilo de vida. Acredito que quando nos vestimos de acordo com nossa essência, transmitimos mais confiança e autenticidade.
            </p>
            <div class="about-stats">
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
            <NuxtLink to="/consultoria" class="about-cta">
              Conhecer Serviços de Consultoria
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="services-section">
        <div class="section-header">
          <h2 class="section-title">Serviços de Consultoria</h2>
          <p class="section-subtitle">Conheça os serviços de consultoria de imagem oferecidos</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Coloração Pessoal" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Coloração Pessoal</h3>
              <p class="service-description">
                Descubra quais cores mais valorizam seu tom de pele, olhos e cabelos, potencializando sua beleza natural.
              </p>
              <NuxtLink to="/consultoria/coloracao-pessoal" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Análise de Estilo" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Análise de Estilo</h3>
              <p class="service-description">
                Identifique seu estilo pessoal e aprenda a expressar sua personalidade através das roupas.
              </p>
              <NuxtLink to="/consultoria/analise-estilo" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-image">
              <img src="/images/placeholder.jpg" alt="Consultoria de Guarda-roupa" />
            </div>
            <div class="service-content">
              <h3 class="service-title">Consultoria de Guarda-roupa</h3>
              <p class="service-description">
                Organize seu guarda-roupa de forma prática e funcional, criando looks versáteis com as peças que você já tem.
              </p>
              <NuxtLink to="/consultoria/guarda-roupa" class="service-link">Saiba mais</NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials-section">
        <div class="section-header">
          <h2 class="section-title">Depoimentos</h2>
          <p class="section-subtitle">O que dizem sobre minhas consultorias de imagem</p>
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
    </div>

    <!-- Equipe -->
    <section class="team-section">
      <div class="section-header">
        <h2 class="section-title">Nossa Equipe</h2>
        <p class="section-subtitle">Conheça os profissionais que fazem parte do estúdio</p>
      </div>
      
      <div class="team-grid">
        <div class="team-card">
          <div class="team-image">
            <img src="/images/placeholder.jpg" alt="Lillia Tavares" />
          </div>
          <div class="team-content">
            <h3 class="team-name">Lillia Tavares</h3>
            <p class="team-role">Fotógrafa e Consultora de Imagem</p>
            <p class="team-description">
              Fundadora do estúdio, especialista em retratos femininos e consultoria de imagem.
            </p>
          </div>
        </div>
        
        <div class="team-card">
          <div class="team-image">
            <img src="/images/placeholder.jpg" alt="Marina Santos" />
          </div>
          <div class="team-content">
            <h3 class="team-name">Marina Santos</h3>
            <p class="team-role">Assistente de Fotografia</p>
            <p class="team-description">
              Responsável pela assistência nos ensaios e produção de cenários.
            </p>
          </div>
        </div>
        
        <div class="team-card">
          <div class="team-image">
            <img src="/images/placeholder.jpg" alt="Ana Paula" />
          </div>
          <div class="team-content">
            <h3 class="team-name">Ana Paula</h3>
            <p class="team-role">Maquiadora Parceira</p>
            <p class="team-description">
              Especialista em maquiagem para ensaios fotográficos e eventos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Valores -->
    <section class="values-section">
      <div class="section-header">
        <h2 class="section-title">Nossos Valores</h2>
        <p class="section-subtitle">Princípios que guiam nosso trabalho</p>
      </div>
      
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">
            <span>❤️</span>
          </div>
          <h3 class="value-title">Empatia</h3>
          <p class="value-description">
            Compreendemos as necessidades e expectativas de cada cliente, criando um ambiente acolhedor e respeitoso.
          </p>
        </div>
        
        <div class="value-card">
          <div class="value-icon">
            <span>✨</span>
          </div>
          <h3 class="value-title">Qualidade</h3>
          <p class="value-description">
            Buscamos a excelência em cada detalhe, desde o atendimento até a entrega final do trabalho.
          </p>
        </div>
        
        <div class="value-card">
          <div class="value-icon">
            <span>🔍</span>
          </div>
          <h3 class="value-title">Autenticidade</h3>
          <p class="value-description">
            Valorizamos a essência única de cada pessoa, destacando sua beleza natural e personalidade.
          </p>
        </div>
        
        <div class="value-card">
          <div class="value-icon">
            <span>🌱</span>
          </div>
          <h3 class="value-title">Crescimento</h3>
          <p class="value-description">
            Estamos em constante aprendizado e evolução para oferecer sempre o melhor aos nossos clientes.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="cta-section">
      <div class="cta-content">
        <h2 class="cta-title">Vamos trabalhar juntos?</h2>
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
// Estado para controle das abas
const activeTab = ref('fotografa');

// Meta tags para SEO
useHead({
  title: 'Sobre Lillia Tavares - Fotógrafa e Consultora de Imagem em Mogi das Cruzes',
  meta: [
    {
      name: 'description',
      content: 'Conheça Lillia Tavares, fotógrafa especialista em retratos femininos e consultora de imagem em Mogi das Cruzes. Ensaios fotográficos e consultoria de coloração pessoal.'
    },
    {
      name: 'keywords',
      content: 'fotógrafa, consultora de imagem, coloração pessoal, ensaio fotográfico, Mogi das Cruzes'
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

/* Tabs Navigation */
.tabs-navigation {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.tab-button {
  padding: 15px 30px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #ddd;
  font-size: 1.2rem;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-button.active {
  color: #a67c52;
  border-bottom-color: #a67c52;
}

.tab-button:hover {
  color: #a67c52;
}

.tab-content {
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

/* About Section */
.about-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.about-image {
  height: 500px;
  overflow: hidden;
  border-radius: 10px;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-title {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
}

.about-text {
  color: #666;
  margin-bottom: 20px;
  line-height: 1.6;
}

.about-stats {
  display: flex;
  margin-bottom: 30px;
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

.about-cta {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.about-cta:hover {
  background-color: #8a6642;
}

/* Services Section */
.services-section {
  padding: 60px 0;
  margin-bottom: 60px;
  background-color: #f9f7f4;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

/* Team Section */
.team-section {
  padding: 60px 0;
  margin-bottom: 60px;
  background-color: #f9f7f4;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.team-card {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.team-image {
  height: 300px;
  overflow: hidden;
}

.team-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-content {
  padding: 25px;
}

.team-name {
  font-size: 1.3rem;
  margin-bottom: 5px;
  color: #333;
}

.team-role {
  color: #a67c52;
  font-weight: 600;
  margin-bottom: 15px;
}

.team-description {
  color: #666;
  line-height: 1.6;
}

/* Values Section */
.values-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.value-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.value-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.value-description {
  color: #666;
  line-height: 1.6;
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
  .about-grid {
    grid-template-columns: 1fr;
  }
  
  .testimonials-slider {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .about-stats {
    flex-direction: column;
  }
  
  .stat-item {
    border-right: none;
    border-bottom: 1px solid #ddd;
  }
  
  .stat-item:last-child {
    border-bottom: none;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
