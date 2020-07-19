import moment from 'moment';

function getMonthString(month) {
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthArr[month];
}

export function formatDateString(dateString) {
    const date = moment(dateString);
    const currentMonth = moment().months();
    const currentYear = moment().year();
    const dateMonth = date.months();    
    const dateYear = date.year();   
    const monthEqual = currentMonth === dateMonth;
    const yearEqual = currentYear === dateYear;
    if (!yearEqual) return `on ${date.date()} ${getMonthString(dateMonth)} ${dateYear}`;
    else if (yearEqual && !monthEqual) return `on ${date.date()} ${getMonthString(dateMonth)}`;
    else if (yearEqual && monthEqual) {
        const diffDays = moment().diff(date, 'days');
        if (diffDays === 0) {
            const diffHours = moment().diff(date, 'hour');
            if (diffHours === 0) {
                const diffMinutes = moment().diff(date, 'minutes');
                if (diffMinutes === 0) return ' just now';
                else return ` ${diffMinutes} ${diffMinutes === 1? 'minute': 'minutes'} ago`;
            } else return ` ${diffHours} ${diffHours === 1? 'hour': 'hours'} ago`;
        } else return ` ${diffDays} ${diffDays === 1? 'day': 'days'} ago`; 
    }
}
