<!-- components/global/TheFooter.vue - Rodapé do site -->
<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Coluna 1: Sobre -->
        <div class="footer-column">
          <h3 class="footer-heading">Sobre</h3>
          <p class="footer-text">
            Fotógrafa especialista em retratos femininos e consultora de imagem, com estúdio localizado em Mogi das Cruzes.
          </p>
          <div class="social-links">
            <a href="https://instagram.com/fotografalilliatavares" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
              <span class="social-icon">IG</span>
            </a>
            <a href="https://facebook.com/fotografalilliatavares" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Facebook">
              <span class="social-icon">FB</span>
            </a>
            <a href="https://wa.me/5511911159795" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="WhatsApp">
              <span class="social-icon">WA</span>
            </a>
          </div>
        </div>
        
        <!-- Coluna 2: Serviços -->
        <div class="footer-column">
          <h3 class="footer-heading">Serviços</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/ensaios" class="footer-link">Ensaios Fotográficos</NuxtLink></li>
            <li><NuxtLink to="/consultoria" class="footer-link">Consultoria de Imagem</NuxtLink></li>
            <li><NuxtLink to="/estudio/aluguel" class="footer-link">Aluguel de Estúdio</NuxtLink></li>
            <li><NuxtLink to="/investimento" class="footer-link">Investimento</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Coluna 3: Recursos -->
        <div class="footer-column">
          <h3 class="footer-heading">Recursos</h3>
          <ul class="footer-links">
            <li><NuxtLink to="/presenca-local" class="footer-link">Presença Local</NuxtLink></li>
            <li><NuxtLink to="/campanhas" class="footer-link">Campanhas Sazonais</NuxtLink></li>
            <li><NuxtLink to="/guias" class="footer-link">Guias Educativos</NuxtLink></li>
            <li><NuxtLink to="/parcerias" class="footer-link">Parcerias</NuxtLink></li>
            <li><NuxtLink to="/faq" class="footer-link">Dúvidas Frequentes</NuxtLink></li>
          </ul>
        </div>
        
        <!-- Coluna 4: Contato -->
        <div class="footer-column">
          <h3 class="footer-heading">Contato</h3>
          <ul class="footer-contact">
            <li class="contact-item">
              <span class="contact-label">Estúdio:</span>
              <span class="contact-text">Mogi das Cruzes, SP</span>
            </li>
            <li class="contact-item">
              <span class="contact-label">Email:</span>
              <a href="mailto:fotografalilliatavares@gmail.com" class="contact-link">fotografalilliatavares@gmail.com</a>
            </li>
            <li class="contact-item">
              <span class="contact-label">Telefone:</span>
              <a href="tel:+5511911159795" class="contact-link">(11) 91115-9795</a>
            </li>
          </ul>
          <NuxtLink to="/contato/agendar" class="footer-cta">
            Agendar Ensaio
          </NuxtLink>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} Fotógrafa Lillia Tavares. Todos os direitos reservados.
        </p>
        <div class="footer-bottom-links">
          <NuxtLink to="/politica-privacidade" class="bottom-link">Política de Privacidade</NuxtLink>
          <NuxtLink to="/termos-uso" class="bottom-link">Termos de Uso</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
.site-footer {
  background-color: #333;
  color: #fff;
  padding: 60px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-heading {
  font-size: 1.3rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: #a67c52;
}

.footer-text {
  color: #aaa;
  margin-bottom: 20px;
  line-height: 1.6;
}

.social-links {
  display: flex;
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: #444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #fff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.social-link:hover {
  background-color: #a67c52;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-link {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #fff;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-item {
  margin-bottom: 10px;
  color: #aaa;
}

.contact-label {
  font-weight: 600;
  margin-right: 5px;
}

.contact-link {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #fff;
}

.footer-cta {
  display: inline-block;
  background-color: #a67c52;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 20px;
  font-weight: 600;
  transition: background-color 0.3s;
}

.footer-cta:hover {
  background-color: #8a6642;
}

.footer-bottom {
  padding-top: 30px;
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  color: #aaa;
  margin: 0;
}

.footer-bottom-links {
  display: flex;
}

.bottom-link {
  color: #aaa;
  text-decoration: none;
  margin-left: 20px;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.bottom-link:hover {
  color: #fff;
}

@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .copyright {
    margin-bottom: 15px;
  }
  
  .footer-bottom-links {
    justify-content: center;
  }
  
  .bottom-link {
    margin: 0 10px;
  }
}
</style>
