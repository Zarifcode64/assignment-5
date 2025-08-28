var heart = 0;
var coin = 100;
var copy = 0;

// console.log(heart);


var heartSpan = document.querySelector(".circle-bg h1 span");
var coinSpan = document.querySelectorAll(".circle-bg h1")[1];
var copySpan = document.querySelector(".circle-bg1");
var historyContainer = document.querySelector(".call-history div:last-child");
var cleanBtn = document.querySelector(".call-history-btn");

var cards = document.querySelectorAll(".card");

// console.log()
for (var i = 0; i < cards.length; i++) {
  var card = cards[i];
  var heartIcon = card.querySelector(".fa-heart");
  var copyBtn = card.querySelector(".button-container button:first-child");
  var callBtn = card.querySelector(".button-container button:last-child");

  var serviceName = card.querySelector(".hind-font").innerText;
  var serviceNumber = card.querySelector(".poppins-font").innerText;

// console.log()

  heartIcon.addEventListener("click", function (e) {
    heart = heart + 1;
    heartSpan.innerText = heart;
    e.target.style.color = "red";
  });


  copyBtn.addEventListener("click", function (e) {
    var hotline = e.target.parentElement.parentElement.querySelector(".poppins-font").innerText;
    navigator.clipboard.writeText(hotline).then(function () {
      copy = copy + 1;
      copySpan.innerHTML = copy + " <span>Copy</span>";
      alert(hotline + " কপি হয়েছে!");
    });
  });

  callBtn.addEventListener("click", function (e) {
    var cardDiv = e.target.parentElement.parentElement;
    var hotline = cardDiv.querySelector(".poppins-font").innerText;
    var service = cardDiv.querySelector(".hind-font").innerText;

    if (coin < 20) {
      alert("কল করার জন্য পর্যাপ্ত কয়েন নেই!");
      return;
    }
    coin = coin - 20;
    coinSpan.innerText = coin;

    alert(service + " (" + hotline + ") কে কল করা হচ্ছে...");

    var time = new Date().toLocaleTimeString();
    var historyItem = document.createElement("p");
    historyItem.innerText = service + " (" + hotline + ") - " + time;
    historyContainer.appendChild(historyItem);
  });
}

cleanBtn.addEventListener("click", function () {
  historyContainer.innerHTML = "";
  alert("কল হিস্ট্রি ক্লিয়ার করা হয়েছে");
});
