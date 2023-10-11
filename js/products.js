var isShopModeEnabled = false;

document.getElementById('prod1').addEventListener('click', ()=>{
    if (isShopModeEnabled);
    else enableShoppingMode('prod1');
});

function enableShoppingMode(prod) {
    isShopModeEnabled = true;
    document.getElementById('shopback').style.transform = 'translateX(100%)';
    document.getElementById(prod).style.zIndex = 100;
    document.getElementById(prod).style.backgroundColor = 'black';
    document.getElementById(prod).style.color = 'white';
    document.getElementById(prod).style.height = '50vh';
    document.getElementById(prod).style.position = 'absolute';
}