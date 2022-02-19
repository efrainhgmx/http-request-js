import { init } from "./js/usuarios-page";
import { obtenerChiste, obtenerUsuario } from "./js/http-provider";
import * as CRUD from './js/crud.js';
//obtenerChiste().then( console.log );
//obtenerUsuario().then( console.table ).catch( console.error );

//init();

CRUD.getUsuario(2).then( console.log );