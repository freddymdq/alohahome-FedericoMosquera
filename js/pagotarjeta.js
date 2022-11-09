const tarjeta =document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta');
	 

// MOSTRAR FRENTE TARJETA.
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active')
    }
}

// BTN ABRIR FORMULARIO
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active')
})

// ROTAR TARJETA
tarjeta.addEventListener('click', ()=>{
    tarjeta.classList.toggle('active');
});
