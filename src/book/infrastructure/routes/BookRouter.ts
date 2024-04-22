import express from 'express';

import { authMiddleware } from '../../../middlewares/authMiddleware';

import {
    addBookController,
    getByIdBookController,
    getAllBooksController,
    updateBookController,
    deleteBookController,
    createOfferController
} from '../dependencies';

const bookRouter = express.Router();

bookRouter.post('/', authMiddleware, (req, res) => addBookController.run(req, res));
bookRouter.get('/:idBook', authMiddleware, (req, res) => getByIdBookController.run(req, res));
bookRouter.get('/', authMiddleware, (req, res) => getAllBooksController.run(req, res));
bookRouter.put('/', authMiddleware, (req, res) => updateBookController.run(req, res));
bookRouter.delete('/:idBook', authMiddleware, (req, res) => deleteBookController.run(req, res));
bookRouter.patch('/offer', authMiddleware, (req, res) => createOfferController.run(req, res));

export { bookRouter };