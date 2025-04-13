import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
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

router.get('/:user_id', (req, res) => {
  const { user_id } = req.params;
  const user = users.find((user) => user.user_id == user_id);
  res.send(user);
});

router.post('/', (req, res) => {
  const user = { user_id: uuidv4(), ...req.body };
  users.push(user);
  res.send(user);
  res.send(`User with name ${user.first_name} added to the database!`);
});

router.delete('/:user_id', (req, res) => {
  const { user_id } = req.params;
  users = users.filter((user) => user.user_id !== user_id);
  res.send(users);
});

router.patch('/:user_id', (req, res) => {
  const { user_id } = req.params;
  const { first_name, last_name, age } = req.body;
  let user = users.find((user) => user.user_id == user_id);
  if (first_name) {
    user.first_name = first_name;
  }
  if (last_name) {
    user.last_name = last_name;
  }
  if (age) {
    user.age = age;
  }
  res.send(`User with user_id ${user_id} has been updated`);
});

export default router;
