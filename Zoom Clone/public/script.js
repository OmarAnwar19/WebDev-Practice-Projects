const socket = io("/");
const videoGrid = document.getElementById("video-grid");
const myPeer = new Peer(undefined, {
  host: "/",
  port: "5001",
});

//creating a video item, and muting it by defualt (only so we dont here ourselves)
const myVideo = document.createElement("video");
myVideo.muted = true;

//a list of all the users
const peers = {};

//editing media devices
navigator.mediaDevices
  //getting the user's video and audio
  .getUserMedia({
    video: true,
    audio: true,
  })
  //this returns a promise, which contains a video stream
  .then((stream) => {
    //calling our add video stream method, with our video and stream
    //this outputs our video stream ro our screen
    addVideoStream(myVideo, stream);

    myPeer.on("call", (call) => {
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
      });
    });

    //whena new user connects, we send them our own video
    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
  });

socket.on("user-disconnected", (userId) => {
  if (peers[userId]) peers[userId].close();
});

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

//our method to connect suers to eachother
function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  const video = document.createElement("video");
  call.on("stream", (userVideoStream) => {
    addVideoStream(video, userVideoStream);
  });
  call.on("close", () => {
    video.remove();
  });

  peers[userId] = call;
}

//our addvideostream method
function addVideoStream(video, stream) {
  //pretty much what we do here, is as soon as the video is loaded, we start playing it
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  //then append the video to our page
  videoGrid.append(video);
}
