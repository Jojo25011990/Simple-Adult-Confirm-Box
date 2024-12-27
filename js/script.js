"use strict";

const enterBtn = document.getElementById("enter-btn");
const confirmBtnYes = document.querySelector(".confirm__box-yes");
const confirmBtnNo = document.querySelector(".confirm__box-no");
const overlay = document.querySelector(".overlay");
const confirmBox = document.querySelector(".confirm__box");
const confirmBoxText = document.querySelector(".confirm__box-text");
const textYesMessage = document.querySelector(".textYesMessage");

function showConfirmBoxText(message, callback) {
	confirmBoxText.textContent = message;

	const yesHandler = function () {
		overlay.classList.add("hidden");
		callback(true);
		confirmBtnYes.removeEventListener("click", yesHandler);
	};

	const noHandler = function () {
		overlay.classList.add("hidden");
		callback(false);
		confirmBtnYes.removeEventListener("click", noHandler);
	};

	confirmBtnYes.addEventListener("click", yesHandler);
	confirmBtnNo.addEventListener("click", noHandler);
}

enterBtn.addEventListener("click", (event) => {
	overlay.classList.remove("hidden");

	event.preventDefault();
	showConfirmBoxText("Are you 18?", (resultButtonValue) => {
		resultButtonValue
			? (textYesMessage.textContent = "You may enter ❤️")
			: (textYesMessage.textContent = "You cannot enter 😒");

		setTimeout(() => {
			textYesMessage.textContent = "";
		}, 1500);
	});
});
