"use strict";

const task = document.querySelector("#textTask");
console.log(task);

const addTaskButton = document.querySelector("#addTaskButton");
console.log(addTaskButton);

const sortTaskButton = document.querySelector("#sortTask");
console.log(sortTaskButton);

const ulSection = document.querySelector("section ul");
console.log(ulSection);

const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
];

const days = [
    "Domingo", 
    "Lunes", 
    "Martes", 
    "Miercoles", 
    "Jueves", 
    "Viernes", 
    "Sabado"
]

let allTask = [];

function addTaskToList() {

    if(task.value !== "")
    {
        console.log(`${task.value}`)
        generateTask();

        toggleClassLi();
    }

}

function generateTask() {
    ulSection.innerHTML += loadInformation()
    allTask = document.querySelectorAll("li");
    task.value = "";
}

function loadInformation() {
    return `<li class="task">
                <p>${task.value}</p>
            </li>`;
}

function toggleClassLi() {

    console.log(allTask);
    // for(const it in allTask) {
    //     allTask[it].classList.add("done");
    // }
}

function getDate() {
    const d = new Date();
    // d.getDate();
    const dateNumber = document.querySelector("#dateNumber");
    dateNumber.textContent = d.getDate();
    const month = document.querySelector("#month");
    month.textContent = months[d.getMonth()];
    const year = document.querySelector("#year");
    year.textContent = d.getFullYear();
    const dateDay = document.querySelector("#dateDay");
    dateDay.textContent = days[d.getDay()];
}


getDate();

addTaskButton.addEventListener("click", addTaskToList);