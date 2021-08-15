var saldo = window.document.getElementsByClassName('saldo')[0]
var s = Number(saldo = 0)
function depositar(){
    var deposito = window.document.getElementsByClassName('depositar')[0]
    var d = Number(deposito.value)
    var r = window.document.getElementById('res')
    s += d
    r.innerHTML = `${s.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
    alert(`Foi depositado um valor de ${d.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`)
}
function transferir(){
    var transf= window.document.getElementsByClassName('transferir')[0]
    var t = Number(transf.value)
    if (s <= 0){
        alert('Sua conta está sem saldo, imposível fazer transferência!!')
    }else{
    s -= t
    document.getElementById('res').innerHTML = `${s.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
    }
}
