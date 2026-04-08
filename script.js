let size = 4 ;
let noofTiles = size ** 2 ; 
let highlighted = noofTiles ; 
let shuffled = false ; 

let boxcontainer = document.getElementById('tiles');

window.addEventListener('keydown', (e) => {
    switch(e.key){
        case "ArrowRight" :{
           swap( highlighted+1);
            break ; 
        }
         case "ArrowLeft" : {
          swap( highlighted-1);
            break ; 
        }
         case "ArrowUp" :{
           swap(highlighted-size);
            break ; 
        }
         case "ArrowDown" : {
           swap( highlighted+size);
            break ; 
        }
    }}
);


newGame() ; 

function newGame(){
    loadTile();
    setTimeout(()=>
       { shuffle();},500


    );
}

function loadTile(){
    for(let i = 1 ; i <= noofTiles ; i++){
        let newTile = document.createElement('button');
        newTile.id=`btn${i}`;
        newTile.setAttribute("index",i);
        newTile.classList.add('button');
        newTile.innerHTML = i ; 
         newTile.addEventListener('click', () => {
            swap(i);
        });
        boxcontainer.append(newTile);
    }let selectedTileId =  'btn' +highlighted;
    selectedTile = document.getElementById(selectedTileId);
    selectedTile.classList.add("selected");

}




function shuffle(){
    let minShuffles = 100 ; 
    let totalShuffles = minShuffles + Math.floor(Math.random()*(200-100)+100);
    for(let b = minShuffles ; b<=totalShuffles ; b++){
        setTimeout(() =>{
        let x = Math.floor(Math.random()*4);
        if(x==0 ){
            direction = highlighted +1;
        }       
        else if (x == 1 ){
            direction =  highlighted -1 ; 
        }
        else if ( x==2 ){
            direction = highlighted - size ; }
       
        else if (x==3){
            direction = highlighted + size ; 
        }
        swap(direction);
        if(b>= totalShuffles - 1 ){
            shuffled = true ; 
        }}, b*10  );
    

}}

function swap(clicked){
    if(clicked<1 ||clicked >noofTiles){
        return ; 
    }
    if(clicked == highlighted + 1 ){
        if(clicked %size != 1){
            setSelected(clicked);
        }
    }
      else if(clicked == highlighted - 1 ){
        if(clicked %size != 0){
            setSelected(clicked);
        }
    }

     else  if(clicked == highlighted + size  ){
        {
           setSelected(clicked);
        }
    }
     else  if(clicked == highlighted - size  ){
        {
            setSelected(clicked);
        }
    }
    if(shuffled == true ){
        if (checkhasWon() == true) {
            alert("winner!")
        }
    }
}

function checkhasWon (){
    for(let i = 1 ; i <= noofTiles ; i ++){
let currentTile = document.getElementById(`btn${i}`);
    
let currentvalue = currentTile.getAttribute("index");
if(parseInt(currentvalue)!=currentTile.innerHTML){
    return false ; 
}
}
return true ; 




}

function setSelected(index){
    currentTile = document.getElementById(`btn${highlighted}`);
    currentTileText = currentTile.innerHTML; 
    currentTile.classList.remove('selected');
   newTile = document.getElementById(`btn${index}`);
   currentTile.innerHTML = newTile.innerHTML ; 
   newTile.innerHTML = currentTileText; 
   newTile.classList.add('selected');
   highlighted = index ; 
} 
