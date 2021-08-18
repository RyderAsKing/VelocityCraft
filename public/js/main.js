let t;
$(document).ready(() => {
  t = $(".ip").html();
});

$(document).on("click", ".ip", () => {
  let copy = document.createElement("textarea");
  copy.style.position = "absolute";
  copy.style.left = "-99999px";
  copy.style.top = "0";
  copy.setAttribute("id", "ta");
  document.body.appendChild(copy);
  copy.textContent = t;
  copy.select();
  document.execCommand("copy");
  $(".ip").html("<span class='extrapad'>IP copied!</span>");
  setTimeout(() => {
    $(".ip").html(t);
    var copy = document.getElementById("ta");
    copy.parentNode.removeChild(copy);
  }, 800);
});
