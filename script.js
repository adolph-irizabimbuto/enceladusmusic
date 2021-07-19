const musicContaier = document.querySelector('.music-container');
const playButton = document.querySelector('#play');
const backButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const artist = document.querySelector('#artist')
const cover = document.querySelector('#cover');
const duration = document.querySelector('#duration');
const switch1 = document.getElementById('customSwitch');
const siteTitle = document.getElementById('site-title');

// song Titles

const songs = ['hallelu', 'kolo', 'KPK', 'Titanium', 'AG Baby','Vibration','Do Not Disturb','Dont Hurt Yourself',
'Guilt Trip','Hold Yuh','I Feel It Coming','Jesus Walks', 'Will', 'All of the stars', 'Lost In Ya Love','Kontrol', 'Racks In The Middle',
'Dont Touch My Hair', 'Damages', 'After Hours', 'Blinding Lights', 'The Hills', 'Touchin Lovin', 'Warm', 'Come Closer', 'How It Is',
'U Wit Me','Look Over Your Shoulder','Gyal You A Party Animal','Bad','SAD!'];



const artists = ['Masterkraft x Zlatan x Bella Shmurda ', 'Ice Prince', "Rexxie, MohBad", "Dave",'Adekunde Gold', 'Fireboy DML', 'Drake','Beyonce',
'Kanye West', 'Gyptian', 'The Weeknd', 'Kanye West', 'Joyner Lucas','SZA & Kendrick Lamar','Chris Brown','Maleek Berry','Nipsey Hussle (ft.Roddy Rich', 
'Solange Knowles','TEMS','The Weeknd','The Weeknd','The Weeknd','Trey Songz (ft. Nicki Minaj)','Majid Jordan','Wizkid (ft. Drake)', 'Young Thug'
,'Drake','Busta Rhymes (ft. Kendrick Lamar)','Charly Black','Juls Baby (feat Not3s Kojo Funds Eugy)','XXXTENTACION'];


// keep track of songs 

let songIndex = 1;
let timeElapsed = 0;

// intially load song into DOM 
loadSong(songs[songIndex]);

// update songs details 

function loadSong(song){
    title.innerText = `${song}`;
    let artistOfSong = songs.indexOf(song);
    artist.innerText = `Artist: ${artists[artistOfSong]}`
    audio.src = `music/${song}.mp3`;
    cover.src = `igm/${song}.jpg`;
    
}

// Pay Song
function playSong(){
    musicContaier.classList.add('play')
    playButton.querySelector('i.fas').classList.remove('fa-play');
    playButton.querySelector('i.fas').classList.add('fa-pause');
    audio.play()
    
}   

// Previous Song

function backSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex])
    playSong()
}

// Next Song

function nextSong(){
    songIndex++
    if(songIndex > songs.length -1){
        songIndex = 0;
    }
    
    loadSong(songs[songIndex])
    playSong()
}


// Update Progress Bar

function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration) * 100;
    progress.style.width = `${progressPercent}%`
    
}

// Pause Song
function pauseSong(){
    musicContaier.classList.remove('play')
    playButton.querySelector('i.fas').classList.add('fa-play');
    playButton.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

// Set the Progress bar to whatever the current time is
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration;
    
   
   
}

// EVENT LISTENERS

// Handle the play Button
playButton.addEventListener('click', () => {
    const isPlaying = musicContaier.classList.contains('play');

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }
})

// Changing Songs
backButton.addEventListener('click', backSong)
nextButton.addEventListener('click', nextSong)

// Updating the Progress Bar
audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click', setProgress)

// Playing the next song after the current one finsishes playing.
audio.addEventListener('ended' ,nextSong)


audio.addEventListener('timeupdate', (event) => {
    const currentTime = Math.floor(audio.currentTime);
    const duration = Math.floor(audio.duration);
    duration.innerText = `${currentTime}`
}, true);

// handle Volume



// handle dark mode 

function handleDarkMode(){
    if(switch1.checked == true){
    siteTitle.style.color = 'white';
    document.getElementById('body').style.backgroundColor = 'black'
    document.getElementById('musicContainer').style.backgroundColor = 'grey'
    title.style.color = 'white'
    artist.style.color = 'white'
    document.getElementById('musicInfo').style.backgroundColor = 'transparent'
    document.getElementById('toggleMessage').innerHTML = 'Turn Dark Mode OFF';
    document.getElementById('toggleMessage').style.color = 'grey'
    
    } else {
    siteTitle.style.color = 'black';
    document.getElementById('body').style.backgroundColor = 'white'
    document.getElementById('musicContainer').style.backgroundColor = 'white'
    title.style.color = 'black'
    artist.style.color = 'black'
    document.getElementById('musicInfo').style.backgroundColor = 'transparent'
    document.getElementById('toggleMessage').innerHTML = 'Turn Dark Mode ON';
    
}
}

