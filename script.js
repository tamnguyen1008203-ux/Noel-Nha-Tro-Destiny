// 1. Hàm xử lý khi bấm vào trái tim
function openCard() {
    // Ẩn màn hình trái tim và hiện thiệp
    const heartContainer = document.getElementById('heart-container');
    const mainCard = document.getElementById('main-card');
    
    if (heartContainer && mainCard) {
        heartContainer.classList.add('hidden');
        mainCard.classList.remove('hidden');
    }

    // Phát nhạc nền
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.play().catch(error => console.log("Chưa phát được nhạc:", error));
    }

    // Lấy văn bản lời chúc và gọi hàm đọc
    const messageText = document.getElementById('message-text').innerText;
    speak(messageText);

    // Bắt đầu hiệu ứng tuyết rơi
    startSnowing();
}

// 2. Hàm giọng đọc tiếng Việt
function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.lang = 'vi-VN';
        msg.rate = 1;
        window.speechSynthesis.speak(msg);
    }
}

// 3. Hiệu ứng tuyết rơi
function startSnowing() {
    for (let i = 0; i < 50; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snow = document.createElement('div');
    snow.classList.add('snow');
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = Math.random() * 5 + 5 + 's';
    snow.style.width = snow.style.height = Math.random() * 5 + 5 + 'px';
    document.body.appendChild(snow);
    snow.addEventListener('animationend', () => {
        snow.remove();
        createSnowflake();
    });
}