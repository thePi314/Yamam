import { default as MainComponentClass } from './MainComponent.mjs'

//gets inicional window dimensions
var Window_Width = window.innerWidth ;
var Window_Height = window.innerHeight ;

export var MainComponent = new MainComponentClass(Window_Width,Window_Height);