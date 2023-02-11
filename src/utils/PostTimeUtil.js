const SECOND_AGO = 60000; // ms
const BELOW_HOUR = 60 * 60 * 1000; // ms
const BELOW_DAY = 24 * 60 * 60 * 1000; // ms
const BELOW_MONTH = 30 * BELOW_DAY; // ms
const BELOW_YEAR = 12 * BELOW_MONTH; // ms
const MINUTE = 60 * 1000;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const MONTH = 30 * DAY;
const YEAR = 12 * MONTH;

// Đầu vào: time string
// Đầu ra: khoảng cách thời gian từ đầu vào đến thời điểm hiện tại
export const showTime = (timeString) => {
    const currentTime = new Date().getTime();
    const time = new Date(timeString).getTime();

    const difference = currentTime - time;

    if (difference < SECOND_AGO) {
        return 'Second ago';
    } else if (difference < BELOW_HOUR) {
        return `${parseInt(difference / MINUTE)} minutes ago`;
    } else if (difference < BELOW_DAY) {
        return `${parseInt(difference / HOUR)} hours ago`;
    } else if (difference < BELOW_MONTH) {
        return `${parseInt(difference / DAY)} days ago`;
    } else if (difference < BELOW_YEAR) {
        return `${parseInt(difference / MONTH)} months ago`;
    } else {
        return `${parseInt(difference / YEAR)} years ago`;
    }
};
