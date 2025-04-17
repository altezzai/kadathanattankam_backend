const multer = require('multer');
const path = require('path');
const { LIMIT_FILE_SIZE } = require('../utils/constants');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/news');
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

const uploadNews = multer({
    storage,
    limits: { fileSize: LIMIT_FILE_SIZE }, // 10MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png/;
        const isValid = allowedTypes.test(path.extname(file.originalname).toLowerCase()) &&
                        allowedTypes.test(file.mimetype);
        isValid ? cb(null, true) : cb(new Error('Only images are allowed'));
    }
});

module.exports = uploadNews;
