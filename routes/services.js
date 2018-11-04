let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    // Comment out this line:
    //res.send('respond with a resource');

    // And insert something like this instead:
    res.json([
            {
                title: "CUSTOM WEBSITE DESIGN",
                text: "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. i did the same thing to gandhi, he didn't eat for three weeks. i once heard a wise man say there are no perfect men."
            },
            {
                title: "WORDPRESS INTEGRATION",
                text: "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. i did the same thing to gandhi, he didn't eat for three weeks. i once heard a wise man say there are no perfect men."
            },
            {
                title: "APPLICATION DEVELOPMENT",
                text: "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. i did the same thing to gandhi, he didn't eat for three weeks. i once heard a wise man say there are no perfect men."
            },
            {
                title: "SEO & SEM SERVICES",
                text: "I don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. i did the same thing to gandhi, he didn't eat for three weeks. i once heard a wise man say there are no perfect men."
            }
        ]
    );
})
;

module.exports = router;
