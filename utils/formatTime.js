import dayjs from 'dayjs';

const formatTime = time => dayjs(time).format('DD MMMM, YYYY');

export default formatTime;
