language="javascript";
$('.carousel').carousel();

setInterval(setClock, 1000)

function setClock() {
  const currentDate = new Date()

  document.getElementById('sec').innerHTML = currentDate.getSeconds().toString();
  document.getElementById('min').innerHTML = currentDate.getMinutes().toString();
  document.getElementById('hour').innerHTML = (currentDate.getHours()%12).toString();
  document.getElementById('date').innerHTML = currentDate.getDate().toString() +"-"+ currentDate.getMonth().toString() +"-"+ currentDate.getFullYear().toString(); 
}

setClock()




let sendMessage = document.querySelector('#send_message');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let text = document.querySelector('#text');

console.log

sendMessage.addEventListener('click',send_text);

function send_text(e){
  let tasks;
  let task;
  task = name.value+"=>"+email.value+"=>"+text.value;

  if(localStorage.getItem('tasks')===null){
      tasks = [];
  }
  else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks',JSON.stringify(tasks));
}
