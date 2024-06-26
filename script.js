document.addEventListener('DOMContentLoaded', () => {
    const sounds = {
        'Space': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-space.mp3',
        'ArrowUp': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-up.mp3',
        'ArrowRight': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-right.mp3',
        'ArrowLeft': 'https://anykhet.github.io/Interface-Design_Endabgabe/sounds/sound-left.mp3'
    };

    
    const visualizer = document.getElementById('visualizer');
    let audio = null;
    let isPlaying = false;

    const playSound = (soundKey) => {
        if (!isPlaying) {
            audio = new Audio(sounds[soundKey]);
            audio.play();
            isPlaying = true;
            visualizer.classList.add('playing');
        }
    };

    const stopSound = () => {
        if (isPlaying && audio) {
            audio.pause();
            audio.currentTime = 0;
            isPlaying = false;
            visualizer.classList.remove('playing');
        }
    };

    document.addEventListener('keydown', (event) => {
        const key = event.code;
        if (key in sounds) {
            playSound(key);
        }
    });

    document.addEventListener('keyup', (event) => {
        const key = event.code;
        if (key in sounds) {
            stopSound();
        }
    });
});