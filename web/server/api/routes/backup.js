const express = require("express");
const router = express.Router();

router.post("/backup", (req, res) => {

    const { exec } = require("child_process");

    exec( 'sudo mongodump --uri "mongodb+srv://mjc:1234@mjcstrasbourg-2wl1e.gcp.mongodb.net/test?retryWrites=true&w=majority" --out ~/data/db/mongo/backup+`date "+%Y-%m-%d"`', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
});
module.exports = router;

