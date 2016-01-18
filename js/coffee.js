function updateCoffee(newValue){
    var coffee = document.getElementById("water");
    if(newValue == 0){
        coffee.style.height= (newValue*3) + 'px';
    }else{
        coffee.style.height= (newValue*3) - 3 + 'px';
    }

}