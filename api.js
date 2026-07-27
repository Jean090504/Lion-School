'use strict'

const URL = 'https://lion-school-phbo.onrender.com'

// Função para buscar os alunos filtrando pelo ID do curso
export async function getAlunosPorCurso(cursoId) {
    const response = await fetch(`${URL}/alunos?curso_id=${cursoId}`)
    
    if (!response.ok) {
        throw new Error('Erro ao buscar dados dos alunos')   
    }
    
    return response.json()
}

export async function getAluno(id) {
    const response = await fetch(`${URL}/alunos/${id}`)
    
    if (!response.ok) {
        throw new Error('Erro ao buscar dados do aluno')   
    }
    
    return response.json()
}

