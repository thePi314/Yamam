export default class DOMStyle{
    constructor( style_name , style_value ){
        this.style_name = style_name ; 
        this.style_value = style_value ;
    }

    inKey(){ let key = ""; let toCapital = false ; for( let ind = 0 ; ind < this.style_name.length ; ind++ ) { if( this.style_name[ind] == '-' ) toCapital = true ; else{ if( toCapital ) { key += String.fromCharCode(this.style_name.charCodeAt(ind)-32) ; toCapital = false  } else key += this.style_name[ind]  } } return key }
}