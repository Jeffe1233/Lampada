const On = document.getElementById ('On')
const Off = document.getElementById ('Off')
const lamp = document.getElementById ('lamp')

function isLampBroken ()
{
    return lamp.src.indexOf ('Broken') > -1;
}
function lampadaOn ()
{
    if ( !isLampBroken ()){

    lamp.src = './img/On.jpg';
    }
}

function lampadaOff ()
{
    if ( !isLampBroken ()){
    lamp.src = './img/Off.jpg';
    }
}
function lampadaBroken ()
{
    lamp.src = './img/Broken.jpg'
}


On.addEventListener ('click', lampadaOn);
Off.addEventListener ('click', lampadaOff);
lamp.addEventListener ('mouseover', lampadaOn);
lamp.addEventListener ('mouseleave', lampadaOff);
lamp.addEventListener ('dblclick', lampadaBroken);
