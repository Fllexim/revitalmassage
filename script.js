//----------Слайдер---------
let currentSlide = 0; // Текущий слайд
const slides = document.querySelectorAll('.slide'); // Все слайды
const indicators = document.querySelectorAll('.indicator'); // Индикаторы

// Функция для отображения текущего слайда
function showSlide(index) {
  // Если индекс выходит за пределы, возвращаем в начало/конец
  if (index < 0) {
    currentSlide = slides.length - 1;
} else if (index >= slides.length) {
    currentSlide = 0;
} else {
    currentSlide = index;
}

  // Убираем класс 'active' у всех слайдов
  slides.forEach((slide) => {
    slide.classList.remove('active');
});

  // Добавляем класс 'active' к текущему слайду
  slides[currentSlide].classList.add('active');

  // Обновляем индикаторы
  indicators.forEach((indicator, i) => {
    if (i === currentSlide) {
      indicator.classList.add('active');
  } else {
      indicator.classList.remove('active');
  }
});
}

// Автоматическое переключение слайдов
function startAutoSlide() {
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 4500); // Переключение каждые 5 секунд
}

// Инициализация слайдера
showSlide(currentSlide);
startAutoSlide(); // Запуск автоматического переключения

//Модалка
function openModal() {
  const modal = document.getElementById("modal");

  modal.classList.add("active");
  showOverlay();

  // Добавляем слушатель клика вне модалки
  document.addEventListener("click", outsideClickListener);
}

function closeModal() {
  const modal = document.getElementById("modal");

  modal.classList.remove("active");
  hideOverlay();

  // Удаляем слушатель клика вне модалки
  document.removeEventListener("click", outsideClickListener);
}

function showOverlay() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("hidden");
}

function outsideClickListener(event) {
  const modal = document.getElementById("modal");
  const openBtns = document.querySelectorAll(".btn-appointment");

  const clickedInsideAnyBtn = Array.from(openBtns).some(btn =>
    btn.contains(event.target)
  );

  if (
    !modal.contains(event.target) &&
    !clickedInsideAnyBtn &&
    !event.target.classList.contains("close-btn")
  ) {
    closeModal();
  }
}

// ========== Sidebar остаётся без изменений ==========
function openSidebar() {
  const sidebar = document.getElementById("mobSidebar");
  sidebar.classList.add("active");
  showOverlay();

  document.addEventListener("click", outsideSidebarClickListener);
}

function closeSidebar() {
  const sidebar = document.getElementById("mobSidebar");
  sidebar.classList.remove("active");
  hideOverlay();

  document.removeEventListener("click", outsideSidebarClickListener);
}

function outsideSidebarClickListener(event) {
  const sidebar = document.getElementById("mobSidebar");
  const burger = document.getElementById("burger");

  if (
    !sidebar.contains(event.target) &&
    !burger.contains(event.target)
  ) {
    closeSidebar();
  }
}
//---------------Сертификат---------------
function openModalCertif() {
  const modal = document.getElementById("modalCertif");
  modal.classList.add("active");
  showOverlay();

  document.addEventListener("click", outsideModalCertifClickListener);
}

function closeModalCertif() {
  const modal = document.getElementById("modalCertif");
  modal.classList.remove("active");
  hideOverlay();

  document.removeEventListener("click", outsideModalCertifClickListener);
}

function showOverlay() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("hidden");
}

function hideOverlay() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.add("hidden");
}

function outsideModalCertifClickListener(event) {
  const modal = document.getElementById("modalCertif");
  const openBtn = document.querySelector(".btn-main");

  const clickedInsideOpenBtn = openBtn.contains(event.target);
  const isCloseBtn = event.target.classList.contains("close-btn") || event.target.id === "close-modal-2";

  if (
    !modal.contains(event.target) &&
    !clickedInsideOpenBtn &&
    !isCloseBtn
  ) {
    closeModalCertif();
  }
}



