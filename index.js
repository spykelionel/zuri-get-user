const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      slackUsername: "spykelionel",
      backend: true,
      age: 24,
      bio: "I am an open-source enthusiast. I have being building softwares for almost 3 years now.",
    });
});

app.listen(process.env.PORT || 4000, _=>{
    console.log("App is running on port 4000")
})