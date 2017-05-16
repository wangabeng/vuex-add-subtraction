// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex);

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// export default new Vuex.Store({
// 	state,
// 	actions,
// 	mutations,
// 	getters
// })
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


/*const state={
	count:10
};*/

/*const actions={
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
};*/

/*const mutations={
	increment2:function(state){
		//alert(1);
		return state.count++;
	},
	decrement2:function(state){
		//alert(1);
		return state.count--;
	}
}*/

/*const getters={
	count2(state){
		return state.count;
	},
	getOdd(state){
		return state.count%2==0?'结果是偶数':'结果是奇数';
	}
}*/

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})