const btn = document.getElementsByClassName("btn")[0];
const ratings = document.getElementsByClassName("circle");
const ratingCard = document.getElementsByClassName("rating_section")[0];
const thankCard = document.getElementsByClassName("thank_you")[0];
const ratingNumber = document.getElementById("ratingNum");

function change() {
    ratingCard.style.display = "none";
    thankCard.style.display = "block";
    let activeElement = document.getElementsByClassName("active")[0];
    ratingNumber.innerText = activeElement.innerText
}


btn.addEventListener("click", change);

function ratingFunc(e) {
    for (let j = 0; j < ratings.length; j++) {
        const rate = ratings[j];
        rate.classList.remove("active");
    }
    e.target.classList.add("active");
}

for (let i = 0; i < ratings.length; i++) {
    const rate = ratings[i];
    rate.addEventListener("click", ratingFunc)
}

