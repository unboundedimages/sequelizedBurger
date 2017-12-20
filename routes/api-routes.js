var db = require("../models");

module.exports = function(app) {
    console.log(app);
    app.get("/api/burger", function(req, res) {
        db.burgers.findAll().then(function(dbburger) {
            res.json(dbburger);
        });
    });


    //ends model.export function



    //importing express and burger.js


    // app.get("/", function(req, res) {
    //     db.burger.findAll({ raw: true })
    //         .then(function(hbsObject) {
    //             console.log(hbsObject);
    //             res.render("index", hbsObject);

    app.get("/", function(req, res) {
        db.burgers.findAll({ raw: true })
            .then(function(hbsObject) {
                console.log(hbsObject);
                res.render("index", hbsObject);

            });

        // db.burger.findAll(function(data) {
        //     var hbsObject = {
        //         burger: data
        //     };
        //     console.log("test: " + JSON.stringify(hbsObject));
        //     res.render("index", hbsObject);
        // });
    });
    //this portion creates. Post = create
    //
    app.post("/burger/insertOne", function(req, res) {
            console.log(req.body);
            db.burgers.create({
                text: req.body.burger_name,
                complete: false
            }).then(function() { res.redirect("/") });


            // db.create(["burger_name", "devoured"], [req.body.burger_name, false],
            //     function(hbsObject) {
            //         console.log(hbsObject);
            //         res.redirect("/");
            //     }
            // );

        }

    );
    app.get("/burger/updateOne/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("under what condition ", condition);
        console.log(req.body);
        db.update({ devoured: true }, condition, function() {
            res.redirect("/");
        });
    });



};
