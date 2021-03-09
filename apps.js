'use strict';

function Students(email, mobile, tuition){
    this.idNum = idNumbers();
    this.email = email;
    this. mobile = mobile;
    this.age = generateRandomNumber();
    this.tuition = tuition;
    Students.prototype.allStudents.push(this);
}

Students.prototype.allStudents = [];

let form = document.getElementById('studentsForm');
form.addEventListener('submit', studentsData);

function studentsData(event){
event.preventDefault();

let emailValue = event.target.email.value;
let mobileValue = event.target.mobile.value;
let tuitionValue = event.target.tuition.value;

let userIndex = new Students(emailValue, mobileValue, tuitionValue);
localStorage.setItem('studentsObjects', JSON.stringify(Students.prototype.allStudents));
userIndex.render();

}

function generateRandomNumber(){
    return Math.floor(Math.random() * (24 - 18) + 18);
}


let table = document.getElementById('studentsTable');

function createTable(){
    let headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    let idHeader = document.createElement('th');
    idHeader.textContent = 'id';
    headerRow.appendChild(idHeader);

    let nameHeader = document.createElement('th');
    nameHeader.textContent = 'Student Name';
    headerRow.appendChild(nameHeader);

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Student Email';
    headerRow.appendChild(emailHeader);

    let mobileHeader = document.createElement('th');
    mobileHeader.textContent = 'Student Mobile';
    headerRow.appendChild(mobileHeader);

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';
    headerRow.appendChild(ageHeader);

    let tuitionHeader = document.createElement('th');
    tuitionHeader.textContent = 'Tuition';
    headerRow.appendChild(tuitionHeader);
}
createTable();


Students.prototype.render = function(){
    let studentsRow = document.createElement('tr');
    table.appendChild(studentsRow);

    let idData = document.createElement('td');
    idData.textContent = this.idNum;
    studentsRow.appendChild(idData);
    
    let nameData = document.createElement('td');
    nameData.textContent = 
    studentsRow.appendChild(nameData);
    
        let emailData = document.createElement('td');
        emailData.textContent = this.email;
        studentsRow.appendChild(emailData);


    let mobileData = document.createElement('td');
    mobileData.textContent = this.mobile;
    studentsRow.appendChild(mobileData);

    let ageData = document.createElement('td');
    ageData.textContent = this.age;
    studentsRow.appendChild(ageData);

    let tuitionData = document.createElement('td');
    tuitionData.textContent = this.tuition;
    studentsRow.appendChild(tuitionData);
}

if(localStorage.getItem('studentsObjects')){
    let lsArray = JSON.parse(localStorage.getItem('studentsObjects'));
    for(let i = 0; i < lsArray.length; i++){
      let result = new Students(lsArray[i].id, lsArray[i].mobile, lsArray[i].tuition);
    result.render();
    }
}


let total = 0;
for(let i = 0; i < Students.prototype.allStudents.length; i++){
    total += this.tuition;
}


function idNumbers(){
    return Math.floor((Math.random() * Students.prototype.allStudents) + 1);
}