function getParameterByName(untuk, url = window.location.href) {
  untuk = untuk.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + untuk + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

document.title = getParameterByName("untuk");
document.querySelector("#untuk").innerHTML = getParameterByName("untuk");
