import moment from "moment";

function formatDate(date) {
  const theRigthDay = moment(date).format("dddd Do MMMM YYYY");
  return theRigthDay;
}

function yearsSinceDate(date) {
  const numberOfYearsSince = moment(date).toNow(true);
  console.log(numberOfYearsSince);
  return numberOfYearsSince;
}

function getDayFromDate(date) {
  let dayFromDate;
  console.log(dayFromDate);
  return dayFromDate;
}

function daysSinceDate(date) {}

export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate };
