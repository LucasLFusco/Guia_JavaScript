function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if(hora >=6 && hora < 12){
        // bom dia
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#F6D900'
    }else if(hora >=12 && hora <= 18){
        // boa tarde
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#c0442a'
    }else{
        // boa noite
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#1a2b33'
    }
}
