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

    $(".rating-interactivo").click(function (e) {
        e.stopPropagation();
    });

    // Efecto Hover
    $(".rating-interactivo .star").hover(
        // mouse in
        function () {
            let value = $(this).data("value");
            let $parent = $(this).parent();

            $parent.find(".star").removeClass("hover");

            $parent.find(".star").each(function () {
                if ($(this).data("value") <= value) {
                    $(this).addClass("hover");
                }
            });
        },
        // mouse out
        function () {
            $(this).parent().find(".star").removeClass("hover");
        }
    );

    // Efecto Click
    $(".rating-interactivo .star").click(function (e) {
        let value = $(this).data("value");
        let $parent = $(this).parent();

        $parent.attr("data-rating", value);

        $parent.find(".star").removeClass("active");

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

// BLOG
$(document).ready(function () {

    $(".filter-btn").click(function () {

        const category = $(this).data("category");

        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        $(".post").each(function () {

            const $post = $(this);
            const $col = $post.closest('[class*="col-"]');

            if (category === "all" || $post.hasClass(category)) {

                $col.removeClass("d-none");

                $post.removeClass("visible");

                requestAnimationFrame(() => {
                    $post.addClass("visible");
                });

            } else {

                $post.removeClass("visible");
                $col.addClass("d-none");

            }
        });
    });

    const posts = document.querySelectorAll('.post');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }

        });
    }, {
        threshold: 0.2
    });

    posts.forEach(post => observer.observe(post));

    // Formulario 
    $(document).ready(function () {

        function sanitizar(texto) {
            return texto
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        function validarNombre() {
            let valor = sanitizar($("#nombre").val().trim());
            let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
            let esValido = regex.test(valor);

            aplicarEstado($("#nombre"), esValido);
            return esValido;
        }

        function validarEmail() {
            let valor = sanitizar($("#email").val().trim());
            let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let esValido = regex.test(valor);

            aplicarEstado($("#email"), esValido);
            return esValido;
        }

        function validarMotivo() {
            let valor = $("#motivo").val();
            let esValido = valor !== null && valor !== "";

            aplicarEstado($("#motivo"), esValido);
            return esValido;
        }

        function validarMensaje() {
            let valor = sanitizar($("#mensaje").val().trim());
            let esValido = valor.length >= 10;

            aplicarEstado($("#mensaje"), esValido);
            return esValido;
        }

        function aplicarEstado($campo, esValido) {
            if (esValido) {
                $campo.removeClass("is-invalid").addClass("is-valid");
            } else {
                $campo.removeClass("is-valid").addClass("is-invalid");
            }
        }

        function verificarFormulario() {
            let nombreOk = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/.test(sanitizar($("#nombre").val().trim()));
            let emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizar($("#email").val().trim()));
            let motivoOk = $("#motivo").val() !== null && $("#motivo").val() !== "";
            let mensajeOk = sanitizar($("#mensaje").val().trim()).length >= 10;

            if (nombreOk && emailOk && motivoOk && mensajeOk) {
                $(".boton-enviar").removeClass("disabled").css({
                    "opacity": "1",
                    "pointer-events": "auto"
                });
            } else {
                $(".boton-enviar").addClass("disabled").css({
                    "opacity": "0.5",
                    "pointer-events": "none"
                });
            }
        }

        // --- Binding de eventos ---

        $("#nombre").on("input", function () {
            validarNombre();
            verificarFormulario();
        });

        $("#email").on("input", function () {
            validarEmail();
            verificarFormulario();
        });

        $("#motivo").on("change", function () {
            validarMotivo();
            verificarFormulario();
        });
        $("#mensaje").on("input", function () {
            validarMensaje();
            verificarFormulario();
        });

        verificarFormulario();

        // --- Lógica del botón Enviar: spinner + modal ---

        $("#btnEnviar").click(function () {
            $(this).prop("disabled", true);

            $("#spinnerOverlay").fadeIn(300);

            setTimeout(function () {
                $("#spinnerOverlay").fadeOut(300, function () {
                    $("#modalConfirmacion").fadeIn(300);
                });
            }, 3000);
        });

        $("#btnCerrarModal").click(function () {
            $("#modalConfirmacion").fadeOut(300);

            $(".formulario").trigger("reset");

            $(".formulario .form-control, .formulario .form-select")
                .removeClass("is-valid is-invalid");

            $("#btnEnviar").prop("disabled", false);
            verificarFormulario();
        });
    });
});

//Sanitizacion Footer
$(document).ready(function () {

    function sanitizar(texto) {
        return texto
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function validarEmail(email) {
        let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    $("#formNewsLetter").on("submit", function (e) {
        e.preventDefault();

        let $form = $(this);
        let $input = $form.find("#newsletterEmail");

        let email = $input.val().trim();

        if (validarEmail(email)) {
            let limpio = sanitizar(email);

            $input.removeClass("is-invalid").addClass("is-valid");
            setTimeout(() => {
                $form.trigger("reset");
                $input.removeClass("is-valid");
            }, 4000);

        } else {
            $input.removeClass("is-valid").addClass("is-invalid");
        }
    });

});