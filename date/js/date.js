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
createTable(allSection,currentYear,currentMonth,currentDay)

function createTable(arrs,year,month,day) {
  let  body = document.getElementById('date-body')
  for (let i = 0; i <= 5; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j <= 6; j++) {
      let td = document.createElement('td')
      td.textContent =  arrs[i*7+j][0]
      let day = arrs[i*7+j][1]
      td.className = arrs[i*7+j][2] || ''
      td.setAttribute('data-ymd',day)
      tr.appendChild(td)
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
  let dateInput = document.getElementById('date')
  dateInput.value = ymd
  let  curretSelectDateNode = document.getElementById('current-select-date')
  curretSelectDateNode.textContent =  ymd
})


