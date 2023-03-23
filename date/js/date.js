
let lastSelectElement = null
let currentDayElement
let date = new Date()
let year
let yearFlag = false
createDateContent(new Date())

let monthFlag = false

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
  if(yearFlag){
    year = year + 15
    createYear(year)
    return
  }
  if(monthFlag){
    let singleYear = document.getElementById('single-year')
    singleYear.textContent = +singleYear.textContent + 1
    return
  }
  date = nextYearDate(date)
  createDateContent(date)
})


let  doubleLeft = document.getElementById('double-left')
doubleLeft.addEventListener('click',function(e){
  if(yearFlag){
    year = year + 15
    createYear(year)
    return
  }
  if(monthFlag){
    let singleYear = document.getElementById('single-year')
    singleYear.textContent = +singleYear.textContent - 1
    return
  }  
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
  let dateType  = element.getAttribute('class')
  if(dateType == 'day-prev' || dateType == 'day-next'){
    createDateContent(new Date(ymd))
    let dateContent = document.getElementById('date-content')
    dateContent.classList.remove('date-content-show')
    return
  }
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
  e.stopPropagation()
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
  date = new Date()
  createDateContent(date)
  let dateContent = document.getElementById('date-content')
  dateContent.classList.remove('date-content-show')
  let dateInput = document.getElementById('input-date')
  let {currentYear,currentMonth,currentDay} = createDate(date)
  dateInput.value = `${currentYear}-${currentMonth}-${currentDay}`
})

window.addEventListener('click',function(e){
  console.log('document')
  let dateContent = document.getElementById('date-content')
  dateContent.classList.remove('date-content-show')
})

let dateContent = document.getElementById('date-content')
dateContent.addEventListener('click',function(e){
  e.stopPropagation()
})


let yearElement = document.getElementById('year')
yearElement.addEventListener('click',function(e){
  yearFlag = true;
  year = parseInt(e.target.innerText)
  let dateContainer = document.getElementById('date-container')
  dateContainer.style.display = 'none'
  createYear(year)
  let yearAndMonth = document.getElementById('year-and-month')
  yearAndMonth.style.display = 'none'

  let singleLeft = document.getElementById('single-left')
  singleLeft.style.display = 'none'

  let singleRight = document.getElementById('single-right')
  singleRight.style.display = 'none'

  let yearLink = document.getElementById('year-link')
  yearLink.style.display = 'block'

  let yearBegin = document.getElementById('year-begin')
  yearBegin.textContent = year - 7

  let yearEnd = document.getElementById('year-end')
  yearEnd.textContent = year + 7
})

let yearBody = document.getElementById('year-body')
yearBody.addEventListener('click',function(e){
  yearFlag = false;
  let dateContainer = document.getElementById('date-container')
  dateContainer.style.display = 'block'
  yearBody.style.display = 'none'

  year = parseInt(e.target.innerText)
  let month = date.getMonth() + 1
  let day = date.getDate()
  createDateContent(new Date(`${year}-${month}-${day}`))
  let yearAndMonth = document.getElementById('year-and-month')
  yearAndMonth.style.display = 'block'
  
  let singleLeft = document.getElementById('single-left')
  singleLeft.style.display = 'inline-block'

  let singleRight = document.getElementById('single-right')
  singleRight.style.display = 'inline-block'

  let yearLink = document.getElementById('year-link')
  yearLink.style.display = 'none'
})



let monthElement = document.getElementById('month')
monthElement.addEventListener('click',function(e){
  monthFlag = true
  month = parseInt(e.target.innerText)
  let dateContainer = document.getElementById('date-container')
  dateContainer.style.display = 'none'
  createMonth(month)
  
  let yearAndMonth = document.getElementById('year-and-month')
  yearAndMonth.style.display = 'none'

  let singleLeft = document.getElementById('single-left')
  singleLeft.style.display = 'none'

  let singleRight = document.getElementById('single-right')
  singleRight.style.display = 'none'

  let singleYearBox = document.getElementById('single-year-box')
  singleYearBox.style.display = 'block'

  let singleYear = document.getElementById('single-year')
  singleYear.textContent = date.getFullYear()
})

let monthBody = document.getElementById('month-body')
monthBody.addEventListener('click',function(e){
  monthFlag = false;
  let dateContainer = document.getElementById('date-container')
  dateContainer.style.display = 'block'
  monthBody.style.display = 'none'
  let element = e.target
  month = element.getAttribute('month')
  let year = date.getFullYear()
  let day = date.getDate()
  createDateContent(new Date(`${year}-${month}-${day}`))
  let yearAndMonth = document.getElementById('year-and-month')
  yearAndMonth.style.display = 'block'
  
  let singleLeft = document.getElementById('single-left')
  singleLeft.style.display = 'inline-block'

  let singleRight = document.getElementById('single-right')
  singleRight.style.display = 'inline-block'

  let singleYearBox = document.getElementById('single-year-box')
  singleYearBox.style.display = 'none'
})
