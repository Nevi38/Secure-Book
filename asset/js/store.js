const videos = [
    "../asset/video/bg-video-2.mp4",
    "../asset/video/earth.mp4",
    "../asset/video/matrix.mp4",
];

const listVideo = videos.length;
var curr_Video = 0;

var videoPlayer = document.getElementById('bg-video');

// Bắt đầu phát từ video đầu tiên cho tới hết danh sách phát
// Nếu  đã phát hết thì bắt đầu lại
videoPlayer.onended = function() {
    if (curr_Video < listVideo)
    {
        videoPlayer.src = videos[curr_Video++];
        changeQuote();
    }
    else
    { 
        curr_Video = 0;
        videoPlayer.src = videos[curr_Video++]
        changeQuote();
    }
}

// Trình duyệt chrome chỉ cho phép autoplay + muted
// Autoplay + Controls

const quotes = [
    "To live is the rarest thing in the world. Most people exist, that is all. ―Oscar Wilde",
    "Insanity is doing the same thing, over and over again, but expecting different results. ―Narcotics Anonymous",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. ―Albert Einstein",
    "Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are. ―Markus Zusak",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. ―Albert Einstein",
    "You should learn from your competitor, but never copy. Copy and you die. –Jack Ma",
    "Be who you are and say what you mean, because those who mind don’t matter and those who matter don’t mind. ―Dr. Seuss",
    "This too, shall pass. —Anonymous",
    "Keep your eyes on the stars and your feet on the ground. —Theodore Roosevelt",
    "The trick in life is learning how to deal with it. —Helen Mirren",
    "Believe you can and you’re halfway there. —T. Roosevelt"
]

var quote = document.getElementById('list-quote');
var len_quotes = quote.getElementsByTagName('p');
var m = new Date();
var index = 0;

let today = m.getMinutes();

function changeQuote()
{
    if (index === quotes.length)
        index = 0;
    for (const quote of len_quotes)
        quote.innerHTML = quotes[index++];
}

