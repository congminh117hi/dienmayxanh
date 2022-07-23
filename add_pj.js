var list_project = JSON.parse(localStorage.getItem('list_project'));
if (list_project == null) {
    list_project = [];
}

function taoId() {
    var id = Math.random().toString().substr(2, 10) + '_' + String(new Date().getTime());
    return id;
}

function projectItem(id, img, numberSale, name, form, priceOld, percentSale, rating) {
    if (id == null) {
        this.id = taoId();
    } else {
        this.id = id;
    }
    this.img = img;
    this.numberSale = numberSale;
    this.name = name;
    this.form = form;
    this.priceOld = priceOld;
    this.percentSale = percentSale;
    this.priceSale = function() {
        return parseInt(this.priceOld * (1 - (this.percentSale) / 100));
    }
    this.rating = rating;
}

var jsonListProject = localStorage.getItem('list_project');
var get_project = JSON.parse(jsonListProject);
if (get_project == null) {
    get_project = [];
}
var projectList = [];
for (var i = 0; i < get_project.length; i++) {
    var project_item = new projectItem(get_project[i].id, get_project[i].img, get_project[i].numberSale, get_project[i].name, get_project[i].form, get_project[i].priceOld, get_project[i].percentSale, get_project[i].rating);
    projectList.push(project_item);
}

function renderProject() {
    var y = projectList.map(function(project, index) {
        return ` 
                
                <a target="_blank" href="./product-details/Trang sản phẩm.html" class="sale-item">
                    <div class="sale-item-img-img">
                        <img src="${project.img}" alt=" " class="sale-item-img ">
                    </div>
                    <div class="sale-item-lable ">
                        <img src="https://cdn.tgdd.vn/2020/10/content/icon1-50x50.png " width="20px " height="20px " alt=" " class="sale-item-lable-img ">
                        <span class="sale-item-lable-text ">${project.numberSale} SUẤT GIẢM SỐC</span>
                    </div>
                    <span class="sale-item-name ">${project.name}</span>
                    <span class="sale-item-form ">${project.form}</span>
                    <span class="sale-item-price-old "><p class="sale-item-price-old-text ">${project.priceOld} ₫</p><p class="sale-item-percent ">-${project.percentSale}%</p></span>
                    <strong class="sale-item-price-sale ">${project.priceSale()} ₫</strong>
                    <div class="sale-item-rate ">
                        <i class="fas fa-star sale-item-rate-icon "></i>
                        <i class="fas fa-star sale-item-rate-icon "></i>
                        <i class="fas fa-star sale-item-rate-icon "></i>
                        <i class="fas fa-star sale-item-rate-icon "></i>
                        <i class="fas fa-star sale-item-rate-icon "></i>
                        <p class="sale-item-rate-total ">${project.rating}</p>
                    </div>
                </a>`
    });
    var z = y.join(' ');
    document.querySelector('.sale-items').innerHTML = z;
}

renderProject();

var x = document.querySelectorAll('.sale-item');

if (x.length >= 5) {
    for (var i = 0; i < 5; i++) {
        x[i].classList.add('active');
    }
} else if (x.length < 5) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.add('active');
    }
}

function createProject() {
    var img = document.querySelector('.product-img').value;
    var numberSale = document.querySelector('.product-number-sale').value;
    var name = document.querySelector('.product-name').value;
    var form = document.querySelector('.product-form').value;
    var priceOld = document.querySelector('.product-price-old').value;
    var percentSale = document.querySelector('.product-percent-sale').value;
    var rating = document.querySelector('.product-rating').value;

    var input = document.querySelectorAll('.input');
    var error_msg = document.querySelectorAll('.msg-error');
    for (var i = 0; i < error_msg.length; i++) {
        error_msg[i].innerHTML = ''
    }



    document.querySelector('.product-img').classList.remove('input-error');
    document.querySelector('.product-number-sale').classList.remove('input-error');
    document.querySelector('.product-name').classList.remove('input-error');
    document.querySelector('.product-form').classList.remove('input-error');
    document.querySelector('.product-price-old').classList.remove('input-error');
    document.querySelector('.product-percent-sale').classList.remove('input-error');
    document.querySelector('.product-rating').classList.remove('input-error');
    for (var i = 0; i < input.length; i++) {
        if (input[i].value.trim() == '') {
            input[i].classList.add('input-error');
            error_msg[i].innerHTML = 'Vui lòng nhập đúng thông tin cho trường này';
        }
    }

    var input_number = document.querySelectorAll('input[type="number"]');
    for (var i = 0; i < input_number.length; i++) {
        if (parseInt(input_number[i].value) <= 0) {
            input_number[i].classList.add('input-error');
            input_number[i].parentElement.querySelector('.msg-error').innerHTML = 'Vui lòng nhập giá trị lớn hơn 0'
        }
    }

    if (parseInt(percentSale) > 100) {
        document.querySelector('.product-percent-sale').classList.add('input-error');
        document.querySelector('.product-percent-sale').parentElement.querySelector('.msg-error').innerHTML = 'Giá trị phải nhỏ hơn 100'
    }

    if (img.trim() != '' && numberSale.trim() != '' && name.trim() != '' && form.trim() != '' && priceOld.trim() != '' && percentSale.trim() != '' && rating.trim() != '') {
        if (numberSale > 0 && priceOld > 0 && percentSale > 0 && percentSale < 100 && rating > 0) {
            var newProject = new projectItem(null, img, numberSale, name, form, priceOld, percentSale, rating);
            list_project.push(newProject);
            var img = document.querySelector('.product-img').value = '';
            var numberSale = document.querySelector('.product-number-sale').value = '';
            var name = document.querySelector('.product-name').value = '';
            var form = document.querySelector('.product-form').value = '';
            var priceOld = document.querySelector('.product-price-old').value = '';
            var percentSale = document.querySelector('.product-percent-sale').value = '';
            var rating = document.querySelector('.product-rating').value = '';
            var json = JSON.stringify(list_project);
            localStorage.setItem('list_project', json);
            alert('Thêm sản phẩm thành công');
        }
    }
}