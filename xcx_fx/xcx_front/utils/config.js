let API;
if(process.env.NODE_ENV === 'development') {
	API = 'https://qutu.ytecinfo.com/';
} else {
	API = 'https://qutu.ytecinfo.com/';
}
export default {
	API
}