const Date = (date_1, date_2 ) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(((difference * -1 ) / (1000 * 3600 * 24))/30);
    return TotalDays;
 }
 module.exports = { Date };
