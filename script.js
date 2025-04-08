
// Fade-in Text Effect
window.addEventListener("load", function () {
    document.querySelector(".text").classList.add("fade-in");
});
function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial setup
showSlide(currentIndex);


// setInterval(nextSlide, 3000);

// Add hover effect for buttons
document.querySelectorAll(".book-btn").forEach((button) => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});

// Add click event for booking buttons
document.querySelectorAll(".book-btn").forEach((button) => {
    button.addEventListener("click", () => {
        alert("Booking process will be implemented soon!");
    });
});

document.querySelectorAll(".book-now").forEach((button) => {
    button.addEventListener("click", (event) => {
        const roomType = event.target.closest(".room-card").dataset.room;
        const roomPrice = event.target.closest(".room-card").dataset.price;
        alert(`Booking confirmed for ${roomType} at ₹${roomPrice}`);
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const buttons = document.querySelectorAll(".room-btn");
//     const rooms = document.querySelectorAll(".room");

//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             rooms.forEach(room => room.classList.remove("active"));
//             const selectedRoom = document.getElementById(button.dataset.room);
//             selectedRoom.classList.add("active");
//         });
//     });
// });

