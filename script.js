document.addEventListener('DOMContentLoaded', () => {
    // Тут пишемо код
  const buttonLight = document.querySelector('.light-mode-btn')
  const buttonDark = document.querySelector('.dark-mode-btn')

  const body = document.querySelector('body')
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  
  buttonLight.onclick = () => {
      body.style.background = '#fff';
      body.style.color = '#333';
      header.style.background = '#87ceeb';
      header.style.color = '#fff';
      footer.style.background = '#333';
      footer.style.color = '#fff';
      buttonLight.style.background = '#45a29e';
      buttonLight.style.color = '#0b0c10';
      buttonDark.style.background = 'white'
      buttonDark.style.color = 'black'
  }
  
  buttonDark.onclick = () => {
      body.style.background = '#0b0c10';
      body.style.color = '#c5c6c7';
      header.style.background = '#1f2833';
      header.style.color = '#66fcf1';
      footer.style.background = '#1f2833';
      footer.style.color = '#66fcf1';
      buttonLight.style.background = 'white'
      buttonLight.style.color = 'black'
      buttonDark.style.background = '#45a29e';
      buttonDark.style.color = '#0b0c10';
  }
});