<!-- pages/[slug].vue - Página dinâmica para rotas genéricas -->
<template>
  <div class="dynamic-page">
    <div v-if="pageData">
      <h1>{{ pageData.title }}</h1>
      <div v-html="pageData.content"></div>
    </div>
    <div v-else class="not-found">
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <NuxtLink to="/" class="home-link">Voltar para a página inicial</NuxtLink>
    </div>
  </div>
</template>

<script setup>
// Esta é uma página dinâmica que pode ser usada para rotas genéricas
// como políticas de privacidade, termos de uso, etc.

const route = useRoute();
const slug = route.params.slug;

// Simulação de dados de página - em um ambiente real, isso viria de uma API ou CMS
const pagesData = {
  'politica-privacidade': {
    title: 'Política de Privacidade',
    content: `
      <div class="page-content">
        <p>Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e compartilhadas quando você visita ou faz uma compra no site da Fotógrafa Lillia Tavares.</p>
        
        <h2>INFORMAÇÕES PESSOAIS QUE COLETAMOS</h2>
        
        <p>Quando você visita o site, coletamos automaticamente certas informações sobre seu dispositivo, incluindo informações sobre seu navegador, endereço IP, fuso horário e alguns dos cookies instalados em seu dispositivo.</p>
        
        <p>Além disso, quando você navega pelo site, coletamos informações sobre as páginas da web ou produtos individuais que você visualiza, quais sites ou termos de pesquisa o encaminharam para o site e informações sobre como você interage com o site.</p>
        
        <h2>COMO USAMOS SUAS INFORMAÇÕES PESSOAIS</h2>
        
        <p>Usamos as informações que coletamos para:</p>
        <ul>
          <li>Comunicar-nos com você;</li>
          <li>Processar seus pedidos e fornecer serviços;</li>
          <li>Quando em conformidade com as preferências que você compartilhou conosco, fornecer informações ou publicidade relacionadas aos nossos produtos ou serviços.</li>
        </ul>
        
        <h2>COMPARTILHAMENTO DE SUAS INFORMAÇÕES PESSOAIS</h2>
        
        <p>Compartilhamos suas Informações Pessoais com terceiros para nos ajudar a usar suas Informações Pessoais, conforme descrito acima.</p>
        
        <h2>SEUS DIREITOS</h2>
        
        <p>Se você é residente europeu, você tem o direito de acessar informações pessoais que mantemos sobre você e de solicitar que suas informações pessoais sejam corrigidas, atualizadas ou excluídas. Se você deseja exercer esse direito, entre em contato conosco.</p>
        
        <h2>RETENÇÃO DE DADOS</h2>
        
        <p>Quando você faz um pedido através do site, mantemos suas Informações de Pedido em nossos registros, a menos que e até que você nos peça para excluir essas informações.</p>
        
        <h2>ALTERAÇÕES</h2>
        
        <p>Podemos atualizar esta política de privacidade periodicamente para refletir, por exemplo, alterações em nossas práticas ou por outros motivos operacionais, legais ou regulamentares.</p>
        
        <h2>CONTATE-NOS</h2>
        
        <p>Para mais informações sobre nossas práticas de privacidade, se você tiver dúvidas ou se quiser fazer uma reclamação, entre em contato conosco por e-mail em contato@fotografalilliatavares.com.br ou pelo correio usando as informações fornecidas abaixo:</p>
        
        <p>Rua Exemplo, 123 - Centro, Mogi das Cruzes - SP, 08700-000, Brasil</p>
      </div>
    `
  },
  'termos-de-uso': {
    title: 'Termos de Uso',
    content: `
      <div class="page-content">
        <p>Ao acessar o site da Fotógrafa Lillia Tavares, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
        
        <h2>LICENÇA DE USO</h2>
        
        <p>É concedida permissão para baixar temporariamente uma cópia dos materiais no site da Fotógrafa Lillia Tavares apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título.</p>
        
        <h2>PROIBIÇÕES</h2>
        
        <p>Você não está autorizado a:</p>
        <ul>
          <li>Modificar ou copiar os materiais;</li>
          <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
          <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais;</li>
          <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
        </ul>
        
        <h2>ISENÇÃO DE RESPONSABILIDADE</h2>
        
        <p>Os materiais no site da Fotógrafa Lillia Tavares são fornecidos 'como estão'. A Fotógrafa Lillia Tavares não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias.</p>
        
        <h2>LIMITAÇÕES</h2>
        
        <p>Em nenhum caso a Fotógrafa Lillia Tavares ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em seu site.</p>
        
        <h2>PRECISÃO DOS MATERIAIS</h2>
        
        <p>Os materiais exibidos no site da Fotógrafa Lillia Tavares podem incluir erros técnicos, tipográficos ou fotográficos. A Fotógrafa Lillia Tavares não garante que qualquer material em seu site seja preciso, completo ou atual.</p>
        
        <h2>LINKS</h2>
        
        <p>A Fotógrafa Lillia Tavares não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte da Fotógrafa Lillia Tavares do site.</p>
        
        <h2>MODIFICAÇÕES</h2>
        
        <p>A Fotógrafa Lillia Tavares pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
        
        <h2>LEI APLICÁVEL</h2>
        
        <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>
      </div>
    `
  }
};

// Recuperar dados da página com base no slug
const pageData = computed(() => {
  return pagesData[slug] || null;
});

// Meta tags dinâmicas para SEO
useHead(() => {
  if (pageData.value) {
    return {
      title: `${pageData.value.title} | Fotógrafa Lillia Tavares`,
      meta: [
        {
          name: 'description',
          content: `${pageData.value.title} da Fotógrafa Lillia Tavares. Informações importantes sobre nossos serviços e políticas.`
        }
      ]
    };
  } else {
    return {
      title: 'Página não encontrada | Fotógrafa Lillia Tavares',
      meta: [
        {
          name: 'description',
          content: 'A página que você está procurando não existe ou foi movida.'
        }
      ]
    };
  }
});
</script>

<style scoped>
.dynamic-page {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  padding-bottom: 15px;
}

h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: #a67c52;
}

h2 {
  font-size: 1.8rem;
  margin: 40px 0 20px;
  color: #333;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  margin-bottom: 20px;
  padding-left: 20px;
}

li {
  color: #666;
  line-height: 1.6;
  margin-bottom: 10px;
}

.not-found {
  text-align: center;
  padding: 60px 0;
}

.home-link {
  display: inline-block;
  background-color: #a67c52;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 30px;
  transition: background-color 0.3s ease;
}

.home-link:hover {
  background-color: #8a6642;
}

.page-content {
  margin-top: 40px;
}
</style>
