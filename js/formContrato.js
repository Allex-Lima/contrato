const btnEnviar = document.getElementById('enviar')


const envairContrato = (event) => {
    event.preventDefault()

    let inputServico = document.getElementById('inputServico').value
    let inputNomePrestador = document.getElementById('inputNomePrestador').value

    const dados = {
        servico: inputServico,
        prestador: inputNomePrestador
    }

    localStorage.setItem('dados', JSON.stringify(dados))

    window.location.href = 'contrato.html'

    
}

btnEnviar.addEventListener('click', envairContrato)