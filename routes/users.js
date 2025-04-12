import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
  {
    user_id: '14f19048-3102-412a-94e9-73576d2449fb',
    first_name: 'John',
    last_name: 'Doe',
    age: 25,
  },
  {
    user_id: '551a8a94-7642-457f-ac22-e857d23006ea',
    first_name: 'Jane',
    last_name: 'Doe',
    age: 24,
  },
];

router.get('/', (req, res) => {
  res.send(users);
});

router.post('/', (req, res) => {
  const user = { user_id: uuidv4(), ...req.body };
  users.push(user);
  res.send(user);
  res.send(`User with name ${user.first_name} added to the database!`);
});

export default router;
