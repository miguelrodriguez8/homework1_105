var students=[
    {name:"Michael",ch:"Cohort 11",photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Mesaye",ch:"Cohort 5",photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Colin",ch:"Cohort 11",photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Miguel",ch:"Cohort 6",photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"},
    {name:"Ingrid",ch:"Cohort 7",photo:"https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png"}
]



const main=document.getElementById('main-students');
var text2="";

for(var i=0;i<students.length;i++){

    text2+=`
    <div class="student">
    <img src="${students[i].photo}" alt="photo">
    <h2>${students[i].name}</h2>
    <p>${students[i].ch}</p>
    </div>`;
    
}

main.innerHTML=text2;




