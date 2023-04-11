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

let [allTask] = document.querySelectorAll("li");
let allTaskDeleteButton;

let taskDoned = [];
let taskUndoned = [];

function addTaskToList() {

    if(task.value !== "")
    {
        generateTask();
    }

}

function generateTask() {
    ulSection.innerHTML += loadInformationFromElement()
    task.value = "";
    updateTaskArray();
}

function updateTaskArray() {
    allTask = document.querySelectorAll("li");

    allTask.forEach(element => 
        {
            element.addEventListener("click", handleSelectTask);
        });
}

function addEventListenerEveryButton() {
    allTaskDeleteButton = document.querySelectorAll("li button");

    allTaskDeleteButton.forEach(element =>
        {
            element.addEventListener("click", handleDeleteTask);
        })
}

function handleDeleteTask(e){
    e.stopPropagation();
    if(e.target.nodeName.toLowerCase() === "button")
    {
        ulSection.removeChild(e.target.parentElement);

        // e.target.parentElement.remove();  //Llamamos al parentElement 2 veces, ya que "pulsamos en la imagen", el padre directo seria el botón, y el padre será el li. Y queremos eliminar cada elemento li cada vez que pulsemos ahi. 

    }
}

function loadInformationFromElement(item = task) {

    return `<li class="${item !== task ? item.classList : "task"}">
                <p>${item !== task ? item.textContent : item.value}</p>
                <button></button>
            </li>`;
}

function toggleClassLi(task) {
    task.classList.toggle("done");
    deleteSelectedTask();
}

function handleSelectTask(e) {
    e.stopPropagation();
    if(e.target.parentElement.nodeName.toLowerCase() === "li")
    {
        let task = e.target.parentElement;
        toggleClassLi(task)
    }
}

function deleteSelectedTask(e)
{
    allTaskDeleteButton = document.querySelectorAll("li button");
    addEventListenerEveryButton();
}

function sortTaskFunction() 
{
    if(allTask.length !== 0)
    {
        for(const it of allTask)
        {
            if(it.classList.contains("done"))
            {
                ulSection.append(it);
            }
        }
    }
}



function getDate() {
    const d = new Date();
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

sortTaskButton.addEventListener("click", sortTaskFunction)

//Evitamos el uso del botón derecho para que no aparezca el contextMenu
window.addEventListener("contextmenu", (event) =>
event.preventDefault());