(function(){
    var propTabs = {
        first_e: document.getElementById('encabezado-menu').firstElementChild,
        first_c: document.getElementById('contenido-menu').firstElementChild,
        enlace_e: document.querySelectorAll('#encabezado-menu li a'),
    }
    var metTabs = {
        inicio: function(){
            propTabs.first_e.className = 'active';
            propTabs.first_c.className = 'active';
            for(var i = 0; i < propTabs.enlace_e.length;i++){
                propTabs.enlace_e[i].addEventListener('click',metTabs.evento);
            }
        },
        evento: function(){
            
        }
    }
    metTabs.inicio();
}())
