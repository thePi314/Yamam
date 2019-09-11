var EventObjects = []

export default function startEvent(object) { attachEventObject(object) ; boundlObjects() ; applyEvents() ; console.log(EventObjects) }
function applyEvents(){ for (let ind = 0; ind < EventObjects.length; ind++) EventObjects[ind].applyEvents() }
function stopEvent(object){ deattachEventObject(object) ; boundlObjects() ; applyEvents() }
function deattachEventObject(object){ for (let ind = 0; ind < EventObjects.length; ind++) if (EventObjects[ind].isEqualTo(object)) EventObjects.splice(ind,1) }
function boundlObjects(){ document.getElementById('events-layer').innerHTML = '' ; for( let ind = 0 ; EventObjects.length ; ind++ ) document.getElementById('events-layer').innerHTML += EventObjects[ind].getHTML() }
function attachEventObject(object){ EventObjects.push(object) } 