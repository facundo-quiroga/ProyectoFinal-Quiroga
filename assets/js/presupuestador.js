let disenoMarca = 
    {
        id:0,
        nombre:"",
        color:"",
        imagen:"",
        precio:4000,
        cant:0,
    }


let diseñoGrafico = [
    {
        id:1,
        nombre:"Redes sociales",
        precio:2000,
        cant:0,

    },{
        id:2,
        nombre:"Anucios en medios gráficos",
        precio:2500,
        cant:0,

    },{
        id:3,
        nombre:"Imagenes para Whatsapp",
        precio:2000,
        cant:0,

    },
]

let diseñoAudiovisual = [
    {
        id:4,
        nombre:"Stories",
        precio:10000,
        cant:0,

    },{
        id:5,
        nombre:"Anucios en TV y YouTube",
        precio:15000,
        cant:0,

    },{
        id:6,
        nombre:"Videos institucionales",
        precio:20000,
        cant:0,

    },
]

const montoMinimoDescuento = 55000;

function mostrarAlertaUsuario (){

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Ya posees un usuario?',
        text: "Si ya haz creado un usuario, posiblemente se encuentre en nustra base de datos, ahorra tiempo y cotiza más rápido",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, tengo usuario',
        cancelButtonText: 'No, quiero crear uno!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            recuperarDatos();
          swalWithBootstrapButtons.fire(
            'Revisemos nuestra base de datos!',
            'Puedes modificar cualquier dato en el formulario',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
            window.localStorage.clear();
            recuperarDatos();
          swalWithBootstrapButtons.fire(
            'Creemos un usuario',
            '',
            'success'
          )
        }
      })
}
mostrarAlertaUsuario ();


////Recuperar Datos
function recuperarDatos(){
    let nombre = localStorage.getItem("nombre");
    let edad = localStorage.getItem("edad");
    let provincia = localStorage.getItem("provincia");
    let email = localStorage.getItem("email");
    let telefono = localStorage.getItem("telefono");
    if (nombre!=null){

        document.getElementById("datos1").innerHTML= '<p>Comencemos con información sobre vos:</p><label for="nombreCompleto" class="form-label">Nombre completo:</label><input  type="text" class="form-control" id="nombreCompleto" value='+nombre+
        ' required><div hidden class ="text-danger validacion" id="validacionNombre">Complete Nombre</div><label for="edad" class="form-label">Edad</label><input required type="number" class="form-control" id="edad"value='+edad+
        ' ><div hidden class ="text-danger validacion" id="validacionEdad">Complete edad</div><label for="provincia" class="form-label">Provincia</label><select required id="provincia" class="form-select" aria-label="Default select example"><option selected>'+provincia+
        '</option><option value="mi">Misiones</option><option value="sl">San Luis</option><option value="sj">San Juan</option><option value="er">Entre Ríos</option><option value="sc">Santa Cruz</option><option value="rn">Río Negro</option><option value="chu">Chubut</option><option value="co">Córdoba</option><option value="mn">Mendoza</option><option value="lr">La Rioja</option><option value="ct">Catamarca</option><option value="lp">La Pampa</option><option value="se">Santiago del Estero</option><option value="ct">Corrientes</option><option value="sf">Santa Fe</option><option value="tu">Tucumán</option><option value="ne">Neuquén</option><option value="sa">Salta</option><option value="cha">Chaco</option><option value="fo">Formosa</option><option value="ju">Jujuy</option><option value="caba">Ciudad Autónoma de Buenos Aires</option><option value="ba">Buenos Aires</option><option value="tf">Tierra del Fuego</option></select><div hidden class ="text-danger validacion" id="validacionProvincia">Complete provincia</div><label required for="email" class="form-label">Email</label><input type="email" class="form-control" id="email" value='+email+
        ' aria-describedby="emailHelp"><div required id="emailHelp" class="form-text">No compartiremos tu mail con nadie.</div><div hidden class ="text-danger validacion" id="validacionEmail">Complete email</div><label for="telfono" class="form-label">Telefono</label><input required type="tel" class="form-control" id="telefono" value='+telefono+
        '><div hidden class ="text-danger validacion" id="validacionTelefono">Complete telefono</div><div class="mt-3 mb-4">'
         }
}



////Validar Datos

