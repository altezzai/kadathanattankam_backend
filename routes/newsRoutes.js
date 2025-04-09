const express = require('express');
const newsController = require('../controllers/newsController');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const uploadNews = require('../middleware/uploadNews');

// router.post('/', authenticateToken, newsController.createNews);
// POST with file upload
router.post('/',authenticateToken, uploadNews.single('image'), newsController.createNews);
router.get('/', newsController.getAllNews);
router.get('/latest', newsController.getLatestNews);
router.get('/:id', newsController.getNewsById);
router.put('/:id',authenticateToken, newsController.updateNews);
router.delete('/:id',authenticateToken, newsController.deleteNews);

module.exports = router;
