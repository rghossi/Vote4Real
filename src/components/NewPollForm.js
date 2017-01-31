import React from 'react';
import axios from 'axios';
import { FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

export default class NewPollForm extends React.Component {
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
			<div id="form-enclosing-div">
				<Button className={this.state.newButtonClass} bsStyle="primary" bsSize="large" onClick={this.showForm} block>Create new Poll</Button>
				<form id="new-poll-form" className={this.state.formClass}>
			        <FormGroup
			          controlId="formBasicText"
			        >
			          <ControlLabel>New Poll</ControlLabel>
			          <FormControl
			            type="text"
			            value={this.state.title}
			            placeholder="Enter title"
			            onChange={this.handleTitleChange}
			          />
			          <FormControl
			            type="text"
			            key={0}
			            value={this.state.options[0]}
			            placeholder="Vote option #1"
			            onChange={this.handleOptionChange.bind(this, 0)}
			          />
			          <FormControl
			            type="text"
			            key={1}
			            value={this.state.options[1]}
			            placeholder="Vote option #2"
			            onChange={this.handleOptionChange.bind(this, 1)}
			          />
			          {this.state.optionBoxes}
			          <Button bsStyle="info" onClick={this.addNewOption} block>Add new option</Button>
			        </FormGroup>
			        <div className="text-center">
				        <Button bsStyle="danger" type="submit">
					      Submit
					    </Button>
				    </div>
			    </form>
		    </div>
		);
	}
}