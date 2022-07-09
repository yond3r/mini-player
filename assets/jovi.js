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
const songs = ['Talk', 'Almost (Sweet Music)', 'Howl', 'Bon, Bon', 'Superpower', 'For the Love of God', 'California Love (feat. Roger Troutman & Dr. Dre', 'Ghetto Gospel', 'The Bitch is Back', 'Vampire Money']

//keep track of songs
let songIndex = 9

// Initially load songs info DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/Talk.mp3`
    audio.src = `music/Almost (Sweet Music).mp3`
    audio.src = `music/Howl.mp3`
    audio.src = `music/Bon,Bon.mp3`
    audio.src = `music/Superpower.mp3`
    audio.src = `music/For the Love of God.mp3`
    audio.src = `music/California Love (feat. Roger Troutman & Dr. Dre.mp3`
    audio.src = `music/Ghetto Gospel.mp3`
    audio.src = `music/The Bitch is Back.mp3`
    audio.src = `music/Vampire Money.mp3`
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
