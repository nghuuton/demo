const multer = require('multer');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + `_ ${file.originalname}`)
	}
});
const fileFilter = function (req, file, cb) {
	let fileTail = file.mimetype;
	if (fileTail === 'image/jpeg' || fileTail === 'image/jpg' || fileTail === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
		return cb(null, new Error("Sai định dạng hình ảnh"))
	}
}

const upload = multer({
	storage: storage,
	fileFilter: fileFilter
});

module.exports = upload