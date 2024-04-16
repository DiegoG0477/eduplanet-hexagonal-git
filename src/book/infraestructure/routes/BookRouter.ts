import express from 'express';

import { authMiddleware } from '../../../middlewares/authMiddleware';

import {
    addBookController,
    getByIdBookController,
    getAllBooksController,
    updateBookController,
    deleteBookController,
} from '../dependencies';

const bookRouter = express.Router();

bookRouter.post('/', authMiddleware, (req, res) => addBookController.run(req, res));
bookRouter.get('/:id', authMiddleware, (req, res) => getByIdBookController.run(req, res));
bookRouter.get('/', authMiddleware, (req, res) => getAllBooksController.run(req, res));
bookRouter.patch('/:id', authMiddleware, (req, res) => updateBookController.run(req, res));
bookRouter.delete('/:id', authMiddleware, (req, res) => deleteBookController.run(req, res));

export { bookRouter };