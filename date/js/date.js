
let nowDay =  new Date(new Date()).getDate()

let date = getMonthFirstDay(new Date())
let lastSelectElement = null
let currentDayElement

createDateContent(date)



let  body = document.getElementById('date-body')
body.addEventListener('click',function(e){
  let element = e.target
  let ymd = element.getAttribute('data-ymd')
  let dateInput = document.getElementById('input-date')
  dateInput.value = ymd
  let  curretSelectDateNode = document.getElementById('current-select-date')
  curretSelectDateNode.textContent =  ymd
  let dateContent = document.getElementById('date-content')
  dateContent.classList.remove('date-content-show')
  if(lastSelectElement){
    lastSelectElement.classList.remove('date-highlight')
  }
  element.classList.add('date-highlight')
  lastSelectElement = element
})

let  inputDate = document.getElementById('input-date')
inputDate.addEventListener('click',function(e){
  let dateContent = document.getElementById('date-content')
  dateContent.classList.add('date-content-show')
})

let  clearDate = document.getElementById('clear')
clearDate.addEventListener('click',function(e){
  if(lastSelectElement){
    lastSelectElement.classList.remove('date-highlight')
  }
  let dateContent = document.getElementById('date-content')
  dateContent.classList.remove('date-content-show')
  currentDayElement.classList.add('date-highlight')
  lastSelectElement = currentDayElement
  let dateInput = document.getElementById('input-date')
  dateInput.value = ''
})

let  now = document.getElementById('now')
now.addEventListener('click',function(e){
  if(lastSelectElement == currentDayElement){
    return
  } 
  lastSelectElement.classList.remove('date-highlight')
  currentDayElement.classList.add('date-highlight')
  let dateContent = document.getElementById('date-content')
  dateContent.classList.remove('date-content-show')
  lastSelectElement = currentDayElement
  ymd = currentDayElement.getAttribute('data-ymd')
  let dateInput = document.getElementById('input-date')
  dateInput.value = ymd
})