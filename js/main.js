document.getElementById("rutinaIcon").addEventListener("click", () => {
    document.getElementById("rutina").classList.toggle("active");
});

document.addEventListener('click', (event) => {
    if (!rutina.contains(event.target) && event.target !== rutinaIcon) {
        rutina.classList.remove('active');
    }
});

let rutina = [];

const EjerciciosTrenSuperior = [
    {
        id: 1,
        nombre: "Curl Bíceps",
        categoria: "Tren Superior",
        img: "./imagenes/curl-biceps.png",
        Kcal: 0.4,
    },
    {
        id: 2,
        nombre: "Press Militar",
        categoria: "Tren Superior",
        img: "./imagenes/press-militar.png",
        Kcal: 0.5,
    },
    {
        id: 3,
        nombre: "Extensión Tríceps",
        categoria: "Tren Superior",
        img: "./imagenes/extension-triceps.png",
        Kcal: 0.4,
    },
    {
        id: 4,
        nombre: "Push Up",
        categoria: "Tren Superior",
        img: "./imagenes/push-up.png",
        Kcal: 0.6,
    }
]

const EjerciciosTrenInferior = [
    {
        id: 5,
        nombre: "Squat",
        categoria: "Tren Inferior",
        img: "./imagenes/squat.png",
        Kcal: 0.7,
    },
    {
        id: 6,
        nombre: "Estocada con Mancuerna",
        categoria: "Tren Inferior",
        img: "./imagenes/estocada.png",
        Kcal: 0.8,
    },
    {
        id: 7,
        nombre: "Extensión de Cuádriceps",
        categoria: "Tren Inferior",
        img: "./imagenes/extension-cuadriceps.png",
        Kcal: 0.4,
    },
    {
        id: 8,
        nombre: "Curl Femoral",
        categoria: "Tren Inferior",
        img: "./imagenes/curl-femoral.png",
        Kcal: 0.4,
    }
]

const EjerciciosCORE = [
    {
        id: 9,
        nombre: "Plancha",
        categoria: "CORE",
        img: "./imagenes/plancha.png",
        Kcal: 4,
    },
    {
        id: 10,
        nombre: "Plancha Carpa",
        categoria: "CORE",
        img: "./imagenes/plancha-carpa.png",
        Kcal: 4.5,
    },
    {
        id: 11,
        nombre: "Abdominales en V",
        categoria: "CORE",
        img: "./imagenes/abds-V.jpeg",
        Kcal: 0.6,
    },
    {
        id: 12,
        nombre: "Puente de Glúteos",
        categoria: "CORE",
        img: "./imagenes/puente-gluteo.png",
        Kcal: 0.4,
    }
]

const productos = document.getElementById("productos")
const treninferior = document.getElementById("treninferior")
const core = document.getElementById("core")
const productosrutina = document.getElementById("productosrutina");
const finalizarEntrenamientoBtn = document.getElementById ("finalizarEntrenamiento");

productos.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("botonAgregador")) {
        agregarARutina(evento.target);
    }
})

treninferior.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("botonAgregador")) {
        agregarARutina(evento.target);
    }
})

core.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("botonAgregador")) {
        agregarARutina(evento.target);
    }
})

finalizarEntrenamientoBtn.addEventListener("click", finalizarEntrenamiento);

function agregarARutina(boton) {
    const producto = boton.parentElement;
    const nombre = producto.children[0].innerText;
    const Kcal = Number(producto.children[2].children[0].innerText);

    const productoExistente = rutina.find(item => item.nombre === nombre)

    if (productoExistente){
        productoExistente.cantidad += 1;
    } else {
        rutina.push({
            nombre: nombre,
            Kcal: Kcal,
            cantidad: 1,
        })
    }

    Swal.fire({
        title: '¡Agregado!',
        text: `${nombre} fue añadido al seguimiento.`,
        icon: 'success',
        confirmButtonText: 'Entendido'
    });

    actualizarrutina()
}

function actualizarrutina() {
    productosrutina.innerHTML = "";
    rutina.forEach((el, index) => {
        productosrutina.innerHTML += `
            <div class="producto">
                <h3>${el.nombre}</h3>
                <p>Calorías: ${el.Kcal}</p>
                <p>Repeticiones: ${el.cantidad}</p>
                <button class="botonEliminar" data-index="${index}">X</button>
            </div>
        `
    })

    localStorage.setItem("rutina", JSON.stringify(rutina));

    total.innerText = rutina.reduce((acc, el)=>{
        return acc + el.Kcal * el.cantidad   
    }, 0);

    const botonesEliminar = document.querySelectorAll(".botonEliminar");
    botonesEliminar.forEach(boton=> {
        boton.addEventListener("click", eliminarDeLaRutina)
    })
}

function eliminarDeLaRutina(evento) {
  const index = evento.target.getAttribute("data-index");

  Swal.fire({
      title: '¿Estás seguro?',
      text: 'El ejercicio será eliminado del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
  }).then((result) => {
      if (result.isConfirmed) {
          rutina.splice(index, 1);
          actualizarrutina();
          Swal.fire(
              'Eliminado',
              'El ejercicio ha sido eliminado.',
              'success'
          );
      }
  });
}

function finalizarEntrenamiento(){
    const caloriasTotales = rutina.reduce ((acc, el)=> acc + el.Kcal * el.cantidad, 0);
  
    Swal.fire({
      title: "¡Enhorabuena!",
      text: `Has gastado ${caloriasTotales.toFixed(2)} calorías. ¡Sigue asi!`,
      icon:"success",
      confirmButtonText: "Entendido",
    })
  
    rutina = [];
    actualizarrutina();
  }

document.addEventListener("DOMContentLoaded", () => {
    const rutinaGuardada = localStorage.getItem("rutina");
    if (rutinaGuardada) {
        rutina =JSON.parse(rutinaGuardada);
        actualizarrutina ()
    }

    EjerciciosTrenSuperior.forEach((el) => {
        productos.innerHTML += `
            <div id="${el.id}" class="producto">
                <h3>${el.nombre}</h3>
                <div><img src="${el.img}" alt="${el.nombre}"></div>
                <p>Kcal por repetición: <span>${el.Kcal}</span>Kcal</p>
                <p>Categoría: ${el.categoria}</p>
                <button class="botonAgregador">Agregar</button>
            </div>
        `;
    });

    EjerciciosTrenInferior.forEach((el) => {
        treninferior.innerHTML += `
            <div id="${el.id}" class="producto">
                <h3>${el.nombre}</h3>
                <div><img src="${el.img}" alt="${el.nombre}"></div>
                <p>Kcal por repetición: <span>${el.Kcal}</span>Kcal</p>
                <p>Categoría: ${el.categoria}</p>
                <button class="botonAgregador">Agregar</button>
            </div>
        `
    })

    EjerciciosCORE.forEach((el) => {
        core.innerHTML += `
            <div id="${el.id}" class="producto">
                <h3>${el.nombre}</h3>
                <div><img src="${el.img}" alt="${el.nombre}"></div>
                <p>Kcal por repetición: <span>${el.Kcal}</span>Kcal</p>
                <p>Categoría: ${el.categoria}</p>
                <button class="botonAgregador">Agregar</button>
            </div>
        `
    })
})
