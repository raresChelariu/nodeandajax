var postRequestAJAX = (url, data) => {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = () => {
    const serverResponse = document.getElementById("output");
    serverResponse.innerHTML = `This is the response ${xhr.responseText}`;
  };
  var postRequestParameters = data;
  if (data !== null && typeof data != "string")
    postRequestParameters = Object.keys(data)
      .map((k) => {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      })
      .join("&");
  xhr.send(postRequestParameters);
};
postRequestAJAX("/getposts", null);
