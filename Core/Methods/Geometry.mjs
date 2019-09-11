export function pointDistance(x1,y1,x2,y2){
    return Math.sqrt( Math.pow(x1-x2,2) + Math.pow(y1-y2,2) );
}

export function pointDirection( x1 , y1 , x2 , y2 ){
    return Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
}