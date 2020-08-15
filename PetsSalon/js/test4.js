var main = document.getElementsByTagName('main');

var h1 = document.createElement('h1');
var text = document.createTextNode("Hello World!");
h1.appendChild(text);

main[0].appendChild(h1);
console.log(h1);
//challenge

var ul=document.createElement("ul");


for(var i=1;i<=3;i++){
    var li=document.createElement("li");
    textLi=document.createTextNode("Element "+i);
    li.appendChild(textLi);
    ul.appendChild(li);
}

main[0].appendChild(ul);

//create a table with 2 rows and 2 columns

table=document.getElementById('tab');
var tr = document.createElement('tr');
var td = document.createElement('td');

for(var i=1;i<=5;i++){
    var tr = document.createElement('tr');
    for(var j=1;j<=5;j++){
    var td = document.createElement('td');    
    var textTab=document.createTextNode('cell');
    td.appendChild(textTab);
    td.setAttribute('class','bordered');
    tr.appendChild(td);
    }
    table.appendChild(tr);
}

table.setAttribute('class','bordered');
