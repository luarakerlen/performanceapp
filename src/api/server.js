module.exports = () => {
	const data = {
		friends: [],
	};

	for (let index = 0; index < 500; index++) {
		data.friends.push({
			id: index + 1,
			likes: Math.round(Math.random() * 100),
			name: `Amiga ${index}`,
		});
	}

	return data;
};
