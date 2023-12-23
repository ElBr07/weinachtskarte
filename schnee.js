var maxSnowflake = 100;
var content = ["\u2744", "\u2745", "\u2746"];

function snow(){
    for(i=0; i<maxSnowflake; i++){
        let snowFlakeWrapper = document.createElement("div");
        snowFlakeWrapper.classList.add("snow-wrapper");

        let snowFlake = document.createElement("div");
        snowFlake.classList.add("snow-flake");

        //zufällige schneeflocke
        let snnowFlakeSymbolNumber = Math.floor(Math.random() * content.length);
        let snowFlakeSymbol = document.createTextNode(
            content[snnowFlakeSymbolNumber]
        );
        
        snowFlake.appendChild(snowFlakeSymbol);

        //groeße der Schneeflocke
        let fontSize = Math.floor(Math.random() * 24 + 5);
        snowFlake.style.fontSize = fontSize + "px";

        //horizontale positin
        let horizontal = Math.floor(Math.random() * 100);
        snowFlakeWrapper.style.left = horizontal + "%";

        snowFlakeWrapper.style.top = "-55px";

        //animationsdauer
        snowFlake.style.animationDuration = 40 - fontSize + "s";
        snowFlakeWrapper.style.animationDuration = 40 - fontSize + "s";

        //animationsverzögerung
        let delay = Math.floor(Math.random() * 15);
        snowFlake.style.animationDelay = delay + "s";
        snowFlakeWrapper.style.animationDelay = delay + "s";

        //schneeflocke in doc einfügen
        snowFlakeWrapper.appendChild(snowFlake);
        document.body.appendChild(snowFlakeWrapper);
    }
}

snow();