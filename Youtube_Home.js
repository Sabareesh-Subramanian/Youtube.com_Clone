async function GetVideos() {
  let searchbar = document.getElementById("searchbar");
  let res1 = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=${searchbar.value}&key=AIzaSyCtSA0qoOkvjb9vyCjkevfJsayqb8hHaIw&maxResults=30`
  );
  let res2 = await res1.json();
  //   console.log(res2);

  AppendVideos(res2);
  searchbar.value = "";
}

AppendVideos = ({ items: VideoArray }) => {
  //   console.log(VideoArray);
  let displaydiv = document.getElementById("displaydiv");
  displaydiv.innerHTML = "";
  let count = 0;
  VideoArray.forEach((video) => {
    // console.log(video.id.videoId);
    if (video.id.videoId != undefined && count <= 19) {
      let div = document.createElement("div");
      div.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      displaydiv.append(div);
      count++;
    }
  });
};

async function AppendPopularVideos() {
  let apikey = ""; // enter your YouTube API key here
  let res1 = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?q=Indiapopularvideos&key=${apikey}&maxResults=30`
  );
  let res2 = await res1.json();
  console.log(res2);
  let array = res2.items;
  let displaydiv = document.getElementById("displaydiv");
  displaydiv.innerHTML = "";
  let count = 0;
  array.forEach((video) => {
    // console.log(video.id.videoId);
    if (video.id.videoId != undefined && count <= 19) {
      let div = document.createElement("div");
      div.innerHTML = `<iframe src="https://www.youtube.com/embed/${video.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      displaydiv.append(div);
      count++;
    }
  });
}

AppendPopularVideos();
