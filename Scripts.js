// Função para alternar o modo dark e light
function toggleDarkMode() {
    // Seleciona o elemento <body> do documento
    const body = document.querySelector('body');
  
    // Adiciona ou remove a classe 'dark-mode' no elemento <body>
    body.classList.toggle('dark-mode');
  }
  
  // Função para verificar se o modo dark está ativado
  function isDarkModeEnabled() {
    // Seleciona o elemento <body> do documento
    const body = document.querySelector('body');
  
    // Verifica se a classe 'dark-mode' está presente no elemento <body>
    return body.classList.contains('dark-mode');
  }
  
  // Função para alternar o ícone do modo (lua ou sol)
  function toggleModeIcon() {
    // Seleciona o elemento <i> com id 'mode_icon'
    const modeIcon = document.querySelector('#mode_icon');
  
    // Verifica se o modo dark está ativado
    if (isDarkModeEnabled()) {
      // Atualiza a classe do ícone para 'fa-sun' (modo light)
      modeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
      // Atualiza a classe do ícone para 'fa-moon' (modo dark)
      modeIcon.classList.replace('fa-sun', 'fa-moon');
    }
  }
  
  // Função para alternar entre os modos dark e light
  function toggleMode() {
    // Chama as funções para alternar o modo e o ícone do modo
    toggleDarkMode();
    toggleModeIcon();
  }
  
  // Evento de clique no ícone do modo
  const modeIcon = document.querySelector('#mode_icon');
  modeIcon.addEventListener('click', toggleMode);
  