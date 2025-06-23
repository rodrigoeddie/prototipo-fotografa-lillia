export default defineNuxtConfig({
  // ...outros configs...
  ssr: false,
  target: 'static',
  app: {
    baseURL: '/prototipo-fotografa-lillia/', // coloque o nome do seu repositório aqui, ex: '/prototipo-fotografa-lillia/'
  }
})