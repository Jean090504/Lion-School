'use strict'

import { getAlunosPorCurso, getAluno } from './api.js'

window.addEventListener('DOMContentLoaded', () => {
    entradaCursos()

    const btnSair = document.querySelector('.btn-sair')

    btnSair.addEventListener('click', () => {
        entradaCursos()
    })
})

function entradaCursos() {
    const main = document.querySelector('main')
    main.textContent = ''

    const section = document.createElement('section')
    section.id = 'home';
    section.classList.add('pagina', 'ativa')

    const container = document.createElement('div')
    container.classList.add('home-container')

    const content = document.createElement('div')
    content.classList.add('home-content')

    const h1 = document.createElement('h1')
    h1.textContent = 'Escolha um '
    
    const span = document.createElement('span')
    span.textContent = 'curso'
    
    const br = document.createElement('br')
    
    const textFinal = document.createTextNode('para gerenciar')

    h1.appendChild(span)
    h1.appendChild(br)
    h1.appendChild(textFinal)

    const illustration = document.createElement('div')
    illustration.classList.add('home-illustration')
    
    const imgDevices = document.createElement('img')
    imgDevices.src = './imgs/devices.png'
    imgDevices.classList.add('home-illustration-devices')
    imgDevices.alt = 'Ilustração de Dispositivos'
    
    illustration.appendChild(imgDevices)
    content.appendChild(h1)
    content.appendChild(illustration)

    const imgStudant = document.createElement('img')
    imgStudant.src = './imgs/studant.png'
    imgStudant.classList.add('home-illustration-studant')
    imgStudant.alt = 'Ilustração de Estudante'

    const cardsDiv = document.createElement('div')
    cardsDiv.classList.add('cursos-cards')

    const cardDs = document.createElement('div')
    cardDs.classList.add('card-curso')

    cardDs.addEventListener('click', () => carregarDS())
    
    const imgDs = document.createElement('img')
    imgDs.src = './imgs/ds.png'
    imgDs.alt = 'Ícone DS'
    cardDs.appendChild(imgDs)

    const cardRds = document.createElement('div')
    cardRds.classList.add('card-curso')
    cardRds.addEventListener('click', () => carregarRDS())
    
    const imgRds = document.createElement('img')
    imgRds.src = './imgs/redes.png'
    imgRds.alt = 'Ícone RDS'
    cardRds.appendChild(imgRds)

    cardsDiv.appendChild(cardDs)
    cardsDiv.appendChild(cardRds)

    container.appendChild(content)
    container.appendChild(imgStudant)
    container.appendChild(cardsDiv)
    
    section.appendChild(container)
    main.appendChild(section)
}

async function carregarDS() {
    const main = document.querySelector('main')
    main.textContent = ''

    const section = document.createElement('section')
    section.id = 'curso-ds'
    section.classList.add('pagina', 'ativa', 'tela-curso')

    const topBar = document.createElement('div')
    topBar.classList.add('top-bar-curso')

    const selectStatus = document.createElement('select')
    selectStatus.classList.add('filtro-status')

    const optionTodos = document.createElement('option')
    optionTodos.textContent = 'Status'
    optionTodos.value = 'todos'

    const optionCursando = document.createElement('option')
    optionCursando.textContent = 'Cursando'
    optionCursando.value = 'cursando'

    const optionFinalizado = document.createElement('option')
    optionFinalizado.textContent = 'Finalizado'
    optionFinalizado.value = 'finalizado'

    selectStatus.appendChild(optionTodos)
    selectStatus.appendChild(optionCursando)
    selectStatus.appendChild(optionFinalizado)

    const legendaBox = document.createElement('div')
    legendaBox.classList.add('legenda-box')
    
    const textoLegenda = document.createElement('span')
    textoLegenda.textContent = 'LEGENDA'
    
    const corCursando = document.createElement('div')
    corCursando.classList.add('quadrado-legenda', 'legenda-azul')
    const txtCursando = document.createElement('span')
    txtCursando.textContent = 'Cursando'

    const corFinalizado = document.createElement('div')
    corFinalizado.classList.add('quadrado-legenda', 'legenda-amarelo')
    const txtFinalizado = document.createElement('span')
    txtFinalizado.textContent = 'Finalizado'

    legendaBox.appendChild(textoLegenda)
    legendaBox.appendChild(corCursando)
    legendaBox.appendChild(txtCursando)
    legendaBox.appendChild(corFinalizado)
    legendaBox.appendChild(txtFinalizado)

    topBar.appendChild(selectStatus)
    topBar.appendChild(legendaBox)

    const titulo = document.createElement('h1')
    titulo.textContent = 'Desenvolvimento de sistemas'
    titulo.classList.add('titulo-ds')

    const gridAlunos = document.createElement('div')
    gridAlunos.classList.add('grid-alunos')

    selectStatus.addEventListener('change', (evento) => {
        const statusSelecionado = evento.target.value
        
        const todosOsCards = gridAlunos.querySelectorAll('.card-aluno-mock')

        todosOsCards.forEach(card => {
            const statusDoCard = card.dataset.status

            if (statusSelecionado === 'todos' || statusSelecionado === statusDoCard) {
                card.style.display = 'flex'
            } else {
                card.style.display = 'none'
            }
        })
    })

    section.appendChild(topBar)
    section.appendChild(titulo)
    section.appendChild(gridAlunos)
    main.appendChild(section)

    try {
        const alunos = await getAlunosPorCurso(1)

        alunos.forEach(aluno => {
            const card = document.createElement('div')
            card.classList.add('card-aluno-mock')

                const statusFormatado = aluno.status.toLowerCase()
                card.dataset.status = statusFormatado

            if (aluno.status.toLowerCase() === 'cursando') {
                card.classList.add('bg-cursando')
            } else if (aluno.status.toLowerCase() === 'finalizado') {
                card.classList.add('bg-finalizado')
            }

            const img = document.createElement('img')
            img.src = aluno.foto
            img.alt = `Foto de ${aluno.nome}`

            const nome = document.createElement('h3')
            nome.textContent = aluno.nome.toUpperCase()

            card.appendChild(img)
            card.appendChild(nome)
            
            gridAlunos.appendChild(card)
        })

    } catch (erro) {
        console.error("Erro ao buscar alunos:", erro)
        const erroMsg = document.createElement('p')
        erroMsg.textContent = 'Falha ao carregar alunos. Verifique a conexão com a API.'
        gridAlunos.appendChild(erroMsg)
    }
}

