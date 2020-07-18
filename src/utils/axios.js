import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.github.com/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export { instance as default };