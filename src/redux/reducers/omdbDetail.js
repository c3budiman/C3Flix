const defaultState = {
	loading: true,
	data: null,
	error: ""
};

export default function omdbDetail (state = defaultState, action) {
	switch (action.type) {
		case 'GET_DETAIL_PENDING': return defaultState;

		case 'GET_DETAIL_FULFILLED':
			if(action.payload.data.Response === "True") {
				return {
					loading: false,
					data: action.payload.data,
					error: ""
				};
			} 
			else {
				return {
					loading: false,
					data: action.payload.data,
					error: ""
				};
			}

		default: return state;
	}
}
