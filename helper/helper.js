const cloudinary = require("cloudinary");
const _ = require('underscore');

const Q = require("q");

function upload(file) {
    cloudinary.config({
        cloud_name: "your cloudname",
        api_key: "your api key",
        api_secret: "your api secret "

    });

    return new Q.Promise((resolve, reject) => {
        cloudinary.v2.uploader.upload(file, {width: 50, height: 50}, (err, res) => {
            if (err) {
                console.log('cloudinary err:', err);
                reject(err);
            } else {
                console.log('cloudinary res:', res);
                return resolve(res.url);
            }
        });
    });
};


module.exports.upload = upload;
