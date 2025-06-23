<!-- pages/faq.vue - Página de Perguntas Frequentes -->
<template>
  <div class="faq-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Perguntas Frequentes</h1>
        <p class="hero-subtitle">Tire suas dúvidas sobre nossos serviços e processos</p>
      </div>
    </section>

    <!-- Categorias de FAQ -->
    <section class="categories-section">
      <div class="categories-container">
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'all' }"
          @click="setCategory('all')"
        >
          Todas
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'ensaios' }"
          @click="setCategory('ensaios')"
        >
          Ensaios Fotográficos
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'consultoria' }"
          @click="setCategory('consultoria')"
        >
          Consultoria de Imagem
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'estudio' }"
          @click="setCategory('estudio')"
        >
          Estúdio
        </button>
        <button 
          class="category-item" 
          :class="{ 'active': activeCategory === 'pagamentos' }"
          @click="setCategory('pagamentos')"
        >
          Pagamentos
        </button>
      </div>
    </section>

    <!-- Pesquisa -->
    <section class="search-section">
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Pesquisar perguntas..." 
          class="search-input"
        />
        <button class="search-button">
          🔍
        </button>
      </div>
    </section>

    <!-- Perguntas Frequentes -->
    <section class="faq-section">
      <div class="faq-container">
        <div 
          v-for="(category, categoryName) in filteredFaqItems" 
          :key="categoryName"
          class="faq-category"
        >
          <h2 class="category-title">{{ getCategoryTitle(categoryName) }}</h2>
          
          <div 
            v-for="(item, index) in category" 
            :key="`${categoryName}-${index}`"
            class="faq-item"
          >
            <div 
              class="faq-question" 
              :class="{ 'active': activeQuestions[`${categoryName}-${index}`] }"
              @click="toggleQuestion(categoryName, index)"
            >
              <h3 class="question-text">{{ item.question }}</h3>
              <span class="question-icon">+</span>
            </div>
            <div 
              class="faq-answer" 
              :class="{ 'active': activeQuestions[`${categoryName}-${index}`] }"
            >
              <p class="answer-text">{{ item.answer }}</p>
            </div>
          </div>
          
          <div v-if="category.length === 0" class="no-results">
            Nenhuma pergunta encontrada para esta categoria.
          </div>
        </div>
      </div>
    </section>

    <!-- Não encontrou sua pergunta? -->
    <section class="contact-section">
      <div class="contact-container">
        <h2 class="contact-title">Não encontrou sua pergunta?</h2>
        <p class="contact-text">
          Entre em contato conosco e teremos prazer em ajudar.
        </p>
        <div class="contact-buttons">
          <NuxtLink to="/contato" class="contact-button primary">
            Enviar Mensagem
          </NuxtLink>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" class="contact-button secondary">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Estado para controle de categoria ativa
const activeCategory = ref('all');

// Estado para controle de perguntas ativas
const activeQuestions = ref({});

// Estado para pesquisa
const searchQuery = ref('');

// Dados do FAQ
const faqItems = {
  ensaios: [
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
    },
    {
      question: "Quanto tempo de antecedência devo agendar meu ensaio?",
      answer: "Recomendamos agendar com pelo menos 2 semanas de antecedência para garantir disponibilidade na data desejada. Para ensaios em datas especiais ou campanhas temáticas, o ideal é agendar com 1 mês de antecedência."
    },
    {
      question: "Posso levar acompanhantes para o ensaio?",
      answer: "Sim, você pode levar até 2 acompanhantes para o ensaio. Para ensaios sensuais/intimistas, recomendamos apenas 1 acompanhante de sua confiança para garantir sua privacidade e conforto."
    }
  ],
  consultoria: [
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
    },
    {
      question: "O que é coloração pessoal?",
      answer: "Coloração pessoal é uma análise que identifica quais cores harmonizam melhor com seu tom de pele, olhos e cabelos. O resultado é uma cartela personalizada com cores que valorizam sua beleza natural e podem ser usadas em roupas, maquiagem e acessórios."
    }
  ],
  estudio: [
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
    },
    {
      question: "Quais equipamentos estão disponíveis no estúdio?",
      answer: "O estúdio conta com flashes, softboxes, difusores, rebatedores, tripés, fundos infinitos em diversas cores, ventilador para efeitos e máquina de fumaça. A lista completa de equipamentos está disponível na página do estúdio."
    }
  ],
  pagamentos: [
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos pagamentos via PIX, transferência bancária, cartões de crédito e débito. Para pagamentos à vista via PIX ou transferência, oferecemos 5% de desconto."
    },
    {
      question: "É possível parcelar o pagamento?",
      answer: "Sim, oferecemos parcelamento em até 3x sem juros ou em até 10x com juros no cartão de crédito. O sinal de 50% pode ser pago à vista e o restante parcelado."
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
      question: "Como funciona a política de cancelamento?",
      answer: "Em caso de cancelamento com mais de 7 dias de antecedência, o valor do sinal será devolvido integralmente. Para cancelamentos com menos de 7 dias de antecedência, o valor do sinal não será reembolsado."
    },
    {
      question: "É possível reagendar meu ensaio ou consultoria?",
      answer: "Sim, o reagendamento pode ser feito sem custo adicional com até 48 horas de antecedência, sujeito à disponibilidade de agenda. Reagendamentos com menos de 48 horas de antecedência estão sujeitos a uma taxa de 20% sobre o valor do serviço."
    }
  ]
};

