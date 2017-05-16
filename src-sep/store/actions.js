const actions={
	increment:function({commit}){ //第一步 直接执行此函数 
		commit('increment2'); //第二步 触发increment2函数 
	},
	decrement:function({commit}){ 
		commit('decrement2'); 
	},
	addOdd:function({commit,state}){ 
		if (state.count%2==0){
			commit('increment2'); 
		}
	},
	addAsync:function({commit}){ 
		new Promise(
			function(resolve){
				setTimeout(function(){
					commit('increment2');
					resolve();
				},1000);
			}
		);
	}
};
export default actions