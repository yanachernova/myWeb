import React from 'react'

const MainLayout = () => {
    return (
        <main className="main__content container">
            <h1>Bienvenidos</h1>
            <p>En este sitio encontrarán material de apoyo relacionado al mundo de la programación, como enlaces de interés, ejemplos de uso, guías de instalación, etc. Esto con la finalidad de ayudar a los alumnos del curso gratuito de programación Fullstack realizado por Codeme.</p>

            <p>Las tecnologías asociadas al curso serán:</p>
            <ul>
                <li>En el ámbito frontend: HTML, CSS y Javascript, mediante su librería React</li>
                <li>En el ámbito Backend: Javascript, mediante su nodeJS y su framework Express</li>
                <li>En el ámbito Devops: Git, Github y Heroku</li>
            </ul>
        </main>
    )
}

export default MainLayout
