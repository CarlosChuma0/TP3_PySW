//Logica Seccion Hero
$(document).ready(function () {

    $(".hero-text h1").hide().fadeIn(1500);
    $(".hero-text p").hide().delay(800).fadeIn(1500);

});

//Destinos
$(document).ready(function () {

    $(".destino-card").hover(
        function () {
            $(this).stop().animate({ marginTop: "-10px" }, 200);
        },
        function () {
            $(this).stop().animate({ marginTop: "0px" }, 200);
        }
    );

});

//Animacion de aparicion de destinos
$(document).ready(function () {

    $(".destino-card").hide();

    $(window).on("scroll", function () {
        $(".destino-card").each(function () {
            let top = $(this).offset().top;
            let scroll = $(window).scrollTop() + $(window).height();

            if (scroll > top) {
                $(this).fadeIn(800);
            }
        });
    });

});

//Contador
$(document).ready(function () {

    let contadorActivado = false;

    $(window).on("scroll", function () {

        let contadorTop = $(".contador").offset().top;
        let scroll = $(window).scrollTop() + $(window).height();

        if (scroll > contadorTop && !contadorActivado) {

            $(".numero-contador").each(function () {

                let $this = $(this);
                let target = $this.data("target");

                $({ countNum: 0 }).animate(
                    { countNum: target },
                    {
                        duration: 2000,
                        easing: "swing",
                        step: function () {
                            $this.text(Math.floor(this.countNum) + "+");
                        },
                        complete: function () {
                            $this.text(this.countNum + "+");
                        }
                    }
                );

            });

            contadorActivado = true;
        }

    });

});

//DESTINOS
//Filtros
$(document).ready(function () {

    $(".filtro").click(function () {

        let filtro = $(this).data("filtro");

        if (filtro === "all") {
            $(".destino-item").show();
        } else {
            $(".destino-item").hide();
            $("." + filtro).show();
            $("." + filtro).fadeIn();
        }
        $(".filtro")
            .removeClass("btn-primary")
            .addClass("btn-outline-primary");

        $(this)
            .removeClass("btn-outline-primary")
            .addClass("btn-primary");
    });

});

// Agencias - Voltear Cards - Rating
$(document).ready(function () {
    $(".tarjeta-girar").click(function () {
        $(this).toggleClass("flipped");
    });

    // Evitar que el clic en la valoración voltee la card de vuelta
    $(".rating-interactivo").click(function (e) {
        e.stopPropagation();
    });

    // Lógica para las estrellas (Hover y Click)

    // Efecto Hover
    $(".rating-interactivo .star").hover(
        // mouse in
        function () {
            let value = $(this).data("value");
            let $parent = $(this).parent();

            // Limpiar hovers
            $parent.find(".star").removeClass("hover");

            // Colorear hasta la estrella actual
            $parent.find(".star").each(function () {
                if ($(this).data("value") <= value) {
                    $(this).addClass("hover");
                }
            });
        },
        // mouse out
        function () {
            // Al quitar el mouse, limpiar los hovers
            $(this).parent().find(".star").removeClass("hover");
        }
    );

    // Efecto Click
    $(".rating-interactivo .star").click(function (e) {
        let value = $(this).data("value");
        let $parent = $(this).parent();

        // Guardar el nuevo valor en el atributo data-rating
        $parent.attr("data-rating", value);

        // Quitar la clase active de todas
        $parent.find(".star").removeClass("active");

        // Asignar active hasta la estrella clickeada
        $parent.find(".star").each(function () {
            if ($(this).data("value") <= value) {
                $(this).addClass("active");
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const phishingForm = document.getElementById('phishingForm');
    
    if (phishingForm) {
        phishingForm.addEventListener('submit', (e) => {

            e.preventDefault(); 
            

            phishingForm.reset();
            

            const fakePaymentModalElement = document.getElementById('fakePaymentModal');
            const fakePaymentModal = bootstrap.Modal.getInstance(fakePaymentModalElement);
            fakePaymentModal.hide();
            
            const hackedModalElement = document.getElementById('hackedModal');
            let hackedModal = bootstrap.Modal.getInstance(hackedModalElement);
            if (!hackedModal) {
                hackedModal = new bootstrap.Modal(hackedModalElement);
            }
            hackedModal.show();
        });
    }
});

//BLOG
$(document).ready(function() {

    $(".filter-btn").click(function() {
        const category = $(this).data("category");

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        $(".post").each(function() {
            const $post = $(this);

            if (category === "all" || $post.hasClass(category)) {
                $post.removeClass("hidden");
                
                setTimeout(() => {
                    $post.addClass("visible");
                }, 20);
            } else {
                $post.removeClass("visible").addClass("hidden");
            }
        });
    });

    const posts = document.querySelectorAll('.post');

    const observerOptions = {
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
                entry.target.classList.add('visible');
            } else if (!entry.isIntersecting) {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    posts.forEach(post => observer.observe(post));
});