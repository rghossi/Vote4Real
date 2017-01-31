import React from 'react';
import axios from 'axios';
import NewPollForm from './NewPollForm';
import { FormControl } from 'react-bootstrap';
import { withRouter } from 'react-router' 

class NewPollFormContainer extends React.Component {
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
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	showForm() {
		this.setState({newButtonClass: 'hidden', formClass: ''});
	}

	handleTitleChange(e) {
		this.setState({title: e.target.value});
	}

	handleOptionChange(key, e) {
		var newArray = this.state.options.slice();
	    newArray[key] = e.target.value;
	    this.setState({options: newArray});
	}

	handleFormSubmit() {
		let newOptionsArray = [];
		let count = 0;
		this.state.options.forEach((name) => {
			newOptionsArray.push({
				id: count++,
				desc: name
			});
		})
		axios.post("../api/polls", {
			title: this.state.title,
			options: newOptionsArray
		}).then( res => {
			const url = '/poll/' + res.data._id;
			this.props.router.push(url);
		}).catch( err => {
			this.props.router.push('/');
			console.err(err);
		});
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
				handleFormSubmit={this.handleFormSubmit}
			/>
		);
	}
}

export default withRouter(NewPollFormContainer);