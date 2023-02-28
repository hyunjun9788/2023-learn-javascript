1.
let d1 = new Date(2012, 1, 20, 3, 12);
alert( d1 );


2.
function getWeekDay(date){
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']
    return days[date.getDay()]}

let date = new Date(2014, 0, 3)
alert(getWeekDay(date))

3.

function getLocalDay(date) {
    let day = date.getDay()
    if (day == 0) {
        day = 7
    }
    return day
}

let date = new Date(2019,11,5)
alert(getLocalDay)

4.
function getDateAgo(date, days){

    let dateCopy = new Date(date)

    dateCopy.setDate(date.getDate() -days)
    return dateCopy.getDate()
}

let date = new Date(2015, 0, 2); // 2015년 1월 2일

alert( getDateAgo(date, 1) ); // 1, (2015년 1월 1일)
alert( getDateAgo(date, 2) ); // 31, (2014년 12월 31일)
alert( getDateAgo(date, 365) ); // 2, (2014년 1월 2일)

----------------------------

function getSecondsToday(){
    let now = new Date()

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())

    let diff = now -today
    return Math.round(diff / 1000)
}

alert(getSecondsToday())


function getSecondsToTomorrow(){
    let now = new Date()

    let tomorrow = new Date(now.getFullYear(),now.getMonth(),now.getDate()+1)

    let diff = tomorrow -now
    return Math.round(diff/1000)}
// ------------------------------------

function formatDate(date){
    let diff = new date()-date;

    if (diff < 1000)
        return '현재'}
let sec = Math.floor(diff/1000)

if(sec < 60){
    return sec + '초 전'
}

let min = Math.floor(diff/60000)
if(min<60){
    return min + '분 전'
}

let d = date;
d= [
    '0'+d.getDate(),
    '0'+(d.getMonth()+1),
    ''+d.getFullYear(),
    '0'+d.getHours(),
    '0'+d.getMinutes()
].map(component => component.slice(-2))

return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) );

alert( formatDate(new Date(new Date - 30 * 1000)) );

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );


alert( formatDate(new Date(new Date - 86400 * 1000)) );
