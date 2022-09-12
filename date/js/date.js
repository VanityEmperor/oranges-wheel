let date = getMonthFirstDay(new Date())
let week = new Date(date).getDay()

let currentYear = new Date(date).getFullYear()
let currentMonth = new Date(date).getMonth() + 1
let currentDay = new Date(new Date()).getDate()
let lastMonth = currentMonth == 1 ? 12 : currentMonth - 1
let nextMonth = currentMonth == 12 ? 1 : currentMonth + 1

let currentMonthDays = haoManyDays(currentYear, currentMonth)
let lastMonthDays = haoManyDays(lastMonth == 12 ? currentYear - 1 : currentYear, lastMonth)
let nextMonthDays = haoManyDays(nextMonth == 1 ? currentYear + 1 : currentYear, nextMonth)

let allSection = allDays(lastMonthDays,currentMonthDays,nextMonthDays)
createTable(allSection,currentYear,currentMonth,currentDay)

function createTable(arrs,year,month,day) {
  let  body = document.getElementById('date-body')
  for (let i = 0; i <= 5; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j <= 6; j++) {
      let td = document.createElement('td')
      td.textContent = arrs[i*7+j]
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

