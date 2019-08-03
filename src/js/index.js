/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function Excuse() {
  var myDog = ["ninja", "cat", "grandma"];
  var ate = ["kicked", "snapped", "minced"];
  var myHomework = ["homework", "project", "report"];

  var who = myDog[Math.round(Math.random() * (myDog.length - 1))];
  var did = ate[Math.round(Math.random() * (ate.length - 1))];
  var what = myHomework[Math.round(Math.random() * (myHomework.length - 1))];

  document.getElementById("excuses").innerHTML = [who, did, what];
}
