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

let allTask = document.querySelectorAll("li");
let allTaskDeleteButton;

function addTaskToList() {

    if(task.value !== "")
    {
        generateTask();
    }

}

function generateTask() {
    ulSection.innerHTML += loadInformation()
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

    if(e.target.parentElement.nodeName.toLowerCase() === "button")
    {
        e.target.parentElement.parentElement.remove();  //Llamamos al parentElement 2 veces, ya que "pulsamos en la imagen", el padre directo seria el botón, y el padre será el li. Y queremos eliminar cada elemento li cada vez que pulsemos ahi. 
    }
}

function loadInformation() {
    return `<li class="task">
                <p>${task.value}</p>
                <button><img src="./Iconos/Basura_Cerrada.svg" alt="" /></button>
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

            console.log(it.classList.contains("done")); //Comprobamos si tiene añadida la clase "done"
            if(it.classList.contains("done"))
            {
                console.log(it, "te iras para abajo maldita");
                allTask.sort(sortTaskDoneUndone);
            }
        }
    }
}

function sortTaskDoneUndone(task1, task2)
{
    if(task1.classList.contains("done") && !task2.classList.contains("done"))
    {
        return 1;
    }
    else if(!task1.classList.contains("done") && task2.classList.contains("done"))
    {
        return -1;
    }
    else 
    {
        return 0;
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