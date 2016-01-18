function showValue(newValue)
{
    var coffee = document.getElementById("water");
    coffee.style.height=newValue + 'px';
    coffee.style.backgroundPosition=(newValue/230)*100 + "%" + " 0% ";
    coffee.style.transition = "all 3s ease-out";
}