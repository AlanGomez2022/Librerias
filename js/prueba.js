const CAMPOGRAL = 9000
const CAMPODELANTERO = 15000
const CLUB = 0.15
const COSTOS = 2000

const compraTicket = {
        sector:"",
        tipoEntrada:"",
        cantidad:0,
    }



//------------------------------------------------------------------
//compra.hmtl
let campoGral = document.getElementById("campoGeneral");
let campoDelantero =document.getElementById("campoDelantero");
let cuadroInfo = document.getElementById("cuadroInfo");
let form= document.getElementById("form");
form.style.display="none" // ESTO HACE QUE DESAPAREZCA EL HTML 


function evento (campo){
    form.style.display="" //vuelve a verse el formulario
    compraTicket.sector=campo;
    let tituloCampo = document.getElementById("tituloCampo");
    tituloCampo.innerText=` C A M P O    ---       ${campo} `
    let valorNormal = document.getElementById("valorNormal")
    let conDescuento=document.getElementById("conDescuento")

    if (campo=="Delantero"){
        valorNormal.innerText=` NORMAL: \n $ ${CAMPODELANTERO} + $ ${COSTOS} (Costos de servicio) `
        conDescuento.innerText= `Con CLUB PERSONAL: \n $ ${CAMPODELANTERO-CAMPODELANTERO*CLUB} + $ ${COSTOS-COSTOS*CLUB} (Costos de servicio)`    
    }else{
        valorNormal.innerText=` NORMAL: \n$ ${CAMPOGRAL} + $ ${COSTOS} (Costos de servicio) `
        conDescuento.innerText= `Con CLUB PERSONAL: \n$ ${CAMPOGRAL-CAMPOGRAL*CLUB} + $ ${COSTOS-COSTOS*CLUB} (Costos de servicio)`
    
    }
}

campoDelantero.onclick = () => evento("Delantero")
campoGral.onclick = () => evento("General")

let boton = document.getElementById("boton")



boton.onclick = () =>{
    
    let radio1 = document.getElementById("exampleRadios1");
    let radio2 = document.getElementById("exampleRadios2");
    compraTicket.tipoEntrada = radio1.checked ?  radio1.value  : radio2.value;
    compraTicket.cantidad = document.getElementById("select").value
    const {sector, tipoEntrada, cantidad} = compraTicket
    localStorage.setItem("sector",sector)
    localStorage.setItem("tipoEntrada", tipoEntrada)
    localStorage.setItem("cantidad",cantidad)
    
}
