import express from 'express';

const router = express.Router();

//all routes in here start with /users

const users = [
	{
		firstName: 'Jane',
		lastName: 'Doe',
		age: 20,
	},
	{
		firstName: 'John',
		lastName: 'Doe',
		age: 25,
	},
];

router.get('/', (req, res) => {
	res.send(users);
});

router.post('/', (req, res) => {
	const user = req.body;

	users.push(user);

	res.send(`User with the name ${user.firstName} added to the database`);
});

export default router;
