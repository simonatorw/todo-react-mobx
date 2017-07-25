import { observable, action } from 'mobx';

class AppStore {
	@observable todos = ['Eat', 'Shower', 'Sleep']

	@action addToList(val) {
		this.todos.push(val);
	}
	
	@action removeFromList(i) {
		this.todos.splice(i, 1);
	}
}

export default new AppStore;
