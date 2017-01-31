import React from 'react';
import axios from 'axios';
import NewPollForm from './NewPollForm';
import { FormControl } from 'react-bootstrap';

export default class NewPollFormContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			formClass: 'hidden',
			newButtonClass: '',
			optionBoxes: [],
			options: ['', ''],
			optionsCount: 2
		};
		this.showForm = this.showForm.bind(this);
		this.addNewOption = this.addNewOption.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	showForm() {
		this.setState({newButtonClass: 'hidden', formClass: ''});
	}

	handleTitleChange(e) {
		this.setState({title: e.target.value});
		console.log(this.state);
	}

	handleOptionChange(key, e) {
		var newArray = this.state.options.slice();
	    newArray[key] = e.target.value;
	    this.setState({options: newArray});
	}

	addNewOption() {
		const count = this.state.optionsCount + 1;
		const optionsNewArray = this.state.options.slice();
		const newOptionBox = <FormControl
            type="text"
            key={count-1}
            value={this.state.options[count-1]}
            className="list-item-box"
            onChange={this.handleOptionChange.bind(this, count-1)}
            placeholder={"Vote option #" + count}
        />;
        const optionBoxesNewArray = this.state.optionBoxes.slice();
	    optionBoxesNewArray.push(newOptionBox);
		optionsNewArray.push('');

		this.setState({optionBoxes: optionBoxesNewArray, optionsCount: count, options: optionsNewArray});
	}

	render() {
		return (
			<NewPollForm
				{...this.state}
				showForm={this.showForm}
				addNewOption={this.addNewOption}
				handleTitleChange={this.handleTitleChange}
				handleOptionChange={this.handleOptionChange}
			/>
		);
	}
}