import express from 'express';
import {
  create_user,
  delete_user,
  update_user,
  get_user,
  get_all_users,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', get_all_users);

router.get('/:user_id', get_user);

router.post('/', create_user);

router.delete('/:user_id', delete_user);

router.patch('/:user_id', update_user);

export default router;
