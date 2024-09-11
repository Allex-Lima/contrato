const btnEnviar = document.getElementById('enviar')


const envairContrato = (event) => {
    event.preventDefault()

    const inputServico = document.getElementById('inputServico').value
    const inputNomePrestador = document.getElementById('inputNomePrestador').value
    const inputCNPJ = document.getElementById('inputCNPJ').value

    const inputRua = document.getElementById('inputRua').value
    const inputBairro = document.getElementById('inputBairro').value
    const inputCidade = document.getElementById('inputCidade').value
    const inputCEP = document.getElementById('inputCEP').value

    const dados = {
        servico: inputServico,
        prestador: inputNomePrestador,
        cnpj: inputCNPJ,
        rua: inputRua,
        bairro: inputBairro,
        cidade: inputCidade,
        cep: inputCEP,
    }

    localStorage.setItem('dados', JSON.stringify(dados))

    window.location.href = 'contrato.html'

    
}

btnEnviar.addEventListener('click', envairContrato)