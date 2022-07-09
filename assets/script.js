console.log("test");

const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progres')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
// const cover = document.querySelector('#natalie')

// Song titles -- via array
const songs = ['Torn', 'Done.','Two Black Cadillacs', 'Blackbird', 'Gold', 'Location', 'Love in the Dark', 'Centuries', 'Cruise', 'Year 3000']

//keep track of songs
let songIndex = 9

// Initially load songs info DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/Torn.mp3`
    audio.src = `music/Done..mp3`
    audio.src = `music/Two Black Cadillacs.mp3`
    audio.src = `music/Blackbird.mp3`
    audio.src = `music/Gold.mp3`
    audio.src = `music/Location.mp3`
    audio.src = `music/Love in the Dark.mp3`
    audio.src = `music/Centuries.mp3`
    audio.src = `music/Cruise.mp3`
    audio.src = `music/Year 3000.mp3`
    // cover.src = `albums/${song}.jpg`
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--

if (songIndex <0) {
    songIndex = songs.length - 1
}
    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex ++ 

    if (songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
    
}

function updateProgress(e) {
const {duration, currentTime} = e.srcElement
const progressPrecent = (currentTime / duration) * 100
progress.style.width = `${progressPrecent}%`

function setProgress(e)
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}


// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// change song events
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)