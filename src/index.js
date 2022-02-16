import { init } from "./js/chistes-page";
import { obtenerChiste } from "./js/http-provider";

obtenerChiste().then( console.log );

init();