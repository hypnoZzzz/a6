const numDivs = 36;
const maxHits = 10;
let hits = 0;
let firstHitTime = 0;
let missTarget = 0;
let allHits = 0;

function round() {
  $(".target").text("");
  $(".target").removeClass("target");
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
    $(divSelector).removeClass("miss");
      $(".target").text(hits + 1);
      if (hits < 1) {
    firstHitTime = getTimestamp();
  }
      if (hits === maxHits) {
  endGame();
  }
}

function endGame() {
  $("#field").hide();
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  allHits = hits - missTarget;
  $("#win-count").text(allHits);
  $("#miss-count").text(missTarget);
  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  }
  else {
    ($(event.target).addClass("miss"))
    missTarget = missTarget + 1;
  };
}

function init() {
$("#button-reload").hide();
  $("#button-start").click(function() {
    round();
    $("#button-start").hide();
      $("#button-reload").show();
        $("#button-reload").click(function() {
        location.reload();
    });
    $(".game-field").click(handleClick);
  });
}

$(document).ready(init);