(function () {

    const list= document.querySelector('ul');
    const btn=document.querySelector('button');
    const userInput=document.querySelector('input');
    const links=document.querySelectorAll('a');


    btn.addEventListener('click', addTask);

function addTask(){
    let task=document.createElement('li'); //sukuria li
    task.textContent=userInput.value;// i li ideda turini
    list.appendChild(task);// li prideda i vidu
}




})();

