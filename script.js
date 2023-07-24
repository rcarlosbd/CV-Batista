((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu"),
    $logoLink = d.querySelector(".logo a");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });

  $logoLink.addEventListener("click", (e) => {
    if ($menu.classList.contains("is-active")) {
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    }
  });
})(document);

/*****ContactForm*****/

((d) => {
  const $form = d.querySelector(".contact-form"),
    $spiner = d.querySelector(".contact-form-spiner"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $spiner.classList.remove("none");
    fetch("https://formsubmit.co/ajax/rcbatista1987@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);

        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $spiner.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

//CODIGO JS DE W3SCHOOLS PARA EL CAROUSEL
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// CÓDIGO PARA EL CONTADOR DEL TEXTAREA
window.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("comments");
  const contadorCaracteres = document.querySelector(".contador-caracteres");
  const limiteCaracteres = 160;

  // Mostrar el mensaje inicial del contador
  contadorCaracteres.textContent = `${limiteCaracteres} caracteres restantes`;

  textarea.addEventListener("input", function () {
    const texto = textarea.value;
    const caracteres = texto.length;
    const caracteresRestantes = limiteCaracteres - caracteres;

    // Actualizar el contador de caracteres restantes
    contadorCaracteres.textContent = `${caracteresRestantes} caracteres restantes`;
  });

  // Reiniciar el contador a 160 caracteres después de enviar el formulario
  document
    .querySelector(".contact-form")
    .addEventListener("submit", function () {
      contadorCaracteres.textContent = `${limiteCaracteres} caracteres restantes`;
    });
});
