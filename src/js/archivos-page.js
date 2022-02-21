const body = document.body;
let imgFoto;
let inputFile = imgFoto;

const crearInputFileHtml = () => {
    const html = `
    <h1 class"mt-5">Subir achivos</h1>
    <hr/>

    <label>Selecciona una fotografia</label>
    <input type="file" accept="image/*" />

    <br>
    <img id="foto" class="img-thumbnail" src="" alt="Foto"/>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

    eventos();
}


const eventos = () => {
    inputFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        console.log(file);
    });
}

export const init = () => {
    crearInputFileHtml();
};