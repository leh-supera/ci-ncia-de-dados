const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Hoje, existem cerca de <span>${pessoasNoMundo} bilhões</span> e  em redes sociais <span>${pessoasConectadas} bilhões</span> estão conectadas,  passando  <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>a porcentagem de pessoas é de <span>${porcentagemConectada}%</span> da população. Em média, os usúarios passam cerca de <span>${dados.tempo_medio}</span> por dia.`
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()