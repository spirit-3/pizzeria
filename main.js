menu_list_array = ["Veg Margherita Pizza","Chiken Tandoori pizzza","Paneer Tika pizaa","Delux Veggie pizza","Veg Extravenget pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menuList'>"
menu_list_array.sort();
for(var 1=0;i<menu_list_array.lenght;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
}
htmldata=htmldata+"<io>"
document.getElementById("diplay_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
}

function add_top(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.lenght;i++){

        htmldata=htmldata+'<div class="card">' +'<img src="images/pizzaImg.png"/>' + menu_list_array[i];
    }
    htmldata=htmldata"</section>"
    document.getElementById("display_addedmenu")innerHTML = htmldata;
}