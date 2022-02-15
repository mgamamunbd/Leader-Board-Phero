/** @format */

//color for top player section
var topPlayers = document.getElementById("top-player");
topPlayers.style.color = "rgba(255,0,255,0.3)";
//color for top blogs section
var topBlogs = document.getElementById("top-blogs");
topBlogs.style.color = "rgba(255,0,255,0.3)";
//background color for player section
var playerSection = document.getElementsByClassName("players");
for (const player of playerSection) {
  player.style.backgroundColor = "rgba(255,0,255,0.3)";
}
