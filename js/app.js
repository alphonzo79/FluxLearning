require("!style!css!../style.css");
var React = require('react');
import TodoApp from './component/TodoApp.react';

React.render(
	<TodoApp />,
	document.getElementById('todoapp')
);