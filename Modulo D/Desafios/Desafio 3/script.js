function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade} anos.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 5){
                // bebe
                img.setAttribute('src','imagens/bebehomem.png')
            }else if(idade >= 5 && idade < 16){
                // criança
                img.setAttribute('src','imagens/criancahomem.png')
            }else if(idade < 20){
                // jovem
                img.setAttribute('src','imagens/jovemhomem.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src','imagens/adultohomem.png')
            }else{
                img.setAttribute('src','imagens/idosohomem.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 5){
                // bebe
                img.setAttribute('src','imagens/bebemulher.png')
            }else if(idade >= 5 && idade < 16){
                // criança
                img.setAttribute('src','imagens/criancamulher.png')
            }else if(idade < 20){
                // jovem
                img.setAttribute('src','imagens/jovemmulher.png')
            }else if(idade < 50){
                // adulto
                img.setAttribute('src','imagens/adultomulher.png')
            }else{
                // idoso
               img.setAttribute('src','imagens/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}