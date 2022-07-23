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