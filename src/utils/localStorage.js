export default {
	getItem: (key) => {
		try {
			const value = localStorage.getItem(key);
		    return JSON.parse(value ? value : JSON.stringify(null));
	    } catch (error) {
	    	return error
	    }
	},

	setItem: (key, value) => {
		try {
		    return localStorage.setItem(key, JSON.stringify(value));
	    } catch (error) {
	    	return error
	    }
	},

}