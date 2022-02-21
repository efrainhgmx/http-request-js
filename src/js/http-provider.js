const jokeURL = "https://api.chucknorris.io/jokes/random";
const urlUsuarios = "https://reqres.in/api/users";

//Cloudinary
const cloudPreset = 'lyhos7dg';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dnbcw5agw/upload';

//Todas las funciones async regresan una promesa.
const obtenerChiste = async () => {

    try {
        const resp = await fetch( jokeURL );
    
        if( !resp.ok ) throw 'No se pudo hacer la peticion';
    
        const { icon_url, id, value } = await resp.json();
    
        return {  
            icon_url,
            id,
            value
         };

    } catch (err) {
        throw err;
    }

};

const obtenerUsuario = async() => {
    try {
        const response = await fetch( urlUsuarios );
        const { data: usuarios } = await response.json();

        return usuarios;
    } catch (error) {
        throw error;
    }
};

const subirImagen = async ( archivoSubir ) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset)
    formData.append('file', archivoSubir);


    try {

        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        if(resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (error) {
        throw error;
    }
}


export {
    obtenerChiste,
    obtenerUsuario,
    subirImagen
}