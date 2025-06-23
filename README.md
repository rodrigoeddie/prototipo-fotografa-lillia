# Documentação do Projeto Nuxt 3 - Site Fotógrafa Lillia Tavares

## Visão Geral

Este projeto contém a estrutura completa do site da Fotógrafa Lillia Tavares desenvolvido em Nuxt 3. O site foi projetado para melhorar as conversões de vendas, otimizar a experiência do usuário e melhorar o SEO, conforme as recomendações da análise realizada.

## Estrutura de Arquivos

```
nuxt-site/
├── app.vue                  # Arquivo principal do Nuxt
├── layouts/
│   └── default.vue          # Layout padrão aplicado a todas as páginas
├── components/
│   └── global/              # Componentes globais reutilizáveis
│       ├── TheHeader.vue    # Cabeçalho do site
│       ├── TheNavigation.vue # Menu de navegação principal
│       ├── TheFooter.vue    # Rodapé do site
│       └── TheBreadcrumb.vue # Navegação breadcrumb
├── pages/                   # Páginas do site (rotas automáticas)
│   ├── index.vue            # Página inicial
│   ├── sobre/
│   │   └── index.vue        # Página Sobre
│   ├── ensaios/
│   │   ├── index.vue        # Página principal de Ensaios
│   │   ├── natal-em-familia.vue # Página de Ensaio Natal em Família
│   │   ├── corporativo.vue  # Página de Ensaio Corporativo
│   │   ├── sensual.vue      # Página de Ensaio Sensual/Intimista
│   │   └── espetaculos.vue  # Página de Ensaio Espetáculos
│   ├── consultoria/
│   │   └── index.vue        # Página de Consultoria de Imagem
│   ├── estudio/
│   │   ├── index.vue        # Página principal do Estúdio
│   │   ├── aluguel.vue      # Página de Aluguel do Estúdio
│   │   └── cenarios.vue     # Página de Cenários do Estúdio
│   ├── investimento.vue     # Página de Investimento (pacotes e preços)
│   ├── blog/
│   │   └── index.vue        # Página principal do Blog
│   ├── contato/
│   │   └── index.vue        # Página de Contato
│   ├── faq.vue              # Página de Perguntas Frequentes
│   ├── presenca-local.vue   # Página de Presença Local
│   ├── campanhas-sazonais.vue # Página de Campanhas Sazonais
│   ├── guias-educativos.vue # Página de Guias Educativos
│   ├── parcerias.vue        # Página de Parcerias e Fornecedores
│   └── [slug].vue           # Página dinâmica para rotas genéricas
└── public/                  # Arquivos públicos (imagens, fontes, etc.)
    └── images/              # Imagens do site
```

## Tecnologias Utilizadas

- **Nuxt 3**: Framework Vue.js para desenvolvimento de aplicações web
- **Vue 3**: Framework JavaScript progressivo para construção de interfaces
- **Composition API**: API para organização de lógica em componentes Vue
- **CSS Moderno**: Flexbox e Grid para layouts responsivos
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação

## Recursos Implementados

1. **Menu de Navegação Responsivo**:
   - Menu dropdown para desktop
   - Menu hambúrguer para dispositivos móveis
   - Navegação intuitiva por categorias

2. **Breadcrumbs Dinâmicos**:
   - Navegação hierárquica para melhor UX
   - Geração automática baseada na rota atual
   - Mapeamento de rotas para nomes amigáveis

3. **Páginas Otimizadas para SEO**:
   - Meta tags dinâmicas por página
   - Estrutura semântica de HTML
   - URLs amigáveis

4. **Componentes Reutilizáveis**:
   - Cabeçalho e rodapé consistentes
   - Componentes de UI compartilhados
   - Estilos globais para consistência visual

5. **Rotas Dinâmicas**:
   - Suporte para páginas dinâmicas como blog posts
   - Parâmetros de URL para filtragem de conteúdo
   - Páginas genéricas para conteúdo estático (políticas, termos)

## Como Usar

### Requisitos

- Node.js 16.x ou superior
- NPM 8.x ou superior (ou Yarn/PNPM)

### Instalação

1. Clone o repositório ou extraia o arquivo ZIP
2. Navegue até a pasta do projeto
3. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

### Desenvolvimento Local

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Construção para Produção

Para construir o site para produção:

```bash
npm run build
# ou
yarn build
# ou
pnpm build
```

### Visualização da Versão de Produção

Para visualizar a versão de produção localmente:

```bash
npm run preview
# ou
yarn preview
# ou
pnpm preview
```

## Personalização e Expansão

### Adicionando Novas Páginas

1. Crie um novo arquivo `.vue` na pasta `pages/` ou em uma subpasta apropriada
2. O Nuxt criará automaticamente uma rota baseada na estrutura de arquivos
3. Adicione a nova página ao menu de navegação em `components/global/TheNavigation.vue`
4. Atualize o mapeamento de breadcrumbs em `components/global/TheBreadcrumb.vue`

### Modificando o Estilo

- Os estilos estão definidos dentro de cada componente usando `<style scoped>`
- Para estilos globais, modifique o arquivo `app.vue`
- As cores principais do tema são:
  - Primária: `#a67c52` (marrom/dourado)
  - Secundária: `#f9f7f4` (bege claro)
  - Texto: `#333` (cinza escuro)
  - Texto secundário: `#666` (cinza médio)

### Adicionando Funcionalidades

Para adicionar novas funcionalidades como:

- **Blog dinâmico**: Implemente uma API ou CMS headless para fornecer conteúdo
- **Sistema de agendamento**: Integre com serviços como Calendly ou desenvolva um sistema personalizado
- **E-commerce**: Adicione funcionalidades de carrinho e checkout para venda de produtos/serviços

## Melhores Práticas Implementadas

1. **Componentes Modulares**: Cada componente tem uma única responsabilidade
2. **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
3. **Responsividade**: Design adaptável para todos os tamanhos de tela
4. **Acessibilidade**: Uso de atributos ARIA e contraste adequado
5. **Performance**: Carregamento otimizado de recursos e código

## Considerações para Produção

Antes de implantar em produção, considere:

1. **Imagens**: Substituir as imagens placeholder por imagens reais otimizadas
2. **Conteúdo**: Preencher com conteúdo real e específico do negócio
3. **Analytics**: Adicionar ferramentas de análise como Google Analytics
4. **Formulários**: Implementar processamento de formulários (backend ou serviço de terceiros)
5. **Testes**: Realizar testes em diferentes navegadores e dispositivos

## Suporte e Contato

Para dúvidas ou suporte relacionado a este projeto, entre em contato através do email: [seu-email@exemplo.com]
