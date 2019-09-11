import * as Core from './Core/Module.mjs' ;
import { MainComponent } from './Source/Module.mjs' ;

/* Constructor */
window.addEventListener('load', (event) => {
    Core.Start(MainComponent) ;
});