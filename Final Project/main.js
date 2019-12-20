document.getElementById("search").addEventListener("click", searchXmen);



function searchXmen() {

    let name = document.getElementById("inputname").value;
    name = name.toLowerCase();

    if(name == "wolverine" || name == "logan") {

        document.getElementById("mainimg").src = "images/wolverine.jpg";
        document.getElementById("name").innerHTML = "Wolverine";
        document.getElementById("quote").innerHTML = '"You know, sometimes when you cage the beast, the beast gets angry!"'
        document.getElementById("box").style.backgroundColor = "yellow";
        document.getElementById("description").style.fontSize = "x-small";
        document.getElementById("description").style.textAlign = "left"
        document.getElementById("description").style.padding = "5px 15px 20px 30px";
        document.getElementById("stats").style.fontSize = "small";
        document.getElementById("stats").style.display = "unset";
        document.getElementById("height").innerHTML = " 5'3";
        document.getElementById("weight").innerHTML = " 300lbs";
        document.getElementById("born").innerHTML = " Alberta, Canada";

        document.getElementById("feats").innerHTML = " Hear peoples heartbeats through multiple walls and floors.";
        document.getElementById("origin").innerHTML = "Wolverine was born as James Howlett, son of plantation owners in the late 1800's.  Due to a fued between James' father and one of his workers, and a suspected affair between James' mother and the worker, his father and the worker get into a heated arguement after the worker returns for revenge on him after being fired. A blood bath insues as James' powers manifest and kills the attacker, which leads to him running away with a childhood friend, Rose, until finding a home in a quarry in British Colombia. Looking for a source of money, James starts doing cage fights after gaining control of his new ability. One thing leads to another, and James gets into a fight with Dog, the son of the worker who James had killed. Looking to land the finishing blow, James accidentally strikes Rose and goes mad, running into the woods and living as an animal for an unknown amount of time, ";





    }
    else if (name == "cyclops" || name == "scott summers"){

        document.getElementById("mainimg").src = "images/cyclops.jpg";
        document.getElementById("name").innerHTML = "Cyclops";
        document.getElementById("quote").innerHTML = '"No. Not plan B. Plan 2. Plan B implies we only have 26"'
        document.getElementById("box").style.backgroundColor = "red";
        document.getElementById("description").style.fontSize = "small";
        document.getElementById("description").style.textAlign = "left"
        document.getElementById("description").style.padding = "10px 15px 20px 30px";
      



    }
















}