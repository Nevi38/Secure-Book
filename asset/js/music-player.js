const buttonPlay = document.getElementById('play');
const buttonPause = document.getElementById('pause');
const endTime = document.getElementById('endTime');
const currentTiming = document.getElementById('currentTime');
const progess = document.getElementById('progess');
const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('back');
const barLoading = document.getElementById('loading');

let song;

const list = [
  {
    song: "Sau lưng anh có ai kìa", 
    author: "Thiều Bảo Trâm",
    theme: "../asset/img/album-01.jpg"
  },
  {
    song: "Ngày đầu tiên", 
    author: "Đức Phúc",
    theme: "../asset/img/ngaydautien.jpg"
  }, 
  {
    song: "Đừng Nói Tôi Điên", 
    author: "Hiền Hồ",
    theme: "../asset/img/dungnoitoidien.png"
  },
  {
    song: "Mưa", 
    author: "Thùy Chi x M4U Band",
    theme: "../asset/img/rain.jpg"
  }
];

class Song {
  constructor() {
    this.Disc = document.getElementById('disc');
    this.author = document.getElementById('author');
    this.nameSong = document.getElementById('name-song');
  }
}

class UI {
  constructor() {
    this.songIndex = 0;
  }

  playSong() {
    buttonPlay.style.display = 'none'; // hide button Play
    buttonPause.style.display = 'block';

    song.play();

    new Song().Disc.style.animationPlayState = "running";
  }

  pauseSong() {
    buttonPause.style.display = 'none';
    buttonPlay.style.display = 'block';
    
    song.pause();

    new Song().Disc.style.animationPlayState = "paused";
  }

  nextSong() {
    this.pauseSong();
    this.songIndex++;

    if (this.songIndex == list.length)
      this.songIndex = 0;
    
    this.setSongs();
    this.playSong();
  }

  prevSong() {
    this.pauseSong();

    this.songIndex--;

    if (this.songIndex < 0)
      this.songIndex = list.length - 1;
   
    this.setSongs();
    this.playSong();
  }

  updateProgress(e) {
    const { currentTime, duration } = e.target;
    const percentWidth = (currentTime / duration) * 100;
    progess.style.width = `${percentWidth}%`
    const time = formatTime(currentTime);

    currentTiming.innerHTML = time;
  }

  resetTime() {
    currentTiming.innerHTML = '0:00';
    progess.style.width = "0%";
  }

  async setSongs() {
    let dir = '../music/';
    
    song = new Audio(dir + list[this.songIndex].song + '.mp3');
    
    endTime.innerHTML = await this.getDuration(song);
    
    this.resetTime()
    
    // Đặt đường dẫn cho thẻ audio
    new Song().Disc.src = list[this.songIndex].theme;

    // Set tên bài hát
    new Song().nameSong.innerHTML = list[this.songIndex].song;
    
    // Set tên tác giả
    new Song().author.innerHTML = list[this.songIndex].author;
  }

  getDuration(song) {
    return new Promise((result) => {
      song.addEventListener('loadedmetadata', () => {
        const time = formatTime(song.duration);

        result(time);
      })
    });
  }

  setProgress(e) {
    const width = e.offsetX;
    const progress = e.currentTarget;
    const progressBarWidth = (width / progress.clientWidth) * 100;
    
    progess.style.width = `${progressBarWidth}%`;

    let { duration } = song;

    song.currentTime = (width / progress.clientWidth) * duration;

    currentTiming.innerHTML = formatTime(song.currentTime);
  }
}

function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  minutes = minutes < 10 ? (minutes > 0 ? "0" + minutes : 0) : minutes;

  seconds = seconds < 10 ? (seconds > 0 ? "0" + seconds : "00") : seconds;

  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  let i = new UI();

  i.setSongs();

  buttonPlay.addEventListener('click', function () {
    i.playSong();
    updateTiming();
  });
  
  buttonPause.addEventListener('click', function () {
    i.pauseSong();
  });

  btnNext.addEventListener('click', function () {
    i.nextSong();
    updateTiming();
  });

  barLoading.addEventListener("click", function (e) {
    i.setProgress(e);
  });

  btnPrev.addEventListener('click', function() {
    i.prevSong();
    updateTiming();
  });

  song.addEventListener('ended', function () {
    i.pauseSong();
    i.resetTime();
  });
}

function updateTiming() {
  let i = new UI();
  song.addEventListener('timeupdate', function (e) {
    i.updateProgress(e);
  });
}