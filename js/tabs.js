(function(){
    var propTabs = {
        first_e: document.getElementById('encabezado-menu').firstElementChild,
        first_c: document.getElementById('contenido-menu').firstElementChild,
        enlace_e: document.querySelectorAll('#encabezado-menu li a'),
        li_encabezado: document.querySelectorAll('#encabezado-menu li'),
        divs_cont: document.querySelectorAll('#contenido-menu > div'),
        cont_act: null
    }
    var metTabs = {
        inicio: function(){
            propTabs.first_e.className = 'active';
            propTabs.first_c.className = 'active';
            for(var i = 0; i < propTabs.enlace_e.length;i++){
                propTabs.enlace_e[i].addEventListener('click',metTabs.evento);
            }
        },
        evento: function(e){
            e.preventDefault();
            for(var i = 0; i < propTabs.li_encabezado.length; i++){
                propTabs.li_encabezado[i].className = '';
            }
            for(var i = 0; i < propTabs.divs_cont.length; i++){
                propTabs.divs_cont[i].className = '';
            }
        }
    }
    metTabs.inicio();
}())
