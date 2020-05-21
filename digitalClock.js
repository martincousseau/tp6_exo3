function addSegments(digitId){

    let seg = document.getElementById(digitId);
    
    
    for(let i = 0; i < 7; i++){

        let simpleSeg = document.createElement("div");
        let nu = `segment${i}`;
        simpleSeg.classList.add("segment",nu,"off");
        

        seg.appendChild(simpleSeg);

    }
        
    
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];

    let affichage  =  document.getElementById(digitId);

   let segValue = segmentStates[value];

   for(let i = 0; i < 7; i++){

        let nu = `segment${i}`;
        let seg = affichage.childNodes;

        if(segValue[i]  == 0){

            seg[i].classList.add("off");


        } else {

            seg[i].classList.remove("off");


        }
   }
}




function init(){

    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");


}



function main(){

    
    

    init();

    updateDigit("hours-tens",0);
    updateDigit("hours-units",2);
    updateDigit("minutes-tens",7);
    updateDigit("minutes-units",9);
    
}


main();