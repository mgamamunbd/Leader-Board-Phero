/** @format */

//color for top player section
var topPlayers = document.getElementById("top-player");
topPlayers.style.color = "rgba(255,0,255,0.3)";
//color for top blogs section
var topBlogs = document.getElementById("top-blogs");
topBlogs.style.color = "rgba(255,0,255,0.3)";
//background color for player section by for of loop
var playerSection = document.getElementsByClassName("players");
for (const player of playerSection) {
  player.style.backgroundColor = "rgba(255,0,255,0.3)";
}

//list item adding by button
const addListItem = document
  .getElementById("add-button")
  .addEventListener("click", function () {
    const listItem = document.createElement("li");
    listItem.innerHTML = "React";
    const list = document.getElementById("course");
    list.appendChild(listItem);
  });
