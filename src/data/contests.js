'use strict';
const contests = [
	{
		id: 1,
		name: "Favorite programming language",
		options: [
			{ id: 1, desc: "JavaScript", count: 0 , users: null},
			{ id: 2, desc: "Java", count: 0 , users: null},
			{ id: 3, desc: "Ruby", count: 0 , users: null},
			{ id: 4, desc: "Python", count: 0 , users: null},
			{ id: 5, desc: "C++", count: 0 , users: null}
		],
		totalVotes: 0
	},
	{
		id: 2,
		name: "Cats or Dogs",
		options: [
			{ id: 1, desc: "Cats", count: 0 , users: null},
			{ id: 2, desc: "Dogs", count: 0 , users: null}
		],
		totalVotes: 0
	}
];

export default contests;