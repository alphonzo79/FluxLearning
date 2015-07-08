var React = require('react');
import TodoActions from '../action/TodoActions';
import TodoTextInput from './TodoTextInput.react';

export default Header = {
	render: function () {
		return (
			<header id="header">
				<h1>Todos</h1>
				<TodoTextInput
					id="new-todo"
					placeholder="What needs to be done?"
					onSave={this._onSave}
				/>
			</header>
		);
	},
	
	_onSave: function(text) {
		if(text.trim()) {
			TodoActions.create(text);
		}
	}
};