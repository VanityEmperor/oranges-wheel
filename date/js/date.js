let date = getMonthFirstDay(new Date())
let week = new Date(date).getDay()

let currentYear = new Date(date).getFullYear()
let currentMonth = new Date(date).getMonth() + 1
let currentDay = new Date(new Date()).getDate()

let lastMonth = getLastMonth(currentMonth)
let nextMonth = getNextMonth(currentMonth)

let currentMonthDays = haoManyDays(currentYear, currentMonth)
let lastMonthDays = haoManyDays(lastMonth == 12 ? currentYear - 1 : currentYear, lastMonth)
let nextMonthDays = haoManyDays(nextMonth == 1 ? currentYear + 1 : currentYear, nextMonth)

let allSection = allDays(lastMonthDays,currentMonthDays,currentYear,currentMonth)
let lastSelectElement = null
let currentDayElement
createTable(allSection,currentYear,currentMonth,currentDay)

function createTable(arrs,year,month,day) {
  let  body = document.getElementById('date-body')
  for (let i = 0; i <= 5; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j <= 6; j++) {
      let td = document.createElement('td')
      td.textContent =  arrs[i*7+j][0]
      let ymd = arrs[i*7+j][1]
      td.className = arrs[i*7+j][2] || ''
      td.setAttribute('data-ymd',ymd)
      tr.appendChild(td)
      if(ymd === `${year}-${month}-${day}` ){
        td.classList.add('date-highlight')
        currentDayElement = td
        lastSelectElement = td
      }
    }
    body.appendChild(tr)
  }

  let  yearNode = document.getElementById('year')
  let  monthNode = document.getElementById('month')
  let  curretSelectDateNode = document.getElementById('current-select-date')
  yearNode.textContent = `${year} 年` 
  monthNode.textContent =  `${month} 月`
  curretSelectDateNode.textContent =  `${year}-${month}-${day}`
}


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
})

let  nowDate = document.getElementById('now')
nowDate.addEventListener('click',function(e){
  if(lastSelectElement == currentDayElement){
    return
  } 
  lastSelectElement.classList.remove('date-highlight')
  currentDayElement.classList.add('date-highlight')
  let dateContent = document.getElementById('date-content')
  dateContent.classList.remove('date-content-show')
  lastSelectElement = currentDayElement
})