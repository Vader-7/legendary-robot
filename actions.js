$(document).ready(function(){
//FUNCIONALIDAD CATALOGO MACETEROS
    $("#hide1").click(function (e) {
        e.preventDefault();
        $("#div1").hide(1000);
    })
    $("#hide1").click(function(){
        $("#descripcion1").show(1000);
    });
    $("#catalogo1").click(function (e) {
        e.preventDefault();
        $("#div1").show(1000);
    })
    $("#catalogo1").click(function (e) {
        e.preventDefault();
        $("#descripcion1").hide(1000);
    })
//FUNCIONALIDAD CATALOGO SEMILLAS
    $("#hide2").click(function (e) {
        e.preventDefault();
        $("#div1").hide(1000);
    })
    $("#hide2").click(function(){
        $("#descripcion2").show(1000);
    });
    $("#catalogo2").click(function (e) {
        e.preventDefault();
        $("#div1").show(1000);
    })
    $("#catalogo2").click(function (e) {
        e.preventDefault();
        $("#descripcion2").hide(1000);
    })
//FUNCIONALIDAD CATALOGO FERTILIZANTES
    $("#hide3").click(function (e) {
        e.preventDefault();
        $("#div1").hide(1000);
    })
    $("#hide3").click(function(){
        $("#descripcion3").show(1000);
    });
    $("#catalogo3").click(function (e) {
        e.preventDefault();
        $("#div1").show(1000);
    })
    $("#catalogo3").click(function (e) {
        e.preventDefault();
        $("#descripcion3").hide(1000);
    })
//FUNCIONALIDAD MACETEROS
    
});

