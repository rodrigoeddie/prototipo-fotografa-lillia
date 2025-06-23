<!-- pages/investimento.vue - Página de investimento -->
<template>
  <div class="investimento-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Investimento</h1>
        <p class="hero-subtitle">Conheça os valores e pacotes dos nossos serviços</p>
      </div>
    </section>

    <!-- Introdução -->
    <section class="intro-section">
      <div class="intro-content">
        <h2 class="intro-title">Transparência e Qualidade</h2>
        <p class="intro-text">
          Acreditamos que a transparência é fundamental para estabelecer uma relação de confiança com nossos clientes. Por isso, disponibilizamos aqui os valores dos nossos principais serviços e pacotes.
        </p>
        <p class="intro-text">
          Todos os nossos serviços são realizados com equipamentos profissionais e atenção aos detalhes, garantindo resultados de alta qualidade que atendam às suas expectativas.
        </p>
      </div>
    </section>

    <!-- Pacotes de Ensaios -->
    <section class="packages-section">
      <div class="section-header">
        <h2 class="section-title">Pacotes de Ensaios Fotográficos</h2>
        <p class="section-subtitle">Escolha o pacote que melhor atende às suas necessidades</p>
      </div>
      
      <div class="packages-grid">
        <div class="package-card">
          <div class="package-header">
            <h3 class="package-title">Essencial</h3>
            <div class="package-price">
              <span class="price-value">R$ 350</span>
              <span class="price-period">pagamento único</span>
            </div>
          </div>
          <div class="package-content">
            <ul class="package-features">
              <li class="feature-included">Sessão de 1 hora</li>
              <li class="feature-included">15 fotos editadas</li>
              <li class="feature-included">1 troca de roupa</li>
              <li class="feature-included">Entrega digital</li>
              <li class="feature-excluded">Maquiagem profissional</li>
              <li class="feature-excluded">Impressões</li>
              <li class="feature-excluded">Álbum físico</li>
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
              <span class="price-value">R$ 550</span>
              <span class="price-period">pagamento único</span>
            </div>
          </div>
          <div class="package-content">
            <ul class="package-features">
              <li class="feature-included">Sessão de 2 horas</li>
              <li class="feature-included">25 fotos editadas</li>
              <li class="feature-included">2 trocas de roupa</li>
              <li class="feature-included">Entrega digital</li>
              <li class="feature-included">Maquiagem profissional</li>
              <li class="feature-included">5 impressões 15x21cm</li>
              <li class="feature-excluded">Álbum físico</li>
            </ul>
            <NuxtLink to="/contato/agendar" class="package-cta">
              Agendar Agora
            </NuxtLink>
          </div>
        </div>
        
        <div class="package-card">
          <div class="package-header">
            <h3 class="package-title">Realeza</h3>
            <div class="package-price">
              <span class="price-value">R$ 850</span>
              <span class="price-period">pagamento único</span>
            </div>
          </div>
          <div class="package-content">
            <ul class="package-features">
              <li class="feature-included">Sessão de 3 horas</li>
              <li class="feature-included">40 fotos editadas</li>
              <li class="feature-included">3 trocas de roupa</li>
              <li class="feature-included">Entrega digital</li>
              <li class="feature-included">Maquiagem profissional</li>
              <li class="feature-included">10 impressões 15x21cm</li>
              <li class="feature-included">Álbum físico 20x30cm</li>
            </ul>
            <NuxtLink to="/contato/agendar" class="package-cta">
              Agendar Agora
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <div class="packages-note">
        <p>* Todos os pacotes incluem orientação durante o ensaio e tratamento profissional das imagens.</p>
        <p>* Pagamento pode ser parcelado em até 3x sem juros.</p>
      </div>
    </section>

    <!-- Pacotes de Consultoria -->
    <section class="packages-section alt-bg">
      <div class="section-header">
        <h2 class="section-title">Pacotes de Consultoria de Imagem</h2>
        <p class="section-subtitle">Descubra as cores e estilos que valorizam sua beleza natural</p>
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
      </div>
    </section>

    <!-- Aluguel de Estúdio -->
    <section class="rental-section">
      <div class="section-header">
        <h2 class="section-title">Aluguel de Estúdio</h2>
        <p class="section-subtitle">Valores para uso do espaço e equipamentos</p>
      </div>
      
      <div class="rental-table-container">
        <table class="rental-table">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Duração</th>
              <th>Valor</th>
              <th>Inclui</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aluguel Básico</td>
              <td>2 horas</td>
              <td>R$ 200</td>
              <td>Espaço + Equipamentos básicos</td>
            </tr>
            <tr>
              <td>Aluguel Completo</td>
              <td>4 horas</td>
              <td>R$ 350</td>
              <td>Espaço + Todos os equipamentos</td>
            </tr>
            <tr>
              <td>Aluguel Dia Inteiro</td>
              <td>8 horas</td>
              <td>R$ 600</td>
              <td>Espaço + Todos os equipamentos</td>
            </tr>
            <tr>
              <td>Hora Adicional</td>
              <td>1 hora</td>
              <td>R$ 100</td>
              <td>Extensão do aluguel</td>
            </tr>
            <tr>
              <td>Assistente de Fotografia</td>
              <td>Por hora</td>
              <td>R$ 80</td>
              <td>Profissional para auxiliar</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="rental-note">
        <p>* O aluguel inclui o uso do espaço e dos equipamentos disponíveis no estúdio.</p>
        <p>* É necessário agendamento prévio e pagamento de 50% do valor como sinal.</p>
        <NuxtLink to="/contato/aluguel" class="rental-cta">
          Solicitar Orçamento
        </NuxtLink>
      </div>
    </section>

    <!-- Formas de Pagamento -->
    <section class="payment-section">
      <div class="section-header">
        <h2 class="section-title">Formas de Pagamento</h2>
        <p class="section-subtitle">Opções disponíveis para pagamento dos serviços</p>
      </div>
      
      <div class="payment-grid">
        <div class="payment-card">
          <div class="payment-icon">💳</div>
          <h3 class="payment-title">Cartão de Crédito</h3>
          <p class="payment-description">
            Aceitamos as principais bandeiras de cartão de crédito, com parcelamento em até 3x sem juros ou em até 10x com juros.
          </p>
        </div>
        
        <div class="payment-card">
          <div class="payment-icon">💸</div>
          <h3 class="payment-title">PIX</h3>
          <p class="payment-description">
            Pagamento instantâneo via PIX, com 5% de desconto para pagamento à vista.
          </p>
        </div>
        
        <div class="payment-card">
          <div class="payment-icon">🏦</div>
          <h3 class="payment-title">Transferência Bancária</h3>
          <p class="payment-description">
            Transferência para conta bancária, com 5% de desconto para pagamento à vista.
          </p>
        </div>
        
        <div class="payment-card">
          <div class="payment-icon">💰</div>
          <h3 class="payment-title">Dinheiro</h3>
          <p class="payment-description">
            Pagamento em dinheiro no dia do serviço, com 5% de desconto para pagamento à vista.
          </p>
        </div>
      </div>
    </section>

    <!-- Política de Cancelamento -->
    <section class="policy-section">
      <div class="section-header">
        <h2 class="section-title">Política de Cancelamento</h2>
        <p class="section-subtitle">Informações importantes sobre cancelamentos e reagendamentos</p>
      </div>
      
      <div class="policy-content">
        <div class="policy-item">
          <h3 class="policy-title">Cancelamento</h3>
          <p class="policy-text">
            Em caso de cancelamento com mais de 7 dias de antecedência, o valor do sinal será devolvido integralmente. Para cancelamentos com menos de 7 dias de antecedência, o valor do sinal não será reembolsado.
          </p>
        </div>
        
        <div class="policy-item">
          <h3 class="policy-title">Reagendamento</h3>
          <p class="policy-text">
            O reagendamento pode ser feito sem custo adicional com até 48 horas de antecedência, sujeito à disponibilidade de agenda. Reagendamentos com menos de 48 horas de antecedência estão sujeitos a uma taxa de 20% sobre o valor do serviço.
          </p>
        </div>
        
        <div class="policy-item">
          <h3 class="policy-title">Atrasos</h3>
          <p class="policy-text">
            Em caso de atraso por parte do cliente, o tempo de sessão será reduzido proporcionalmente, sem alteração no valor. Atrasos superiores a 30 minutos serão considerados como não comparecimento.
          </p>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="section-header">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <p class="section-subtitle">Tire suas dúvidas sobre valores e pagamentos</p>
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
        <h2 class="cta-title">Pronto para investir em você?</h2>
        <p class="cta-text">
          Agende seu serviço ou solicite um orçamento personalizado.
        </p>
        <div class="cta-buttons">
          <NuxtLink to="/contato/agendar" class="cta-button primary">
            Agendar Agora
          </NuxtLink>
          <NuxtLink to="/contato" class="cta-button secondary">
            Solicitar Orçamento
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
    question: "É possível personalizar os pacotes?",
    answer: "Sim, todos os pacotes podem ser personalizados de acordo com suas necessidades específicas. Entre em contato para discutirmos as opções e valores."
  },
  {
    question: "Qual o valor do sinal para reserva de data?",
    answer: "O sinal para reserva de data é de 50% do valor total do serviço. O restante deve ser pago no dia do serviço ou conforme acordado no contrato."
  },
  {
    question: "Há desconto para grupos ou famílias?",
    answer: "Sim, oferecemos descontos especiais para ensaios em grupo ou família com mais de 4 pessoas. Entre em contato para mais informações."
  },
  {
    question: "Os valores incluem maquiagem?",
    answer: "A maquiagem profissional está incluída apenas nos pacotes Premium e Realeza. Para o pacote Essencial, é possível adicionar o serviço de maquiagem por um valor adicional."
  },
  {
    question: "Quanto custa adicionar mais fotos editadas ao pacote?",
    answer: "Fotos adicionais podem ser incluídas ao pacote por R$ 20 cada. Recomendamos definir a quantidade de fotos antes da sessão para melhor planejamento."
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
  title: 'Investimento - Valores e Pacotes | Fotógrafa Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Conheça os valores e pacotes dos nossos serviços de fotografia e consultoria de imagem. Ensaios fotográficos, consultoria de imagem e aluguel de estúdio em Mogi das Cruzes.'
    },
    {
      name: 'keywords',
      content: 'preços fotografia, pacotes ensaio fotográfico, valores consultoria de imagem, aluguel estúdio, Mogi das Cruzes'
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

/* Intro Section */
.intro-section {
  padding: 60px 0;
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
}

/* Packages Section */
.packages-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.packages-section.alt-bg {
  background-color: #f9f7f4;
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

/* Rental Section */
.rental-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.rental-table-container {
  max-width: 900px;
  margin: 0 auto;
  overflow-x: auto;
}

.rental-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.rental-table th,
.rental-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #f0e6d9;
}

.rental-table th {
  background-color: #a67c52;
  color: white;
  font-weight: 600;
}

.rental-table tr:nth-child(even) {
  background-color: #f9f7f4;
}

.rental-table tr:hover {
  background-color: #f0e6d9;
}

.rental-note {
  max-width: 800px;
  margin: 40px auto 0;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}

.rental-cta {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.rental-cta:hover {
  background-color: #8a6642;
}

/* Payment Section */
.payment-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.payment-card {
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.payment-card:hover {
  transform: translateY(-10px);
}

.payment-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.payment-title {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #333;
}

.payment-description {
  color: #666;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* Policy Section */
.policy-section {
  padding: 60px 0;
  margin-bottom: 60px;
}

.policy-content {
  max-width: 800px;
  margin: 0 auto;
}

.policy-item {
  margin-bottom: 30px;
}

.policy-title {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
  position: relative;
  padding-bottom: 10px;
}

.policy-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #a67c52;
}

.policy-text {
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
  .packages-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  .payment-grid {
    grid-template-columns: repeat(2, 1fr);
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
  .packages-grid,
  .payment-grid {
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
  
  .rental-table {
    font-size: 0.9rem;
  }
  
  .rental-table th,
  .rental-table td {
    padding: 10px;
  }
}
</style>
