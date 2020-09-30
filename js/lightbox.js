(function(){
    //Objeto con las Propiedades
    var propLight =
    {
        imgContainer: document.getElementsByClassName('lightbox'),
        img: null,
        imgSrc: null,
        bodyDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        modal: null,
        cerrarModal: null,
        animacion: 'fade'
    }
    //Objeto con los Métodos
var metLight = 
{
    inicio: function(){
        for(var i = 0; i < propLight.imgContainer.length; i++){
            propLight.imgContainer[i].addEventListener('click', metLight.capturaImg);
        }
    },
    capturaImg: function(){
        propLight.img = this;
        metLight.lightbox(propLight.img);
    },
    lightbox: function(img){
        propLight.imgSrc = window.getComputedStyle(img, null).backgroundImage.slice(5, -2);
        propLight.bodyDom.appendChild(document.createElement('DIV')).setAttribute('id','lightbox_container');
        propLight.lightbox_container = document.getElementById('lightbox_container');
        propLight.lightbox_container.style.width = '100%';
        propLight.lightbox_container.style.height = '100%';
        propLight.lightbox_container.style.position = 'fixed';
        propLight.lightbox_container.style.zIndex = '1000';
        propLight.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLight.lightbox_container.style.top = '0';
        propLight.lightbox_container.style.left = '0';
        propLight.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id','modal');
        propLight.modal = document.getElementById('modal');
        propLight.modal.style.heigh = '100%';
        propLight.modal.appendChild(document.createElement('IMG')).setAttribute('src',propLight.imgSrc);
        propLight.modal.getElementsByTagName('img')[0].setAttribute('class','img-modal');
        if(propLight.animacion == 'fade'){
            document.getElementsByClassName('img-modal')[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName('img-modal')[0].style.opacity = 1;
            }, 50);
        }
        propLight.modal.innerHTML += '<i id="close-modal" class="fas fa-times-circle"></i>';
        propLight.cerrarModal = document.getElementById('close-modal');
        propLight.cerrarModal.addEventListener('click', metLight.cerrarModal);
    },
    cerrarModal: function(){
        propLight.bodyDom.removeChild(propLight.lightbox_container);
    }
}
metLight.inicio();
}())


