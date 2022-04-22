const NAV_PHONE = document.getElementById('nav-phone');
const NAV_BOOK = document.getElementById('nav-book');
const NAV_BAG = document.getElementById('nav-bag');
const CATEGORY_PHONE = document.getElementById('phone');
const CATEGORY_BOOK = document.getElementById('book');
const CATEGORY_BAG = document.getElementById('bag');
const CATEGORY_ALL = document.getElementById('nav-browse-all');
const LIST_MARKETPLACE = document.getElementsByClassName('menu');

NAV_PHONE.addEventListener('click', showPhone);
NAV_BOOK.addEventListener('click', showBook);
NAV_BAG.addEventListener('click', showBag);
CATEGORY_ALL.addEventListener('click', showAll);

function showPhone()
{
    for (var i = 0; i < LIST_MARKETPLACE.length; i++)
        LIST_MARKETPLACE[i].style.display = "none";
    CATEGORY_PHONE.style.display = 'block';
}

function showBook()
{
    for (var i = 0; i < LIST_MARKETPLACE.length; i++)
        LIST_MARKETPLACE[i].style.display = "none";
    CATEGORY_BOOK.style.display = 'block';
}

function showBag()
{
    for (var i = 0; i < LIST_MARKETPLACE.length; i++)
        LIST_MARKETPLACE[i].style.display = "none";
    CATEGORY_BAG.style.display = 'block';
}

function showAll()
{
    for (var i = 0; i < LIST_MARKETPLACE.length; i++)
        LIST_MARKETPLACE[i].style.display = "block";
}