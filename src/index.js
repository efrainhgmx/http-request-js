import { init } from "./js/usuarios-page";
import { obtenerChiste, obtenerUsuario } from "./js/http-provider";
import * as CRUD from './js/crud-provider';
//obtenerChiste().then( console.log );
//obtenerUsuario().then( console.table ).catch( console.error );

//init();

CRUD.getUsuario(2).then( console.log );
CRUD.crearUsuario({
    name: 'Efrain',
    job: 'Frontend Engineer'
}).then( console.log );

CRUD.actualizarUsuario(1, {
    name: 'Melisa',
    jon: 'Developer'
}).then( console.log );