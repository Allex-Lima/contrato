document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.getElementById('titulo')
    const nomePrestador = document.getElementById('nomePrestador')

    const {prestador, servico} = JSON.parse(localStorage.getItem('dados'))

    if(prestador || servico) {
        titulo.textContent = servico
        nomePrestador.textContent = prestador
    }
})