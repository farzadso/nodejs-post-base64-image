const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const fs = require('fs-extra');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '5mb' }));

const port = process.env.PORT || 3000;
const router = express.Router();

router.route('/uploadImage').post(function(req, res) {
    console.log(req.body);
    let result = {
        error: false,
        success: false,
    };
    if(req.body.base64Data) {
        /**
         *
         * @param request.base64Data    The base64 data of the image
         * @param request.imageFormat   The mime type of the image
         * @param request.userID        The ID of the user sending the request
         */
        const request = req.body;
        // Remove header if existent
        let base64Image = request.base64Data.split(';base64,').pop();
        const imageFormat = request.imageFormat;
        const userID = request.userID;
        const file = `C:\/image\/${userID}\/profileImage.${imageFormat}`;

        fs.outputFile(file, base64Image, { encoding: 'base64' }, (err) => {
            if (err) {
                result.error = true;
            }
            result.success = true;
        res.json({ message: result });
    });
    }
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