function validarDatos(){
    document.getElementsByClassName("validacion").hidden = false;
    let nombre = document.getElementById("nombreCompleto").value;
    let edad = document.getElementById("edad").value;
    let provincia = document.getElementById("provincia").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let marca = document.getElementById("marca").value;
    let flyers = document.getElementById("flyers").value;
    let videos = document.getElementById("videos").value;
    if (nombre==""){
        document.getElementById("validacionNombre").removeAttribute("hidden");
        return false;
    };

    if (edad==""){
        document.getElementById("validacionEdad").removeAttribute("hidden");
        return false;
    };
    if (provincia==""){
        document.getElementById("validacionProvincia").removeAttribute("hidden");
        return false;
    };
    if (email==""){
        document.getElementById("validacionEmail").removeAttribute("hidden");
        return false;
    };
    if (telefono==""){
        document.getElementById("validacionTelefono").removeAttribute("hidden");
        return false;
    };
    if (marca==""){
        document.getElementById("validacionMarca").removeAttribute("hidden");
        return false;
    };if (flyers==""){
        document.getElementById("validacionFlyers").removeAttribute("hidden");
        return false;
    };
    if (videos==""){
        document.getElementById("validacionAudiovisual").removeAttribute("hidden");
        return false;
    }
    document.getElementById("datos").hidden = true;

    let nombreEnJSON = JSON.stringify(nombre);
    let edadEnJSON = JSON.stringify(edad);
    let provinciaEnJSON = JSON.stringify(provincia);
    let emailEnJSON = JSON.stringify(email);
    let telefonoEnJSON = JSON.stringify(telefono);

    localStorage.setItem("nombre", nombreEnJSON);
    localStorage.setItem("edad",edadEnJSON);
    localStorage.setItem("provincia",provinciaEnJSON);
    localStorage.setItem("email",emailEnJSON);
    localStorage.setItem("telefono",telefonoEnJSON);

    botonPresupuestarAccion();
    obtenerMarca();
    obtenerFlyers();
    obtenerVideos();
    


}

botonDatos.addEventListener("click", validarDatos);


///////Marcas

function obtenerMarca() {
    let marcaSi = document.getElementById("marca").value;

    if (marcaSi == "si") {
        document.getElementById("seccionMarca").removeAttribute("hidden");

    } ;
    }



//////Flyers

function obtenerFlyers() {
    let flyersSi = document.getElementById("flyers").value;

    if (flyersSi == "si") {
        document.getElementById("seccionFlyers").removeAttribute("hidden");
    } ;
    }

//////Videos

function obtenerVideos() {
    let videosSi = document.getElementById("videos").value;

    if (videosSi == "si") {
        document.getElementById("seccionVideos").removeAttribute("hidden"); 
    } 

    ;}

////Boton presupuestar

function botonPresupuestarAccion() {

        document.getElementById("botonPresupuestar").removeAttribute("hidden");

        }


///////////  Validar Presupuestar
botonPresupuestar.addEventListener("click", validarPresupuesto);

function validarPresupuesto(){

    let marcaSi = document.getElementById("marca").value;
    let flyersSi = document.getElementById("flyers").value;
    let videosSi = document.getElementById("videos").value;


    if (marcaSi == "si"){
        validarMarca();
    };
    if (flyersSi == "si") {
        validarFlyers()
    };
    if (videosSi == "si"){
        validarVideos()
    };

}

function validarMarca(){
    let nombreMarca = document.getElementById("nombreMarca").value;
    let marcaColor= document.getElementById("marcaColor").value;

    if (nombreMarca==""){
        document.getElementById("validacionMarca2").removeAttribute("hidden");
        return false;
    }
    if (marcaColor==""){
        document.getElementById("validacionColor").removeAttribute("hidden");
        return false;
    }
    
}

function validarFlyers(){

    let flyersSemanales= document.getElementById("flyersSemanales").value;
    let anunciosMenusales= document.getElementById("anunciosMenusales").value;
    let flyersWhatsapp= document.getElementById("flyersWhatsapp").value;

    if (flyersSemanales==""){
        document.getElementById("validacionFlyersSemanales").removeAttribute("hidden");
        return false;
    };
    if (anunciosMenusales==""){
        document.getElementById("validacionAnunciosMensuales").removeAttribute("hidden");
        return false;
    };
    if (flyersWhatsapp==""){
        document.getElementById("validacionFlyersWhatsapp").removeAttribute("hidden");
        return false;
    }
    cotizar ()

}

function validarVideos(){
    let storiesSemanales= document.getElementById("storiesSemanales").value;
    let videoAnunciosMenusales= document.getElementById("videoAnunciosMenusales").value;
    let videosInstitucionalesMenusales= document.getElementById("videosInstitucionalesMenusales").value;

    if (storiesSemanales==""){
        document.getElementById("validacionStories").removeAttribute("hidden");
        return false;
    };
    if (videoAnunciosMenusales==""){
        document.getElementById("validacionAunciosMensuelaes").removeAttribute("hidden");
        return false;
    };
    if (videosInstitucionalesMenusales==""){
        document.getElementById("videosInstitucionalesMenusales").removeAttribute("hidden");
        return false;
    };
    cotizar ()
}


