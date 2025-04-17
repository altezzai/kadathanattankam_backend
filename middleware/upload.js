const multer = require('multer');
const path = require('path');
const { LIMIT_FILE_SIZE } = require('../utils/constants');

// Set storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // directory must exist
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    }
});

// File type filter (optional: only images)
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true);
    }
    cb(new Error('Only images are allowed'));
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: LIMIT_FILE_SIZE } // 10 MB max
});

module.exports = upload;
