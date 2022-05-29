const express = require("express");
const router = new express.Router();
const mensRanking = require("../models/mens");

router.post("/api/mens", async (req, res) => {
  try {
    const data = req.body;
    const mensRecord = new mensRanking(data);
    const op = await mensRecord.save();
    res.status(201).send(op);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/api/mens", async (req, res) => {
  try {
    const data = await mensRanking.find({}).sort({ ranking: 1 });
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/api/mens/:id", async (req, res) => {
  try {
    const data = await mensRanking.findById({ _id: req.params.id });
    res.status(200).send(data);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch("/api/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await mensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/api/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const data = await mensRanking.findByIdAndDelete(_id);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