function cotizar(){
    mostrarAlertaConfirmacion()
    cotizarMarca() 
    cotizarflyers() 
    cotizarAnunciosGraficos() 
    cotizarWhatsapp() 
    cotizarStories() 
    cotizarAnunciosAudiovisuales() 
    cotizarVideosInstitucionales() 
    cotizacionTotal() 

}


function mostrarAlertaConfirmacion (){
    Swal.fire({
        title: '¿Listo para cotizar?',
        text: "Vamos a mostrarte un presupuesto aproximado de los servicios que necesitas, pero nuestros asesores pueden ayudarte a ajustar cualquier detalle especial que veas",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero mi cotización!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Presupuesto listo!',
            'Echale un vistazo y dinos qué te parece o abona y comienza a trabajar con nosotros',
            'success'
          )
        }
        
      })
}

/////PresupuestoMarca

function cotizarMarca() {
let marcaSi = document.getElementById("marca").value;
let costoMarca = "";

if (marcaSi == "si") {
    costoMarca = disenoMarca.precio;
    document.getElementById("incluiMarca").hidden = true;
    disenoMarca.cant = 1;

} else if (marcaSi == "no") {
    costoMarca = "0"}
    else if (marcaSi == "-") {
        costoMarca = "0"}

let contenido = costoMarca;
console.log(disenoMarca)

document.getElementById("cotizacionMarca").innerHTML = contenido;
document.getElementById("datos").hidden = true;
document.getElementById("secciones").hidden = true;
document.getElementById("cotizacion").hidden = false}



///Presupuesto Diseño gráfico
/////Costo Flyers

function cotizarflyers() {
let flyersSemanales = document.getElementById("flyersSemanales").value;
diseñoGrafico[0].cant = flyersSemanales;

let costoFlyers = flyersSemanales *diseñoGrafico[0].precio;

document.getElementById("costoFlyers").innerHTML = costoFlyers;}


/////Costo anuncios gráficos

function cotizarAnunciosGraficos() {
let anunciosMenusales = document.getElementById("anunciosMenusales").value;
diseñoGrafico[1].cant = anunciosMenusales

let costoAnunciosGraficos = anunciosMenusales *diseñoGrafico[1].precio;
document.getElementById("costoAnunciosGraficos").innerHTML = costoAnunciosGraficos;}


/////Costo imágenes whatsapp

function cotizarWhatsapp() {
let graficosWhatsapp = document.getElementById("flyersWhatsapp").value;
diseñoGrafico[2].cant = graficosWhatsapp

let costograficosWhatsapp = graficosWhatsapp *diseñoGrafico[2].precio;

document.getElementById("costoWhatsappGrafico").innerHTML = costograficosWhatsapp;
console.log(diseñoGrafico)
}



///Presupuesto diseño Audiovisual
/////Costo stories

function cotizarStories() {
let storiesSemanales = document.getElementById("storiesSemanales").value;
diseñoAudiovisual[0].cant = storiesSemanales
let costoStories = storiesSemanales *diseñoAudiovisual[0].precio;

document.getElementById("costoStoriesSemanales").innerHTML = costoStories;
return costoStories;}

/////Costo anuncios audiovisuales

function cotizarAnunciosAudiovisuales() {
let videoAnunciosMensuales = document.getElementById("videoAnunciosMenusales").value;
diseñoAudiovisual[1].cant = videoAnunciosMensuales

let costoVideoAnunciosMensuales = videoAnunciosMensuales *diseñoAudiovisual[1].precio;

document.getElementById("costoVideoAnunciosMenusales").innerHTML = costoVideoAnunciosMensuales;}

/////Costo videos institucionales

function cotizarVideosInstitucionales() {
let videosInstitucionales = document.getElementById("videosInstitucionalesMenusales").value;
diseñoAudiovisual[2].cant = videosInstitucionales

let costoVideosInstitucionalesMensuales = videosInstitucionales *diseñoAudiovisual[2].precio;

document.getElementById("costoVideosIntitucionales").innerHTML = costoVideosInstitucionalesMensuales;
console.log(diseñoAudiovisual)}

/// Presupuesto Total


