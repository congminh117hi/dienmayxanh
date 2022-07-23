// Tab 

var tabLinks = document.querySelectorAll(".product-tab");
var tabContent =document.querySelectorAll(".tab-content");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});

function openTabs(el) {
   var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
   var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
 
   tabContent.forEach(function(el) {
      el.classList.remove("active");
   }); //lặp qua các tab content để remove class active

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   }); //lặp qua các tab links để remove class active

   document.querySelector("#" + electronic).classList.add("active");
   // trả về phần tử đầu tiên có id="" được add class active
   
   btn.classList.add("active");
   // các button mà chúng ta click vào sẽ được add class active
}

// Modal

const Address = document.querySelector('.address')
const modal = document.querySelector('.modal-wrapper')
const modalClose = document.querySelector('.btn-close')
const modalContainer = document.querySelector('.container-modal')

// Hàm hiển thị modal mua vé ( thêm class open vào modal )
function showDeliveryAddress() {
   modal.classList.add('open')
}

// Hàm ẩn modal mua vé ( gỡ bỏ class open khỏi modal )
function hideDeliveryAddress() {
   modal.classList.remove('open')
}

   Address.addEventListener('click', showDeliveryAddress)

// Nghe hành vi click vào nút close
modalClose.addEventListener('click', hideDeliveryAddress)

modal.addEventListener('click', hideDeliveryAddress)
modalContainer.addEventListener('click', function(event) {
   event.stopPropagation()
})