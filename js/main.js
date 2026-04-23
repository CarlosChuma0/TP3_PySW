//Logica Seccion Hero
$(document).ready(function(){

    $(".hero-text h1").hide().fadeIn(1500);
    $(".hero-text p").hide().delay(800).fadeIn(1500);

});

//Destinos
$(document).ready(function(){

    $(".destino-card").hover(
        function(){
            $(this).stop().animate({ marginTop: "-10px" }, 200);
        },
        function(){
            $(this).stop().animate({ marginTop: "0px" }, 200);
        }
    );

});

//Animacion de aparicion de destinos
$(document).ready(function(){

    $(".destino-card").hide();

    $(window).on("scroll", function(){
        $(".destino-card").each(function(){
            let top = $(this).offset().top;
            let scroll = $(window).scrollTop() + $(window).height();

            if(scroll > top){
                $(this).fadeIn(800);
            }
        });
    });

});

//Contador
$(document).ready(function(){

    let contadorActivado = false;

    $(window).on("scroll", function(){

        let contadorTop = $(".contador").offset().top;
        let scroll = $(window).scrollTop() + $(window).height();

        if(scroll > contadorTop && !contadorActivado){

            $(".numero-contador").each(function(){

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
$(document).ready(function(){

    $(".filtro").click(function(){

        let filtro = $(this).data("filtro");

        if(filtro === "all"){
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