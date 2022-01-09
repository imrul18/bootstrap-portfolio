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


  