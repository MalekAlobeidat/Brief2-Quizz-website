
const loadVideo = (iframe) => {
const cid = "UC9A9xG0xCNhdeasNBaQ59HQ";
const channelURL = encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`)
const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`;

fetch(reqURL)
  .then(response => response.json())
  .then(result => {
    console.log(result)
      const videoNumber = iframe.getAttribute('vnum')
      const link = result.items[0].link;
      const id = link.substr(link.indexOf("=") + 1);
      iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`);
  })
  .catch(error => console.log('error', error));
}

const iframes = document.getElementsByClassName('latestVideoEmbed');
for (let i = 0, len = iframes.length; i < len; i++) {
loadVideo(iframes[i]);
}

const isLoggedIn = localStorage.getItem("isLoggedIn");
const loginButtons = document.getElementById("links");
const logoutButton = document.getElementById("logout-button");

if (isLoggedIn) {
  loginButtons.style.display = "none";
  logoutButton.style.display = "flex";
}
else {
  loginButtons.style.display = "flex";
  logoutButton.style.display = "none";
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("name");
  window.location.href = "../homepage.html";
}



