const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, `./uploads/product`);
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        req.images += `|${name}`;
        cb(null, name)
    }
})
const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    }else {
        cb(null, false,)
    }
}
const upload = multer({
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    storage: storage,
    fileFilter: fileFilter
});

module.exports = upload;
