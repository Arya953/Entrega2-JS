document.getElementById("rutinaIcon").addEventListener("click", () => {
    document.getElementById("rutina").classList.toggle("active");
});

document.addEventListener('click', (event) => {
    if (!rutina.contains(event.target) && event.target !== rutinaIcon) {
        rutina.classList.remove('active');
    }
});


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
