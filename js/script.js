$(document).ready(function () {
    // group all  our code to run when DOM is ready

    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    });

    $(".clearBtn").on("click", function () {
        localStorage.clear();
        location.reload();
    });

    console.log(currentHour)

    var rowArr = $(".time-block");
    var currentHour


    function updateHourStyle() {
        currentHour = moment().format('H');

        rowArr.each(function () {
            // console.log(this.innerText)
            // console.log($(this).data("hour"))
            var thisHour = parseInt($(this).data("hour"));
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
    console.log(rowArr.length)
    for (var i = rowArr.length; i < rowArr.length * 2; i++) {
        var hour = `hour-${i}`

        $(`#${hour} .description`).val(localStorage.getItem(hour));
        console.log(`${hour} .description`)
    }

    $("#currentDay").text(moment().format("dddd, MMMM Do"));
});