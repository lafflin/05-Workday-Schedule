let timeBlocks = $(".time-block");
let saveBtn = $(".saveBtn");
let resetBtn = $("#resetBtn");
// sets the date at the top of the day
let currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM D"));

// below function changes the color of text block based off of the time of day.
function trackHour() {
	let currentHour = moment().hour();
	timeBlocks.each(function () {
		// honestly not 100% clear on what this is exactly doing. pretty sure the following line is just parsing the ids for the hours number, then separates it and logs it to be compared to the current hour.
		var blockHour = parseInt($(this).attr("id").split("hour")[1]);
		console.log(blockHour, currentHour);

		if (blockHour < currentHour) {
			$(this).addClass("past");
			$(this).removeClass("future", "present");
		}
		if (blockHour === currentHour) {
			$(this).addClass("present");
			$(this).removeClass("future", "past");
		}
		if (blockHour > currentHour) {
			$(this).addClass("future");
			$(this).removeClass("past", "present");
		}
	});
}
trackHour();

// button that saves the hour id as the key alongside the text in the text area as the value into local storage
saveBtn.on("click", function () {
	let time = $(this).parent().attr("id");
	let event = $(this).siblings(".textarea").val();
	localStorage.setItem(time, event);
});

// gets items from local storage for each hour and will put them back on the page if there was anything saved
$("#hour9 .textarea").val(localStorage.getItem("hour9"));
$("#hour10 .textarea").val(localStorage.getItem("hour10"));
$("#hour11 .textarea").val(localStorage.getItem("hour11"));
$("#hour12 .textarea").val(localStorage.getItem("hour12"));
$("#hour13 .textarea").val(localStorage.getItem("hour13"));
$("#hour14 .textarea").val(localStorage.getItem("hour14"));
$("#hour15 .textarea").val(localStorage.getItem("hour15"));
$("#hour16 .textarea").val(localStorage.getItem("hour16"));
$("#hour17 .textarea").val(localStorage.getItem("hour17"));

// this is the reload button at the bottom of the page, will reset local storage and reload the page so that the page is cleared
resetBtn.on("click", function () {
	localStorage.clear();
	location.reload();
});
