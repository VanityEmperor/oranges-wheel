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

function allDays(lastMonthDays,currentMonthDays,currentYear,currentMonth){
    let lastMonth = getLastMonth(currentMonth)
    let nextMonth = getNextMonth(currentMonth)
    let lastYear = lastMonth == 12 ? currentYear - 1 : currentYear
    let nextYear = nextMonth == 1 ? currentYear + 1 : currentYear
    console.log('currentMonth',currentMonth)
    console.log('lastMonth',lastMonth)
    console.log('nextMonth',nextMonth)

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

function abc(){
  
}