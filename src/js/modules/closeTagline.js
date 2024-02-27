const closeTaglineBtn = document.querySelector("#closeTagline");
const tagline = document.querySelector(".tagline");

function closeTagline() {

  closeTaglineBtn.onclick = function () {
    tagline.remove();
  };
}

export default closeTagline
