const BUTTON_CREATE_POST = document.querySelector('#create-post');
const WINDOW_CREATE_POST = document.getElementById('js-create-post');
const BUTTON_CLOSE_CREATE_POST = document.querySelector('#js-close-create-post');
const CONTENT_POST = document.getElementById('story');
const BUTTON_CLOSE_IMAGE = document.getElementById('close');
const DISPLAY_IMAGE = document.getElementById('area-image');
const CREATE_POST = document.querySelectorAll('.js-btn-create-post');
const MARKETPLACE = document.getElementById('marketplace');
const MUSIC = document.getElementById('music');
const DISCOVER = document.getElementById('discover');
const LIST_FRIEND = document.getElementById('list-friends');
const PROFILE = document.getElementById('profile');

var idDisplay = document.getElementById('idDisplay');
var SRC_IMAGE = "";
var count = 0;

// ID Ảnh / bài viết
const ID_IMAGE = new Array(20);
var index_id_img = 0;

idPost();

call();

for (const item of CREATE_POST)
{
    item.addEventListener('click', showCreatePost);
}

MARKETPLACE.addEventListener('click', function() {
    window.location.href = "./Page/store.html";
});

MUSIC.addEventListener('click', function() {
    window.location.href = "./Page/music-player.html";
});

DISCOVER.addEventListener('click', function() {
    window.location.href = "./Page/discover.html";
});

LIST_FRIEND.addEventListener('click', function() {
    window.location.href = "./Page/listfriend.html";
});

PROFILE.addEventListener('click', function() {
    window.location.href = "./Page/profile.html";
});

BUTTON_CLOSE_CREATE_POST.addEventListener('click', hideCreatePost);

BUTTON_CREATE_POST.addEventListener('click', acept_UploadStory);

BUTTON_CLOSE_IMAGE.addEventListener('click', removeImage);

BUTTON_CREATE_POST.addEventListener('mouseover', function (event) {
    if (SRC_IMAGE !== '' || CONTENT_POST.value !== '')
        BUTTON_CREATE_POST.classList.remove('btn--disable');
    else
        BUTTON_CREATE_POST.classList.add('btn--disable');
});

function comment()
{
    // Lấy thẻ content
    const content = document.getElementsByClassName('content');

    // Đọc dữ liệu từ form input
    const mess = CONTENT_POST.value;

    // Tạo thẻ div
    const upStory = document.createElement('div');
    
    // Add class="upload" vào trong thẻ div
    upStory.classList.add('upload');

    var formStory =
    `<div class="upload__textbox">
        <img class="avatar" src="./asset/img/hacker.png" alt="">
        <div class="upload__textbox--wrap">
            <p>Anonymous</p>
            <span class="upload__textbox--sub">15 minutes · <i class="fa-solid fa-lock"></i></span>
        </div>
        <div class="upload__textbox--list">
            <i class="fa-solid fa-ellipsis"></i>
        </div>
    </div>

    <div class="upload__content">
        <div class="upload__content--mess">${mess}</div>
        <img class="upload__content--image" style="display: none;" src="${SRC_IMAGE}" id="${ID_IMAGE[index_id_img]}" alt="">
    </div>
    
    <div class="upload__emotion">
        <div class="upload__emotion--list upload__emotion--heart js-love"><span class="mr-5 count"></span><i class="fa-solid fa-heart"></i><span style="margin-left: 5px;">Love</span></div>
        <div class="upload__emotion--list upload__emotion--heart"><i class="fa-solid fa-comment"></i><span style="margin-left: 5px;">Comment</span></div>
    </div>
    
    <div class="upload__textbox">
        <img class="avatar" src="./asset/img/hacker.png" alt="">
        <div class="text__type--comment">
            <input class="text__type--comment-input" type="text" placeholder="Write a comment...">
            <div class="text__type--comment--emotion">
                <div class="emotion__icon emotion__icon--type-feel"><i class="fa-solid fa-face-laugh-wink"></i></div>
                <div class="emotion__icon emotion__icon--type-feel"><i class="fa-solid fa-face-laugh-wink"></i></div>
                <div class="emotion__icon emotion__icon--type-map"><i class="fa-solid fa-map-location-dot"></i></div>
                <div class="emotion__icon emotion__icon--type-more"><i class="fa-solid fa-ellipsis"></i></div>
            </div>
        </div>
    </div>`;

    upStory.innerHTML =  formStory;

    content[0].appendChild(upStory);
}

function uploadStory()
{
    hideCreatePost();

    comment();

    CONTENT_POST.value = '';
    
    BUTTON_CREATE_POST.classList.add('btn--disable');
}

function acept_UploadStory()
{
    if (CONTENT_POST.value != '' || SRC_IMAGE !== "")
    {
        uploadStory();
        
        showImage();
        
        // Tăng index lên 1: Không trùng lặp id giữa mỗi bài
        index_id_img++;

        removeImage();
    }
}

function showCreatePost()
{
    WINDOW_CREATE_POST.style.display = 'flex';
}

function hideCreatePost()
{
    WINDOW_CREATE_POST.style.display = 'none';
}

// Chỉ khi user up ảnh mới show thẻ img, còn không thì không show 
function showImage()
{
    var showImage = document.getElementById(ID_IMAGE[index_id_img]);

    if (SRC_IMAGE !== '')
        showImage.style.display = 'block';
}

function idPost()
{
    for (let i = 1; i <= ID_IMAGE.length; i++)
        ID_IMAGE[index_id_img++] = i;
    index_id_img = 0;
}

function removeImage()
{
    DISPLAY_IMAGE.style.display = 'none';

    idDisplay.src = "";

    SRC_IMAGE = "";
}

function call()
{
    const count_love = document.querySelectorAll('.js-love');
    for (const item of count_love)
    {
        item.addEventListener('click', function() {
            count = count + 1;
            item.querySelector('.count').innerHTML = count;
        });
    }
}

$("#image").change(function(){
    readURL(this);

    DISPLAY_IMAGE.style.display = 'block';

    BUTTON_CLOSE_IMAGE.classList.remove('hidden');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {    
            $('#idDisplay').attr('src', e.target.result);
            SRC_IMAGE = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}