console.log("Let's get this party started!");
const APIKey = "I8kLgw4r8xA39BANq3HZpVJtcRfwSHrP";
async function queryGif() {
  let searchTerm = $("#gif-name").val();
  let res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${APIKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`
  );
  console.log(res);
  appendGif(res);
}

function appendGif(gif) {
  const newImg = document.createElement("img");
  newImg.width = 200;
  newImg.height = 200;
  const random = Math.floor(Math.random() * 24);
  newImg.src = gif.data.data[random].images.original.url;
  imgCont = document.querySelector("#images");
  imgCont.append(newImg);
}

function removeGifs(e) {
  e.preventDefault();
  $("#images").empty();
}

$("#submit-btn").on("click", queryGif);
$("#remove").on("click", removeGifs);
