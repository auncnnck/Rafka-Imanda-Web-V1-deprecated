alert("Selamat datang, terimakasih telah bersedia mengunjungi web sederhana saya! Sebelumnya perlu diketahui bahwa situs ini hanya kompatibel untuk pengguna mobile, karena saya tidak menggunakan desktop saat membuat web ini. Mohon maaf atas ketidaknyamanannya, best regard Rafka.");


const selectElement = (element) => document.querySelector(element);

const header = selectElement('header');
const mainContent = selectElement('main');

selectElement('.navbar').addEventListener('click', () => {
  header.classList.toggle('active');
  mainContent.classList.toggle('active');
});

window.onclick = (event) => {
  if (event.target.matches('.active')) {
    if (header.classList.contains('active')) {
      header.classList.remove('active');
      mainContent.classList.remove('active');
    }
  }
};

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let windowPosition = window.scrollY > 0;
    
    header.classList.toggle("scrolling-active", windowPosition);
    
  });
  
  //ambroksol batuk
  
