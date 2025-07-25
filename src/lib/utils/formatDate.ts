export default function formatDate(timestamp: number, getSecond = true): string {
	const date = new Date(timestamp);
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	const dayName = days[date.getDay()];
	const monthName = months[date.getMonth()];
	const day = date.getDate().toString().padStart(2, '0');
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const seconds = date.getSeconds().toString().padStart(2, '0');

	return `${dayName} ${monthName} ${day} ${hours}:${minutes}${getSecond ? `:${seconds}` : ''}`;
}
