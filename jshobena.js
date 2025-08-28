let heart = 0;
let coin = 100;
let copy = 0;

const heartSpan = document.querySelector(".circle-bg h1 span");
const coinSpan = document.querySelectorAll(".circle-bg h1")[1];
const copySpan = document.querySelector(".circle-bg1");
const historyContainer = document.querySelector(".call-history div:last-child");
const cleanBtn = document.querySelector(".call-history-btn");

document.querySelectorAll(".card").forEach((card) => {
  const heartIcon = card.querySelector(".fa-heart");
  const copyBtn = card.querySelector(".button-container button:first-child");
  const callBtn = card.querySelector(".button-container button:last-child");

  const serviceName = card.querySelector(".hind-font").innerText;
  const serviceNumber = card.querySelector(".poppins-font").innerText;

  heartIcon.addEventListener("click", () => {
    heart++;
    heartSpan.innerText = heart;
    heartIcon.style.color = "red";
  });

  copyBtn.addEventListener("click", () => {
    const hotline = card.querySelector(".poppins-font").innerText;
    navigator.clipboard.writeText(hotline).then(() => {
      copy++;
      copySpan.innerHTML = `${copy} <span>Copy</span>`;
      alert(`${hotline} কপি হয়েছে!`);
    });
  });

  callBtn.addEventListener("click", () => {
    const hotline = card.querySelector(".poppins-font").innerText;
    const service = card.querySelector(".hind-font").innerText;

    if (coin < 20) {
      alert("কল করার জন্য পর্যাপ্ত কয়েন নেই!");
      return;
    }
    coin -= 20;
    coinSpan.innerText = coin;

    alert(`${service} (${hotline}) কে কল করা হচ্ছে...`);

    const time = new Date().toLocaleTimeString();
    const historyItem = document.createElement("p");
    historyItem.innerText = `${service} (${hotline}) - ${time}`;
    historyContainer.appendChild(historyItem);
  });
});

cleanBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
  alert("কল হিস্ট্রি ক্লিয়ার করা হয়েছে");
});
