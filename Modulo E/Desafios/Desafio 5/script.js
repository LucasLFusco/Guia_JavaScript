function tabuada(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabuada')
    if (num.value.length == 0){
        alert('Por favor, digite um Número')
    } else {
        let n = Number(num.value)
        tab.innerHTML = '' //Limpar o texto
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
    
}