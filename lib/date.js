const { DateTime } = require("luxon");

//TODO: How to export module and functions

// Today Date
var today = DateTime.now()

// Week number
var weekNumber = today.weekNumber
// console.log("Week number for this week: " + weekNumber )

// Week range
// NOTE: ASSUMES - MONDAY IS START DAY
var startDateWeek =  today.startOf('week').toLocaleString(DateTime.DATE_MED)
var endDateWeek = today.endOf('week').toLocaleString(DateTime.DATE_MED)

const WeekInfo = {
    today: today,
    weekNumber: weekNumber,
    startDateWeek: startDateWeek,
    endDateWeek: endDateWeek
}

export function getThisWeekInfo() {
    return {
        today: today,
        weekNumber: weekNumber,
        startDateWeek: startDateWeek,
        endDateWeek: endDateWeek
    }   
}

export function getWeekByWeekNumber(weekNumber) {
    const dt = DateTime.fromObject({
        weekNumber: weekNumber
    })

    return {
        weekNumber: weekNumber,
        startDateWeek: dt.startOf('week').toLocaleString(DateTime.DATE_MED),
        endDateWeek: dt.endOf('week').toLocaleString(DateTime.DATE_MED)
    }
}

export default WeekInfo;