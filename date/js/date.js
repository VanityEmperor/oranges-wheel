
let lastSelectElement = null
let currentDayElement
let date = new Date()
createDateContent(new Date())

let  singleRight = document.getElementById('single-right')
singleRight.addEventListener('click',function(e){
  date = nextMonthDate(date)
  createDateContent(date)
})

let  singleLeft = document.getElementById('single-left')
singleLeft.addEventListener('click',function(e){
  date = lastMonthDate(date)
  createDateContent(date)
})

let  doubleRight = document.getElementById('double-right')
doubleRight.addEventListener('click',function(e){
  date = nextYearDate(date)
  createDateContent(date)
})


let  doubleLeft = document.getElementById('double-left')
doubleLeft.addEventListener('click',function(e){
  date = lastYearDate(date)
  createDateContent(date)
})

let  body = document.getElementById('date-body')
body.addEventListener('click',function(e){
  let element = e.target
  let ymd = element.getAttribute('data-ymd')
  let dateInput = document.getElementById('input-date')
  dateInput.value = ymd
  date = new Date(ymd)
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
  date = new Date()
  createDateContent(date)
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
  date = new Date()
  createDateContent(date)
})