async function carregarRDS() {
    const main = document.querySelector('main')
    main.textContent = ''

    const section = document.createElement('section')
    section.id = 'curso-ds'
    section.classList.add('pagina', 'ativa', 'tela-curso')

    const topBar = document.createElement('div')
    topBar.classList.add('top-bar-curso')

    const selectStatus = document.createElement('select')
    selectStatus.classList.add('filtro-status')

    const optionTodos = document.createElement('option')
    optionTodos.textContent = 'Status'
    optionTodos.value = 'todos'

    const optionCursando = document.createElement('option')
    optionCursando.textContent = 'Cursando'
    optionCursando.value = 'cursando'

    const optionFinalizado = document.createElement('option')
    optionFinalizado.textContent = 'Finalizado'
    optionFinalizado.value = 'finalizado'
    
    selectStatus.appendChild(optionTodos)
    selectStatus.appendChild(optionCursando)
    selectStatus.appendChild(optionFinalizado)

    const legendaBox = document.createElement('div')
    legendaBox.classList.add('legenda-box')
    
    const textoLegenda = document.createElement('span')
    textoLegenda.textContent = 'LEGENDA'
    
    const corCursando = document.createElement('div')
    corCursando.classList.add('quadrado-legenda', 'legenda-azul')
    const txtCursando = document.createElement('span')
    txtCursando.textContent = 'Cursando'

    const corFinalizado = document.createElement('div')
    corFinalizado.classList.add('quadrado-legenda', 'legenda-amarelo')
    const txtFinalizado = document.createElement('span')
    txtFinalizado.textContent = 'Finalizado'

    legendaBox.appendChild(textoLegenda)
    legendaBox.appendChild(corCursando)
    legendaBox.appendChild(txtCursando)
    legendaBox.appendChild(corFinalizado)
    legendaBox.appendChild(txtFinalizado)

    topBar.appendChild(selectStatus)
    topBar.appendChild(legendaBox)

    const titulo = document.createElement('h1')
    titulo.textContent = 'Redes de computadores'
    titulo.classList.add('titulo-ds')

    const gridAlunos = document.createElement('div')
    gridAlunos.classList.add('grid-alunos')

    selectStatus.addEventListener('change', (evento) => {
        const statusSelecionado = evento.target.value
        
        const todosOsCards = gridAlunos.querySelectorAll('.card-aluno-mock')

        todosOsCards.forEach(card => {
            const statusDoCard = card.dataset.status

            if (statusSelecionado === 'todos' || statusSelecionado === statusDoCard) {
                card.style.display = 'flex'
            } else {
                card.style.display = 'none'
            }
        })
    })

    section.appendChild(topBar)
    section.appendChild(titulo)
    section.appendChild(gridAlunos)
    main.appendChild(section)

    try {
        const alunos = await getAlunosPorCurso(2)

        alunos.forEach(aluno => {
            const card = document.createElement('div')
            card.classList.add('card-aluno-mock')

            const statusFormatado = aluno.status.toLowerCase()
            card.dataset.status = statusFormatado

            if (aluno.status.toLowerCase() === 'cursando') {
                card.classList.add('bg-cursando')
            } else if (aluno.status.toLowerCase() === 'finalizado') {
                card.classList.add('bg-finalizado')
            }

            const img = document.createElement('img')
            img.src = aluno.foto
            img.alt = `Foto de ${aluno.nome}`

            const nome = document.createElement('h3')
            nome.textContent = aluno.nome.toUpperCase()

            card.appendChild(img)
            card.appendChild(nome)
            
            gridAlunos.appendChild(card)
        })

    } catch (erro) {
        console.error("Erro ao buscar alunos:", erro)
        const erroMsg = document.createElement('p')
        erroMsg.textContent = 'Falha ao carregar alunos. Verifique a conexão com a API.'
        gridAlunos.appendChild(erroMsg)
    }
}

window.carregarDS = carregarDS
window.carregarRDS = carregarRDS