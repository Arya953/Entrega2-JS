document.getElementById("carritoIcon").addEventListener("click", ()=>{
    document.getElementById("carrito").classList.toggle("active")
})

const EjerciciosTrenSuperior =[
    {
        id: 1,
        nombre: "Curl Bíceps",
        categoria: "Tren Superior",
        img: "../imagenes/curl-biceps.png",
        Kcal: 0.4,
    },
    {
        id: 2,
        nombre: "Press Militar",
        categoria: "Tren Superior",
        img: "../imagenes/press-militar.png",
        Kcal: 0.5,
    },
    {
        id: 3,
        nombre: "Extensión Tríceps",
        categoria: "Tren Superior",
        img: "../imagenes/extension-triceps.png",
        Kcal: 0.4,
    },
    {
        id: 4,
        nombre: "Push Up",
        categoria: "Tren Superior",
        img: "../imagenes/push-up.png",
        Kcal: 0.6,
    }
]

const EjerciciosTrenInferior = [
    {
        id: 5,
        nombre: "Squat",
        categoria: "Tren Inferior",
        img: "../imagenes/squat.png",
        Kcal: 0.7,
    },
    {
        id: 6,
        nombre: "Estocada con Mancuerna",
        categoria: "Tren Inferior",
        img: "../imagenes/estocada.png",
        Kcal: 0.8,
    },
    {
        id: 7,
        nombre: "Extensión de Cuádriceps",
        categoria: "Tren Inferior",
        img: "../imagenes/extension-cuadriceps.png",
        Kcal: 0.4,
    },
    {
        id: 8,
        nombre: "Curl Femoral",
        categoria: "Tren Inferior",
        img: "../imagenes/curl-femoral.png",
        Kcal: 0.4,
    }
]

const EjerciciosCORE = [
    {
        id: 9,
        nombre: "Plancha",
        categoria: "CORE",
        img: "../imagenes/plancha.png",
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
        img: "../imagenes/abds-V.jpeg",
        Kcal: 0.6,
    },
    {
        id: 12,
        nombre: "Puente de Gluteos",
        categoria: "CORE",
        img: "../imagenes/puente-gluteo.png",
        Kcal: 0.4,
    }
]

const productos = document.getElementById ("productos")
const treninferior = document.getElementById ("treninferior")
const core = document.getElementById ("core")

document.addEventListener ("DOMContentLoaded", () =>{
    EjerciciosTrenSuperior.forEach(el => {
            productos.innerHTML +=
            `
                <div id="${el.id}" class="producto">
                    <h3>${el.nombre}</h3>
                    <div><img src="${el.img}"></div>
                    <p>Kcal por repeticion: <span>${el.Kcal}</span>Kcal</p>
                    <p>Categoría:${el.categoria}</p>
                    <button class="botonAgregador">Agregar</button>
                </div>
            `
    })
})

document.addEventListener ("DOMContentLoaded", () =>{
    EjerciciosTrenInferior.forEach(el => {
            treninferior.innerHTML +=
            `
                <div id="${el.id}" class="producto">
                    <h3>${el.nombre}</h3>
                    <div><img src="${el.img}"></div>
                    <p>Kcal por repeticion: <span>${el.Kcal}</span>Kcal</p>
                    <p>Categoría:${el.categoria}</p>
                    <button class="botonAgregador">Agregar</button>
                </div>
            `
    })
})

document.addEventListener ("DOMContentLoaded", () =>{
    EjerciciosCORE.forEach(el => {
            core.innerHTML +=
            `
                <div id="${el.id}" class="producto">
                    <h3>${el.nombre}</h3>
                    <div><img src="${el.img}"></div>
                    <p>Kcal por repeticion: <span>${el.Kcal}</span>Kcal</p>
                    <p>Categoría:${el.categoria}</p>
                    <button class="botonAgregador">Agregar</button>
                </div>
            `
    })
})