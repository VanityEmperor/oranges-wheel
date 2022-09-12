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

function allDays(lastMonthDays,currentMonthDays,nextMonthDays){
    let section1 = [...new Array(lastMonthDays + 1).keys()].slice(lastMonthDays - week + 1)
    let section2 = [...new Array(currentMonthDays + 1).keys()].slice(1)
    let section3 = [...new Array(42 - currentMonthDays - week + 1).keys()].slice(1)
    let allSection = [...section1, ...section2, ...section3]

    return allSection
}