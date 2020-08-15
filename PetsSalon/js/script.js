console.log("Executed");

// object literal for the salon
const salon={
    name:"The Fashion Pet",
    phone:"222-222-2222",
    address:{
        city:"San Diego, CA",
        ave:"Calle Sol",
        number:"125-k"
    },
    pets:[]
}

console.log(salon);

let {name,phone,address:{city,ave,number}}= salon;
console.log(ave);

//document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";

document.getElementById("info").innerHTML=` 
    <p class="footer-info"> <b>${name} </b><br>
        ${ave} ${number}, ${city}
        <br> ${phone}<br>
        <p id="footer-text">Copyright reserved &copy; 2020 Miguel Rodriguez</p>
        </p>       
        `;  //template string

//object constructor for the pets
class Pet{
    constructor(name,age,type,breed,gender,service,serviceCost,ownersName,contactPhone){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.serviceCost=serviceCost;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;


    }
}

const scooby=new Pet("Scooby",50,"Dog","Dane","Male","Full Service",50,"Shaggy","555-556-6677");
console.log(scooby);
const scrapy=new Pet("Scrapy",35,"Dog","Dane","Male","Nails cut",20,"Tommy","555-556-6677");
console.log(scrapy);
const Lazie=new Pet("Lazie",20,"Dog","Pitbull","female","Full Service",50,"Dude","555-556-7788");
console.log(Lazie)
const Markie=new Pet("Markie",23,"Cat","siamese","Male","Haircut",20,"Billy","223-556-6677");
console.log(Markie)



//add pets to the array

salon.pets.push(scooby);
salon.pets.push(scrapy);
salon.pets.push(Lazie);
salon.pets.push(Markie);

//console.log(salon.pets.length); // display the number of elements in the array 

// get the inputs save unn vars usinf id
var txtname=document.getElementById("petName");
var txtage=document.getElementById("petAge");
var txttype=document.getElementById("petType");
var txtbreed=document.getElementById("petBreed");
var txtgender=document.getElementById("petGender");
var txtservice=document.getElementById("petService");
var txtserviceCost=document.getElementById("serviceCost");
var txtowner=document.getElementById("ownersName");
var txtcontactPhone=document.getElementById("contactPhone");


//register function

function register(){
var thePet = new Pet(txtname.value,txtage.value,txttype.value,txtbreed.value,txtgender.value,txtservice.value,txtserviceCost.value,txtowner.value,txtcontactPhone.value);
    //push the pet into the array
salon.pets.push(thePet);
console.log(salon.pets);
    //clear the input
    clear();
    //display(); //directory.js
    displayTable(thePet);
}

function clear(){
    txtname.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservice.value="";
    txtserviceCost.value="";
    txtowner.value="";
    txtcontactPhone.value="";
}

function displayTable(aPet){
    var tbody=document.getElementById('rowPet');
    var row=`<tr>
                <td>${aPet.name} </td>
                <td>${aPet.age} </td>
                <td>${aPet.type} </td>
                <td>${aPet.gender} </td>
                <td>${aPet.breed} </td>
                <td>${aPet.service} </td>
                <td>${aPet.serviceCost} </td>
                <td>${aPet.ownersName} </td>
                <td>${aPet.contactPhone} </td>
            `;
    tbody.innerHTML+=row;        
}

displayTable(scooby);
displayTable(scrapy);
















//HOMEWORK  display on the console the oldest pet and the youngest pet.
// add CSS to the form.















// print the name of the 4 pets

//alert(salon.name);
//alert(salon.name)



// use the for loop