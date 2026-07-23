'use strict'

import { getAlunosPorCurso } from './api.js'

window.addEventListener('DOMContentLoaded', () => {
    entradaCursos()
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

    cardDs.addEventListener('click', () => carregarCurso('ds'))
    
    const imgDs = document.createElement('img')
    imgDs.src = './imgs/ds.png'
    imgDs.alt = 'Ícone DS'
    cardDs.appendChild(imgDs)

    const cardRds = document.createElement('div')
    cardRds.classList.add('card-curso')
    cardRds.addEventListener('click', () => carregarCurso('rds'))
    
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
}