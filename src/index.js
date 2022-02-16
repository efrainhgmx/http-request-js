import { init } from "./js/chistes-page";
import { obtenerChiste, obtenerUsuario } from "./js/http-provider";

obtenerChiste().then( console.log );
obtenerUsuario().then( console.table ).catch( console.error );

init();