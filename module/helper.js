import { GAME } from "./variables.js";

// add all the helper functions

//Use to set selected user on start game screen
export function Profile(){
    GAME.selectedProfile.forEach(img=>{
        img.addEventListener("click", e=>{
            let target = e.target.dataset.id;
            removeImgSelection(GAME.selectedProfile);
            document.querySelector(`[data-id='${target}']`).classList.add("seelcted");
       
        //set turns
        GAME.turn = target =='x' ? true : false;
       
       
        });
    });

}

/** this function is used to remove selected class*/
function removeImgSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}

/** function is used to setHoverEffect to the cell */
export function setHoverEffect(){
    GAME.boardElement.classList.remove(GAME.X_CLASS);
    GAME.boardElement.classList.remove(GAME.Y_CLASS);
    if(GAME.turn){
        GAME.boardElement.classList.add(GAME.X_CLASS);
    }else{
        GAME.boardElement.classList.add(GAME.Y_CLASS);
    }  
}

/** this function is used to add current user in the cell */
export function markCell(cell, currentClass){
    cell.classList.add(currentClass)
}

/** Use this function to swap user turns */
export function swapTurns(turn){
    return turn = !turn; 
}

/** End Game Function */
export function endGame(draw, winEl, drawEl){
    if(!draw){
        winEl.classList.add("show");
    }else{
        drawEl.classList.add("show");
    }
}

/** Use to check the draw result */
export function isDraw(flag){
    if(flag.length) return;
    return [...GAME.blockElements].every(cell=>{
        return cell.classList.contains(GAME.X_CLASS) ||
        cell.classList.contains(GAME.Y_CLASS)
    })
}