function cotizacionTotal() {
    
    let marcaSi = document.getElementById("marca").value;
    let costoMarca =0 ;
        if (marcaSi == "si") {
            costoMarca = disenoMarca.precio;

        } else if (marcaSi == "no") {
            costoMarca = 0
            document.getElementById("incluiMarca").removeAttribute("hidden");
        }
            else if (marcaSi == "-") {
                costoMarca =0
                document.getElementById("incluiMarca").removeAttribute("hidden");
            }

    document.getElementById("cotizacion").removeAttribute("hidden");
    let flyersSemanales = document.getElementById("flyersSemanales").value;
    document.getElementById("cantFlyersRedes").innerHTML=flyersSemanales;


        let costoFlyers = flyersSemanales *diseñoGrafico[0].precio;

    let anunciosMenusales = document.getElementById("anunciosMenusales").value;
    document.getElementById("cantFlyersGraficos").innerHTML=anunciosMenusales;


        let costoAnunciosGraficos = anunciosMenusales *diseñoGrafico[1].precio;

    let graficosWhatsapp = document.getElementById("flyersWhatsapp").value;
    document.getElementById("cantFlyersWhatsapp").innerHTML=graficosWhatsapp;


        let costograficosWhatsapp = graficosWhatsapp *diseñoGrafico[2].precio;

    let storiesSemanales = document.getElementById("storiesSemanales").value;
    document.getElementById("cantStoriesSemanales").innerHTML=storiesSemanales;

        let costoStories = storiesSemanales *diseñoAudiovisual[0].precio;

    let videoAnunciosMensuales = document.getElementById("videoAnunciosMenusales").value;
    document.getElementById("cantVideoAnunciosMensuales").innerHTML=videoAnunciosMensuales;

        let costoVideoAnunciosMensuales = videoAnunciosMensuales *diseñoAudiovisual[1].precio;

    let videosInstitucionales = document.getElementById("videosInstitucionalesMenusales").value;
    document.getElementById("cantVideosInstitucionales").innerHTML=videosInstitucionales;


        let costoVideosInstitucionalesMensuales = videosInstitucionales *diseñoAudiovisual[2].precio;
 

    let costoGrafico = costoFlyers+costoAnunciosGraficos+costograficosWhatsapp
    console.log(costoGrafico)
    if (costoGrafico > 0) {
        document.getElementById("incluiFlyers").hidden = true;}

    let costoAudiovisual = costoStories+costoVideoAnunciosMensuales+costoVideosInstitucionalesMensuales

    if (costoAudiovisual > 0) {
        document.getElementById("incluiVideos").hidden = true;}


    let costoTotal = costoMarca+costoFlyers+costoAnunciosGraficos+costograficosWhatsapp+costoStories+costoVideoAnunciosMensuales+costoVideosInstitucionalesMensuales

    if (costoTotal >= montoMinimoDescuento) {
        let descuento = costoTotal * 0.2
        costoTotal = costoTotal - descuento;
        document.getElementById("textoDescuento").removeAttribute("hidden");
        document.getElementById("montoDecuento").innerHTML=descuento;
    
    }



    document.getElementById("costoGrafico").innerHTML=costoGrafico
    document.getElementById("costoAudiovisual").innerHTML=costoAudiovisual
    document.getElementById("total").innerHTML=costoTotal
    document.getElementById("cotizacion").removeAttribute("hidden");


    let marcaenJSON = JSON.stringify(disenoMarca);
    let graficoenJSON = JSON.stringify(diseñoGrafico);
    let audiovisualenJSON = JSON.stringify(diseñoAudiovisual);

    localStorage.setItem("DiseñoMarca", marcaenJSON);
    localStorage.setItem("DiseñoGrafico",graficoenJSON);
    localStorage.setItem("DiseñoAudiovisual",audiovisualenJSON);



    }

// Acceder a un JSON
 fetch('../assets/js/comentarios.json')
.then((response) => response.json())
.then((data) => {
    const resultado = document.getElementById("comentarios");
    data.forEach(valor => {
        let columna = document.createElement("div");
        columna.className = "row justify-items-center m-1 col-md-3";
        let div_padre = document.createElement("div");
        div_padre.className = "card";
        let div_hijo1 = document.createElement("div");
        div_hijo1.className = "card-header bg-warning pl-0 text-center";
        let div_hijo2 = document.createElement("div");
        div_hijo2.className = "card-body text-center justify-content-around";
        let parrafo = document.createElement("p");
        div_hijo1.innerHTML = `<b> ${valor.nombre} </b> <br> ${valor.empresa}`;
        parrafo.innerText = valor.comentario;
        let imagen = document.createElement("img");
        imagen.src = valor.imagen;
        imagen.width = 100;
        div_hijo2.appendChild(parrafo);
        div_hijo2.appendChild(imagen);
        div_padre.appendChild(div_hijo1);
        div_padre.appendChild(div_hijo2);
        columna.appendChild(div_padre);
        resultado.appendChild(columna);
    });
})








    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
