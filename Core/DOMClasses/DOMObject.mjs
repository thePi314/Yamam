import { DOMStyle , DOMEvent , DOMAttribute } from './Module.mjs' ;

export default class DOMObject{
    constructor(type,id=null,parent=null,innerHTML="",style={},attributes={},events={}){
        this.DOM = document.createElement(type);

        this.parent = parent ;
        this.type = type ;


        this.style_list = [];
        for( let elem in style ) this.style_list.push( new DOMStyle( elem , style[elem] ) );
        

        this.attribute_list = [];
        for( let elem in attributes ) this.attribute_list.push( new DOMAttribute( elem , attributes[elem] ) );
        if( id != null ) this.attribute_list.push( new DOMAttribute( 'id' , id ) ) ;

        this.event_list = [];
        for( let elem in events ) this.event_list.push( new DOMEvent( elem , events[elem] ) );
        
        this.children = [] ;
        if( Array.isArray(innerHTML) ) for( let ind = 0 ; ind < this.innerHTML.length ; ind++ ) this.children.push( innerHTML[ind] ) ;
        else this.DOM.innerHTML = innerHTML ; 

        this.pack() ;
    }

    pack_events(){ for( let ind = 0 ; ind < this.event_list.length ; ind++ ) this.event_list[ind].attach(this.DOM) }
    pack_attributes(){ for( let ind = 0 ; ind < this.attribute_list.length ; ind++ ) this.DOM.setAttribute( this.attribute_list[ind].attribute_name , this.attribute_list[ind].attribute_value ) }
    pack_style(){ this.DOM.removeAttribute( 'style' ) ; for( let ind = 0 ; ind < this.style_list.length ; ind++ ) this.DOM.style[ this.style_list[ind].inKey() ] = this.style_list[ind].style_value }
    pack(){ this.pack_attributes(); this.pack_style() ; this.pack_events() ; if( this.parent != null ) this.append( this.parent ) }

    child_exists( child ){ for( let ind = 0 ; ind < this.children.length ; ind++ ) if( child.DOM == this.children[ind].DOM ) return ind ; return -1 }
    child_remove( child ){  let ind = this.child_exists( child ) ; if( ind == -1 ) return ; this.DOM.removeChild( child.DOM ) ; this.children.splice( ind , 1 ) }
    child_push( child ){ this.children.push(child) ; this.DOM.appendChild( child.DOM ) }

    attribute_push( attribute_name , attribute_value = null ){ if( typeof attribute_name == "string" ) this.attribute_list.push( new DOMAttribute( attribute_name , attribute_value ) ) ; else this.attribute_list.push( attribute_name ) ; this.DOM.setAttribute( this.attribute_list[this.attribute_list.length-1].attribute_name , this.attribute_list[this.attribute_list.length-1].attribute_value ) }
    attribute_remove( attribute_name ){ let ind = this.attribute_exists(attribute_name); if(ind == -1) return ;  this.attribute_list.splice(ind,1); this.DOM.removeAttribute(attribute_name) }
    attribute_set( attribute_name , attribute_value ){ let ind = this.attribute_exists(attribute_name); if(ind == -1) return ; this.attribute_list[ind].attribute_value = attribute_value ; this.DOM.setAttribute( attribute_name , attribute_value ) }
    attribute_exists( attribute_name ){ for( let ind = 0 ; ind < this.attribute_list.length ; ind++ ) if( this.attribute_list[ind].attribute_name == attribute_name ) return ind ; return -1 }

    style_push( style_name , style_value = null ){ if( typeof style_name == "string" ) this.style_list.push( new DOMStyle( style_name , style_value ) ) ; else this.style_list.push( style_name ) ; this.DOM.style[ this.style_list[ this.style_list.length-1 ].inKey() ] = this.style_list[this.style_list.length-1].style_value }
    style_remove( style_name ){ let ind = this.style_exists(style_name) ; if( ind == -1 ) return ; this.DOM.style[this.style_list[ind].inKey()] = null ; this.style_list.splice( ind , 1 ) ;  }
    style_exists( style_name ){ for( let ind = 0 ; ind < this.style_list.length ; ind++ ) if( this.style_list[ind].style_name == style_name ) return ind ; return -1 }
    style_set( style_name , style_value ){ let ind = this.style_exists(style_name) ; if( ind == -1 ) return ; this.style_list[ind].style_value = style_value ; this.DOM.style[this.style_list[ind].inKey()] = style_value }

    parent_set( parent ){ this.parent.child_remove(this) ; this.parent = parent ; this.parent.child_push( this ) }

    remove(){ if( this.parent == null ) document.getElementById('application').removeChild( this.DOM ) ; else this.parent.child_remove( this ) }
    append( parent ){ this.parent = parent ; this.parent.child_push(this) }
    refresh(){ this.pack() ; for( let ind = 0 ; ind < this.children.length ; ind++ ) this.children[ind].refresh() }
}