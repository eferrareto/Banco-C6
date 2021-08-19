var saldo = window.document.getElementsByClassName('saldo')[0]
var deposito = window.document.getElementsByClassName('depositar')[0]
var d = Number(deposito.value)
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
function extrato(){
    var transf= window.document.getElementsByClassName('transferir')[0]
    var t = Number(transf.value)
    var saldo = window.document.getElementsByClassName('saldo')[0]
    var s = Number(saldo = 0)
    var deposito = window.document.getElementsByClassName('depositar')[0]
    var d = Number(deposito.value)
    document.getElementById('foi').innerHTML = `<p><strong>Últimas Transações</strong></p> <p>Hoje</p>`
    document.getElementById('foi').innerHTML +=
    `Valor depositado<br> ${d.toLocaleString('pt-bt',{style:'currency',currency:'BRL'})}<br><br>`
    document.getElementById('foi').style.background = 'white';
    document.getElementById('foi').innerHTML += `Valor transferido<br>${t.toLocaleString('pt-br',{style:'currency', currency:'BRL'})}`
}
function sair(){
    document.getElementById('foi').style.background = 'transparent';
    document.getElementById('foi').innerHTML = '' 
}
