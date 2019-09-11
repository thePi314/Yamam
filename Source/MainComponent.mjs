import { DOMObject , DOMEvent } from "../Core/DOMClasses/Module.mjs";

export default class MainComponent extends DOMObject {
    constructor() {
        super('div',"MainComponent",null,"HELLO WORLD",{color:'white',width:'100%',height:'100%','text-align':'center','display':'grid','align-items':'center','background-color':'rgb(0,0,0)'});
        let self = this ;

        let r = 0 ;
        let add = 1 ;
        setInterval( function(){ 
            self.style_set( 'background-color' , 'rgb( '+r+' , 0 , 0 )' );
            
            if( !(0 <= r + add && r + add < 255) )
                add *= -1 ;

            r += add ;    
        },30 )
        
    }
}  