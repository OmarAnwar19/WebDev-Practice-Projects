const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");

app.set("view engine", "ejs");
app.use(express.static("public"));

//setting our home folder, so we can use our css styling
app.use(express.static(path.join(__dirname, "public")));

//when someone accesses /, we want to redirect them to their own room
//we do this by redirecting to a new, randomly generated uuid room
//everytime we send a get requires to "/", we will be redirected to a new room
app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

//when someone accesses a room which we defined up top, we render a new room,
//with the room id being the uuid which is in the link to which we redirected up top
//we then render a new room for each id, n amount of times
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

//setting up our socket.io
io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    //sockets essentially act as the user's web identtity
    //when a user joins our room, they beecome the socket, and as such, we can go
    //socket.join(roomId), to pretty much say that we should add the user to the room
    socket.join(roomId);
    //brodcast a message to every user in the room except the one that just joined
    socket.to(roomId).broadcast.emit("user-connected", userId);

    //on disconnect, disconnect, remove the user, and send a message to everyone
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
