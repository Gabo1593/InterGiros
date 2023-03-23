let inconExit = document.querySelector("#ico-exit")
let cotizarCont = document.querySelector(".cotizar")
let cotizaElPrecio = document.querySelector(".cop")
let moldeBanderas
let divisas = document.getElementById("tasa-de-divisas")
let inputCalcular = document.getElementById("calcular")
let envio = document.getElementById("resivir")
let pEnvias = document.querySelector("#envias")
let claseSkrill = document.querySelector(".skrill")
let dolaresDigitales = document.querySelector(".dolares")
let dolaresTasas = []
let moldeDolares


inconExit.addEventListener("click", cerrarCotizacion)
cotizaElPrecio.addEventListener("click", abrirCotizacion)
dolaresDigitales.addEventListener("click", abrirCotizacion)
 

function cerrarCotizacion(){
    cotizarCont.style.display = "none"
    inputCalcular.value = ""
}


function abrirCotizacion(){
    cotizarCont.style.display = "flex"
}


let bandera = []
class Banderas{
    constructor(flag, tasa, divisaId){
        this.flag = flag
        this.tasa = tasa
        this.divisaId = divisaId
    }
}
let col = new Banderas("./imagenes/cop.png", "207", "copId")
let pen = new Banderas("./imagenes/pen.png", "1.66", "penId")
let clp = new Banderas("./imagenes/clp.jpg", "5.4", "clpId")
let bra = new Banderas("./imagenes/bra.png", "8.5", "braId")
let usd = new Banderas("./imagenes/usd.jpg", "24", "usdId")
let eur = new Banderas("./imagenes/eur.png", "26", "eurId")

bandera.push(col, pen, clp, bra, usd, eur)

bandera.forEach((Banderas)=>{
    moldeBanderas = `
    <div>
    <label for= ${Banderas.divisaId}>
    <img src=${Banderas.flag} alt="">
    <h1>
        Tasa del día 
        ${Banderas.tasa}
    </h1> 
    </label>
    <input type="radio" name="banderas" id= ${Banderas.divisaId}>    
    </div> 
    `
    divisas.innerHTML += moldeBanderas
   
}
)

inputCalcular.addEventListener("keyup", ()=>{
    
    if(copId.checked){
        pEnvias.innerText = "Pagas Pesos colombianos"
        envio.innerText = Number((inputCalcular.value / col.tasa).toFixed(2)) + " B.F"
    }
    else if(penId.checked){
        pEnvias.innerText = "Pagas Soles"
        envio.innerText = Number((inputCalcular.value / pen.tasa).toFixed(2)) + " B.F"
    }
    else if(clpId.checked){
        pEnvias.innerText = "Pagas Pesos chilenos"
        envio.innerText = Number((inputCalcular.value / clp.tasa).toFixed(2)) + " B.F"
    }
    else if(braId.checked){
        pEnvias.innerText = "Pagas Reales"
        envio.innerText =Number((inputCalcular.value * bra.tasa).toFixed(2)) + " B.F"
    }
    else if(usdId.checked){
        pEnvias.innerText = "Pagas Dolares USD"
        envio.innerText = Number((inputCalcular.value * usd.tasa).toFixed(2)) + " B.F"
    }
    else if(eurId.checked){
        pEnvias.innerText = "Pagas Euros"
        envio.innerText = Number((inputCalcular.value * eur.tasa).toFixed(2)) + " B.F"
    } 
    else if(paypalId.checked){
        pEnvias.innerText = "Pagas Dolares Paypal"
        envio.innerText = Number((inputCalcular.value * paypal.tasa).toFixed(2)) +" dolares ó "+ Number((inputCalcular.value * paypal.tasa * usd.tasa).toFixed(2)) + " B.F"
    } 
    else if(skrillId.checked){
        pEnvias.innerText = "Pagas Dolares Skrill"
        envio.innerText = Number((inputCalcular.value * skril.tasa).toFixed(2))  +" dolares ó "+ Number((inputCalcular.value * skril.tasa * usd.tasa).toFixed(2)) + " B.F"
    } 
    else if(zelleId.checked){
        pEnvias.innerText = "Pagas Dolares Zelle"
        envio.innerText = Number((inputCalcular.value * zelle.tasa).toFixed(2))  +" dolares ó "+ Number((inputCalcular.value * zelle.tasa * usd.tasa).toFixed(2)) + " B.F"
    } 
    else if(zinliId.checked){
        pEnvias.innerText = "Pagas Dolares Zinli"
        envio.innerText = Number((inputCalcular.value * zinli.tasa).toFixed(2))  +" dolares ó "+ Number((inputCalcular.value * zinli.tasa * usd.tasa).toFixed(2)) + " B.F"
    } 
    else if(wiseId.checked){
        pEnvias.innerText = "Pagas Dolares Wise"
        envio.innerText = Number((inputCalcular.value * wise.tasa).toFixed(2))  +" dolares ó "+ Number((inputCalcular.value * wise.tasa * usd.tasa).toFixed(2)) + " B.F"
    } 
    else{
        pEnvias.innerText = "Elige una opcion para cotizar"
        envio.innerText = "Elige una opcion para cotizar"
    }
}
)



class DolaresArray{
    constructor(imagen, tasa, dolarId){
        this.imagen = imagen
        this.tasa = tasa
        this.dolarId = dolarId
    }
}

let paypal = new DolaresArray("./imagenes/paypal.jpg", "1.13", "paypalId")
let skril = new DolaresArray("./imagenes/skrill.jpg", "1.08", "skrillId")
let zelle = new DolaresArray("./imagenes/zelle.jpg", "1.08", "zelleId")
let zinli = new DolaresArray("./imagenes/zinli.png", "1.03", "zinliId")
let wise = new DolaresArray("./imagenes/wise.png", "1.03", "wiseId")

dolaresTasas.push(paypal, skril, zelle, zinli, wise)

dolaresTasas.forEach((DolaresArray)=>{
    moldeDolares = `
    <div class="dolares-d">
    <label for=${DolaresArray.dolarId}>
         <div class="dolares--tasas">
           
             <div class="paypal2">
                <img src=${DolaresArray.imagen} alt="">
             </div>
             <div class="paypal">
              
                    <p>Tasa <br>
                        ${DolaresArray.tasa} 
                    </p>
           
                <input type="radio" name="banderas"     id=${DolaresArray.dolarId}>
              </div>
         </div>
         </label>
    </div>
    `
    dolaresDigitales.innerHTML += moldeDolares
   
}
)
