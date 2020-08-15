$(document).ready(function () {
    // group all  our code to run when DOM is ready

    var rowArr = $(".time-block");
    var currentHour

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    $(".clearBtn").on("click", function () {
        localStorage.clear();
        location.reload();
    });


    function updateHourStyle() {
        currentHour = moment().hour();

        rowArr.each(function () {
            var thisHour = parseInt($(this).attr("id").slice(5));
            console.log(thisHour)
            // Order if-else statements in chronological order
            if (thisHour < currentHour) {
                $(this).addClass("past");
            } else if (thisHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    }

    updateHourStyle();

    var updateCheck = setInterval(updateHourStyle, 10000);

    for (var i = rowArr.length; i < rowArr.length * 2; i++) {
        var hour = `hour-${i}`

        $(`#${hour} .description`).val(localStorage.getItem(hour));
    }

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});