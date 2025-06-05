//EventListener .

//HOMEWORK :
const fullReview = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;
const shortReview = `"This company exceeded my expectations in every way..."`;

const reviewText = document.getElementById("reviewText");
const toggleBtn = document.getElementById("toggleReview");

let expanded = false;

toggleBtn.addEventListener("click", () => {
      expanded = !expanded;

      reviewText.textContent = expanded ? fullReview : shortReview;
      toggleBtn.textContent = expanded ? "Show less" : "Read full review";
});

