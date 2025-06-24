$("#messageState").on("change", (x) => {
	$(".message").removeClass("openNor").removeClass("closeNor");
	if ($("#messageState").is(":checked")) {
		$(".message").removeClass("closed").removeClass("no-anim").addClass("openNor");
		$(".heart").removeClass("closeHer").removeClass("openedHer").addClass("openHer");
		$(".container").stop().animate({"backgroundColor": "#f48fb1"}, 2000);
		console.log("Abrindo");
	} else {
		$(".message").removeClass("no-anim").addClass("closeNor");
		$(".heart").removeClass("openHer").removeClass("openedHer").addClass("closeHer");
		$(".container").stop().animate({"backgroundColor": "#fce4ec"}, 2000);
		console.log("fechando");
	}
});

$(".message").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if ($(".message").hasClass("closeNor"))
		$(".message").addClass("closed");
	$(".message").removeClass("openNor").removeClass("closeNor").addClass("no-anim");
});

$(".heart").on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	console.log("Animation End");
	if (!$(".heart").hasClass("closeHer"))
		$(".heart").addClass("openedHer").addClass("beating");
	else
		$(".heart").addClass("no-anim").removeClass("beating");
	$(".heart").removeClass("openHer").removeClass("closeHer");
});
// === COUNTDOWN TIMER ===
// Set your unlock date/time here (YYYY-MM-DDTHH:MM:SS format, 24h)
const unlockDate = new Date('2025-06-18T20:23:00'); // <-- change to your desired date

function updateCountdown() {
    const now = new Date();
    const diff = unlockDate - now;
    const countdownElem = document.getElementById('countdown');
    if (diff > 0) {
        // Calculate remaining days, hours, minutes, seconds
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);
        countdownElem.textContent = 
            `${d} ngày ${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    } else {
        // Time's up, hide overlay, unlock site
        countdownElem.textContent = "00 ngày 00:00:00";
        setTimeout(() => {
            document.getElementById('timer-overlay').style.opacity = 0;
            setTimeout(() => {
                document.getElementById('timer-overlay').style.display = 'none';
            }, 700);
        }, 900);
        clearInterval(timerInterval);
    }
}

updateCountdown(); // initial call
const timerInterval = setInterval(updateCountdown, 1000);