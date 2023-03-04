let currentState = 'list';
const listView = document.querySelector(".master-detail__list-view");
const items = document.querySelectorAll(".master-detail__list-view>.list>.item");
const detailView = document.querySelector(".master-detail__detail-view");
const backButton = document.querySelector(".master-detail__to-list-view");
const content = document.querySelector(".master-detail__detail-view__content");

function goToListView() {
  console.log("goToListView");
  detailView.classList.remove("active");
  listView.classList.add("active");
  currentState = 'list';
}
function goToDetailView() {
  goToDetailViewWithId(this.dataset.id);
}

function goToDetailViewWithId(id) {
  detailView.classList.add("active");
  listView.classList.remove("active");
  currentState = id;
  content.innerText = `he GeForce GTX 1650 is a low-range graphics card by NVIDIA, launched on April 23rd, 2019. Built on the 12 nm process, and based on the TU117 graphics processor, in its TU117-300-A1 variant, the card supports DirectX 12. This ensures that all modern games will run on GeForce GTX 1650.`;
}

listView.addEventListener('focus', (event) => goToListView(), false);
detailView.addEventListener('focus', () => goToDetailViewWithId(currentState), false);
items.forEach(item => {
  item.addEventListener('click', goToDetailView);
})
backButton.addEventListener('click', (event) => goToListView());