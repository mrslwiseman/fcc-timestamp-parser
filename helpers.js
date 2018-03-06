function parseDate(query) {
    const getNatural = function (date) {

        const convertMonth = function (month) {
            switch (month) {
                case 0:
                    return 'January';
                case 1:
                    return 'February'
                case 2:
                    return 'March'
                case 3:
                    return 'April'
                case 4:
                    return 'May'
                case 5:
                    return 'June'
                case 6:
                    return 'July'
                case 7:
                    return 'August'
                case 8:
                    return 'September'
                case 9:
                    return 'October'
                case 10:
                    return 'November'
                case 11:
                    return 'December'
                default:
                    return null
            }
        }

        let day = date.getDate(); // 01
        let month = convertMonth(date.getMonth()); // January
        let year = date.getFullYear(); // 1990
        return `${month} ${day}, ${year}`
    }

    const isNatural = isNaN(Number(query)); // try casting to number, check if NaN, false if its a unix
    const date = isNatural ? new Date(query) : new Date(Number(query));
    const isValid = date instanceof Date && !isNaN(date.getTime());
    let natural = isValid ? getNatural(date) : null;
    let unix = isValid ? date.getTime() : null;
    return {
        unix,
        natural
    }
}

module.exports = parseDate;