// Função para definir categoria ativa
const setCategory = (category) => {
  activeCategory.value = category;
};

// Função para alternar perguntas
const toggleQuestion = (category, index) => {
  const key = `${category}-${index}`;
  activeQuestions.value[key] = !activeQuestions.value[key];
};

// Função para obter título da categoria
const getCategoryTitle = (category) => {
  const titles = {
    ensaios: 'Ensaios Fotográficos',
    consultoria: 'Consultoria de Imagem',
    estudio: 'Estúdio',
    pagamentos: 'Pagamentos'
  };
  
  return titles[category] || 'Perguntas Frequentes';
};

// Computed para filtrar perguntas por categoria e pesquisa
const filteredFaqItems = computed(() => {
  const result = {};
  
  // Filtrar por categoria
  if (activeCategory.value === 'all') {
    Object.keys(faqItems).forEach(category => {
      result[category] = [...faqItems[category]];
    });
  } else {
    result[activeCategory.value] = [...faqItems[activeCategory.value] || []];
  }
  
  // Filtrar por pesquisa
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase();
    
    Object.keys(result).forEach(category => {
      result[category] = result[category].filter(item => 
        item.question.toLowerCase().includes(query) || 
        item.answer.toLowerCase().includes(query)
      );
    });
  }
  
  return result;
});

// Meta tags para SEO
useHead({
  title: 'Perguntas Frequentes - Fotógrafa Lillia Tavares',
  meta: [
    {
      name: 'description',
      content: 'Tire suas dúvidas sobre ensaios fotográficos, consultoria de imagem, aluguel de estúdio e formas de pagamento. Perguntas e respostas sobre nossos serviços.'
    },
    {
      name: 'keywords',
      content: 'FAQ, perguntas frequentes, dúvidas ensaio fotográfico, consultoria de imagem, aluguel estúdio, Mogi das Cruzes'
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

/* Categories Section */
.categories-section {
  margin-bottom: 30px;
}

.categories-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
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

/* Search Section */
.search-section {
  margin-bottom: 40px;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 15px 50px 15px 20px;
  border: 1px solid #ddd;
  border-radius: 30px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #a67c52;
  outline: none;
}

.search-button {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #a67c52;
}

/* FAQ Section */
.faq-section {
  padding: 40px 0;
  margin-bottom: 60px;
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
}

.faq-category {
  margin-bottom: 40px;
}

.category-title {
  font-size: 1.8rem;
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
  width: 60px;
  height: 3px;
  background-color: #a67c52;
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

.no-results {
  padding: 20px;
  text-align: center;
  color: #666;
  background-color: #f9f7f4;
  border-radius: 10px;
}

/* Contact Section */
.contact-section {
  padding: 60px 0;
  background-color: #f9f7f4;
  margin-bottom: 60px;
}

.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 0 20px;
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: #333;
}

.contact-text {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.contact-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.contact-button {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-button.primary {
  background-color: #a67c52;
  color: white;
}

.contact-button.primary:hover {
  background-color: #8a6642;
}

.contact-button.secondary {
  background-color: #4CAF50;
  color: white;
}

.contact-button.secondary:hover {
  background-color: #3e8e41;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .categories-container {
    overflow-x: auto;
    padding-bottom: 10px;
    justify-content: flex-start;
  }
  
  .contact-buttons {
    flex-direction: column;
    gap: 15px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
}
</style>
