const getters={
	count2(state){
		return state.count;
	},
	getOdd(state){
		return state.count%2==0?'结果是偶数':'结果是奇数';
	}
}

export default getters