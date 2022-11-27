function createDateContent(date){
  let currentDay = date.getDate()
  let dateFirstDay = getMonthFirstDay(date)
  let {week,currentYear,currentMonth,lastMonth,nextMonth,currentMonthDays,lastMonthDays,nextMonthDays} = createDate(dateFirstDay)
  let allSection = allDays(lastMonthDays,currentMonthDays,currentYear,currentMonth,week)
  createTable(allSection,currentYear,currentMonth,currentDay)
}


function haoManyDays(year, month) {
    const table = {
      1: 31, 3: 31, 5: 31, 7: 31, 8: 31, 9: 30, 10: 31, 12: 31,
      4: 30, 6: 30, 9: 30, 11: 30,
      2: isLeapYear(year) ? 29 : 28
    }
    return table[month]
}

function isLeapYear(year) {
    if ((year % 4 == 0 && !(year % 100 == 0)) || year % 400 == 0) {
      return true
    } else {
      return false
    }
}


function getMonthFirstDay(date){
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth() + 1
    return new Date(`${currentYear}-${currentMonth}-1`)
}

function allDays(lastMonthDays,currentMonthDays,currentYear,currentMonth,week){
    let lastMonth = getLastMonth(currentMonth)
    let nextMonth = getNextMonth(currentMonth)
    let lastYear = lastMonth == 12 ? currentYear - 1 : currentYear
    let nextYear = nextMonth == 1 ? currentYear + 1 : currentYear

    let section1 = [...new Array(lastMonthDays + 1).keys()].slice(lastMonthDays - week + 1)
    let section2 = [...new Array(currentMonthDays + 1).keys()].slice(1)
    let section3 = [...new Array(42 - currentMonthDays - week + 1).keys()].slice(1)
    let allSection = []
    section1.forEach((day)=>{
      allSection.push([day,`${lastYear}-${lastMonth}-${day}`,'day-prev'])
    })
    section2.forEach((day)=>{
      allSection.push([day,`${currentYear}-${currentMonth}-${day}`])
    })
    section3.forEach((day)=>{
      allSection.push([day,`${nextYear}-${nextMonth}-${day}`,'day-next'])
    })
    return allSection
}

function getLastMonth(currentMonth){
  return currentMonth == 1 ? 12 : currentMonth - 1
}

function getNextMonth(currentMonth){
  return currentMonth == 12 ? 1 : currentMonth + 1
}

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

function createDate(date){
  let week = new Date(date).getDay()
  let currentYear = new Date(date).getFullYear()
  let currentMonth = new Date(date).getMonth() + 1
  // let currentDay = new Date(new Date()).getDate()
  let lastMonth = getLastMonth(currentMonth)
  let nextMonth = getNextMonth(currentMonth)
  let currentMonthDays = haoManyDays(currentYear, currentMonth)
  let lastMonthDays = haoManyDays(lastMonth == 12 ? currentYear - 1 : currentYear, lastMonth)
  let nextMonthDays = haoManyDays(nextMonth == 1 ? currentYear + 1 : currentYear, nextMonth)


  return{
    week,
    currentYear,
    currentMonth,
    lastMonth,
    nextMonth,
    currentMonthDays,
    lastMonthDays,
    nextMonthDays,
  }
}

function nextMonthDate(date){
  let currentYear = date.getFullYear()
  let currentMonth = date.getMonth() + 1
  let currentDay = date.getDate()
  if(currentMonth == 12){
      currentMonth = 1
      currentYear = currentYear+1
  } else {
    currentMonth = currentMonth + 1
  }
  currentDay = dayValid(currentYear,currentMonth,currentDay)
  return new Date(`${currentYear}-${currentMonth}-${currentDay}`)
}


function lastMonthDate(date){
  let currentYear = date.getFullYear()
  let currentMonth = date.getMonth() + 1
  let currentDay = date.getDate()
  if(currentMonth == 1){
      currentMonth = 12
      currentYear = currentYear-1
  } else {
    currentMonth = currentMonth - 1
  }
  currentDay = dayValid(currentYear,currentMonth,currentDay)
  return new Date(`${currentYear}-${currentMonth}-${currentDay}`)
}

function nextYearDate(date){
  let currentYear = date.getFullYear()
  let currentMonth = date.getMonth() + 1
  let currentDay = date.getDate()
  currentYear = currentYear+1
  currentDay = dayValid(currentYear,currentMonth,currentDay)
  return new Date(`${currentYear}-${currentMonth}-${currentDay}`)
}


function lastYearDate(date){
  let currentYear = date.getFullYear()
  let currentMonth = date.getMonth() + 1
  let currentDay = date.getDate()
  currentYear = currentYear-1
  currentDay = dayValid(currentYear,currentMonth,currentDay)
  return new Date(`${currentYear}-${currentMonth}-${currentDay}`)
}

function dayValid(currentYear,currentMonth,currentDay){
  if(currentMonth==2&&currentDay>28){
    if(isLeapYear(currentYear)){
      currentDay = 29
    } else {
      currentDay = 28
    }
  }
  return currentDay
}