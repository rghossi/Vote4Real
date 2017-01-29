'use strict';
const contests = [
	{
		id: 1,
		name: "Favorite programming language",
		options: [
			{ id: 1, desc: "JavaScript", count: 2 , users: null},
			{ id: 2, desc: "Java", count: 3 , users: null},
			{ id: 3, desc: "Ruby", count: 6 , users: null},
			{ id: 4, desc: "Python", count: 4 , users: null},
			{ id: 5, desc: "C++", count: 1 , users: null}
		],
		totalVotes: 16
	},
	{
		id: 2,
		name: "Cats or Dogs",
		options: [
			{ id: 1, desc: "Cats", count: 9 , users: null},
			{ id: 2, desc: "Dogs", count: 4 , users: null}
		],
		totalVotes: 13
	}
];

export default contests;