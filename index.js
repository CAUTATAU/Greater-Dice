function randomizer(){
    var value = Math.floor(Math.random()*6)+1;
    return value;
}
var dices = document.querySelectorAll("img");
var values = [];
function Shuffle(){
    for(var i=0;i<dices.length;i++){
        var random = randomizer();
        var randomimage = "dice"+random+".png";
        var source = "images/"+randomimage;
        dices[i].setAttribute("src",source);
        values[i] = random;
    }  
}
function WinnerorDraw(valueplayer1,valueplayer2){
    var textchange = document.querySelector("h1")
    if(valueplayer1>valueplayer2)
    {
        textchange.innerHTML = "PLAYER 1 WINS"
        return textchange.innerHTML;
    }
    if(valueplayer1<valueplayer2)
    {
        textchange.innerHTML = "PLAYER 2 WINS"
        return textchange.innerHTML;
    }
    textchange.innerHTML = "DRAW"
        return textchange.innerHTML;
}
    const button = document.querySelector("button");
    button.onclick = function(){
        Shuffle();
        WinnerorDraw(values[0],values[1]);
        button.innerHTML = "Play again";
    }

