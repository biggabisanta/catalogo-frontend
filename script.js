const container = document.querySelector('#button')
fetch(`http://localhost:6054/autoras`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(autoras)

        data.forEach(autora => {
            console.log(autora)

const botao =
    document.getElementById('button')
botao.addEventListener('click', Buscar)

