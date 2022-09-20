const fs = require("fs");

const getCV = (req, res) => {
  educations = fs.readFileSync("data/education", { encoding: "utf-8" });
  educations = JSON.parse(String(educations));

  edus = [];

  for (let key in educations) {
    edus.push(educations[key]);
  }

  experience = fs.readFileSync("data/experience", { encoding: "utf-8" });
  experience = JSON.parse(String(experience));

  expe = [];

  for (let key in experience) {
    expe.push(experience[key]);
  }

  skill = fs.readFileSync("data/skill", { encoding: "utf-8" });
  skill = JSON.parse(String(skill));

  skl = [];

  for (let key in skill) {
    skl.push(skill[key]);
  }

  const username = req.body.username;
  const email = req.body.email;
  const profession = req.body.profession;
  const place = req.body.place;
  const phonenumber = req.body.phonenumber;

  if (username === null) {
    username = "Abir";
  }

  res.render("cv", {
    name: username,
    profession: profession,
    place: place,
    email: email,
    phonenumber: phonenumber,
    educations: edus,
    experience: expe,
    skill: skl,
  });
};

module.exports = { getCV: getCV };
