const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');
const totalTareas = document.getElementById('totalTareas');
const tareasRealizadas = document.getElementById('tareasRealizadas');

const variasTareas = [
    { id: 1, nombre: "Hacer compras", completed: false},
    { id: 2, nombre: "Estudiar", completed: false},
    { id: 3, nombre: "Alimentar al perro", completed: false},
    { id: 4, nombre: "Regar plantas", completed: false},
    { id: 5, nombre: "Preparar bolso para viaje", completed: false},
];

//Para agregar tarea
btn.addEventListener( 'click', () => {
if (input.value === '') return
variasTareas.push({
    id: variasTareas.length + 1, 
    nombre: input.value,
    completed: false
});
input.value = ''
mostrar()
})

//Para mostrar las tareas a realizar en el HTML
const mostrar = () =>{
    let template = ''
    for (const tarea of variasTareas){
        template += `<li>
        ${tarea.id} - ${tarea.nombre}
        <input type="checkbox" 
            ${tarea.completed ? 'checked' : ''} 
            onclick="cambiarStatus(${tarea.id})">
        <button onclick="borrarTarea(${tarea.id})">borrar</button>
        </li>`
    }
    list.innerHTML = template
    actualizarContadores();
}

//Para agregar tarea
function borrarTarea(id) {
    let tareaParaBorrar = variasTareas.findIndex(i => i.id === id);

    if(tareaParaBorrar !== -1){
        variasTareas.splice(tareaParaBorrar, 1);
        mostrar();
    }
}

//Para cambiar el estado de las tareas
const cambiarStatus = (id) => {
    const tarea = variasTareas.find((e) => e.id === id);
    if (tarea) {
        tarea.completed = !tarea.completed;
        mostrar();
    }
};

//Para actualizar el conteo
const actualizarContadores = () => {
    const tareasCompletadas = variasTareas.filter( tarea => tarea.completed).length
    totalTareas.innerHTML = variasTareas.length;
    tareasRealizadas.innerHTML = tareasCompletadas;
}


mostrar();
