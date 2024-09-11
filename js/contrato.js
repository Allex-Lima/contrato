document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.getElementById('titulo')
    const nomePrestador = document.getElementById('nomePrestador')
    const numCnpj = document.getElementById('numCnpj')
    const nomeRua = document.getElementById('nomeRua')
    const nomeBairro = document.getElementById('nomeBairro')
    const nomeCidade = document.getElementById('nomeCidade')
    const numCEP = document.getElementById('numCEP')

    const {bairro, cep, cidade, cnpj, rua, prestador, servico} = JSON.parse(localStorage.getItem('dados'))

    if(prestador || servico || numCnpj || rua) {
        titulo.textContent = servico
        nomePrestador.textContent = prestador
        numCnpj.textContent = formataCNPJ(cnpj)
        nomeRua.textContent = rua
        nomeBairro.textContent = bairro
        nomeCidade.textContent = cidade
        numCEP.textContent = formataCEP(cep)


    }
})

const formataCNPJ = (valor) => {
    const valorLimpo = valor.replace(/\D/g, '')

    if (valorLimpo.length !== 14) return 'CNPJ inválido.'

    return valor.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5")
}

const formataCEP = (valor) => {
    const valorLimpo = valor.replace(/\D/g, '')

    if (valorLimpo.length !== 8) return 'CEP INVÁLIDO.'

    return valor.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1.$2-$3")
}