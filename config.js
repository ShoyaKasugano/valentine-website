// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Imtisangla ❤️",

    pageTitle: "For Imtisangla — My Favorite Person ❤️",

    floatingEmojis: {
        hearts: ['❤️','❤️','❤️','❤️','❤️'],
        bears: ['🧸']
    },

    questions: {
        first: {
            text: "Hey love… can I steal a minute of your time? ❤️",
            yesBtn: "Always ❤️",
            noBtn: "Wait… what? 😳",
            secretAnswer: "Good. Because every moment with you is my favorite."
        },
        second: {
            text: "Remind me again… how much do you love me? ❤️",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine again this year — February 14th, 2026? 🌹",
            yesBtn: "Forever ❤️",
            noBtn: "Impossible 😌"
        }
    },

    loveMessages: {
        extreme: "Okay wow… that's dangerously attractive 😳❤️🚀",
        high: "To infinity and a little further ❤️",
        normal: "I'll take that… but I know it's even more 🙂"
    },

    celebration: {
        title: "You just made me the happiest man alive ❤️",
        message: "Looks like I get to love you a little louder this Valentine’s. Dinner is on me… and yes, you also owe me some extra hugs 🙂",
        emojis: "❤️💖💕💝❤️"
    },

    colors: {
        backgroundStart: "#ff9a9e",
        backgroundEnd: "#fad0c4",
        buttonBackground: "#ff4d6d",
        buttonHover: "#ff758f",
        textColor: "#c9184a"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.6
    },

    music: {
        enabled: true,
        autoplay: false,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Our Song",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
