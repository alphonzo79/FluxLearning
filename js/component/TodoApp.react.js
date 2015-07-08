import Footer from './Footer.react';
import Header from './Header.react';
import MainSection from './MainSection.react';
var React = require('react');
import TodoStore from '../store/TodoStore';

function getTodoState() {
	return {
		allTodos: TodoStore.getAll(),
		areAllComplete: TodoStore.areAllComplete()
	};
}

var TodoApp = React.createClass({
	getInitialState: function() {
		return getTodoState();
	},
	
	componentDidMount: function() {
		TodoStore.addChangelistener(this._onChange);
	},
	
	componentWillUnmount: function() {
		TodoStore.removeChangeListener(this._onChange);
	},
	
	render: function() {
		return (
			<div>
				<Header />
				<MainSection 
					allTodos={this.state.allTodos}
					areAllComplete={this.state.areAllComplete}
				/>
				<Footer allTodos={this.state.allTodos} />
			</div>
		);
	},
	
	_onChange: function() {
		this.setState(getTodoState());
	}
});

export default TodoApp;