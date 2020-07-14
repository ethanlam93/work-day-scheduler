

todoObj = [{ "9am": "" }, { "10am": "" }, { "11am": "" }, { "12pm": "" }, { "1pm": "" }, { "2pm": "" }, { "3pm": "" }, { "4pm": "" }, { "5pm": "" }]
currentHour = parseInt(moment().format('HH'))


//DISPLAY CURRENT DATE AND TIME + UPDATE TIME DYNAMICALLY EVERY 1 SECOND USING "setInterval"
var displayDateAndTime = function () { $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a')) }
setInterval(displayDateAndTime, 1000);

// Clear local storage and input data
$(".clear").on("click", function () {
    $('textarea').empty();
    localStorage.clear()
})


// Change class according to the hour of the day
function classChange() {
    $("div[data-time]").each(function () {
        var defaultHour = parseInt($(this).attr("data-time"))
        console.log(defaultHour)
        console.log(this)
        //check if we've moved past this time
        if (defaultHour === currentHour) {
            $(this).next().addClass("present");
            $(this).next().removeClass("future");
            $(this).next().removeClass("past");
        }
        else if (defaultHour < currentHour) {
            $(this).next().addClass("past");
            $(this).next().removeClass("present");
            $(this).next().removeClass("future");
        }
        else {
            $(this).next().addClass("future")
            $(this).next().removeClass("present");
            $(this).next().removeClass("past");
            ;
        }
    })
}
classChange()
    ;


//Display saved tasks on load
function onLoad() {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        return
    }
    else {
        $("#text1").text(savedList[0]["9am"])
        $("#text2").text(savedList[1]["10am"])
        $("#text3").text(savedList[2]["11am"])
        $("#text4").text(savedList[3]["12pm"])
        $("#text5").text(savedList[4]["1pm"])
        $("#text6").text(savedList[5]["2pm"])
        $("#text7").text(savedList[6]["3pm"])
        $("#text8").text(savedList[7]["4pm"])
        $("#text9").text(savedList[8]["5pm"])
    }
}
onLoad();


//Once click on save button, save to local storage
$("button[data-index='1']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[0]["9am"] = $("#text1").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[0]["9am"] = $("#text1").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='2']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[1]["10am"] = $("#text2").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[1]["10am"] = $("#text2").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='3']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[2]["11am"] = $("#text3").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[2]["11am"] = $("#text3").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='4']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[3]["12pm"] = $("#text4").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[3]["12pm"] = $("#text4").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='5']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[4]["1pm"] = $("#text5").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[4]["1pm"] = $("#text5").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='6']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[5]["2pm"] = $("#text6").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[5]["2pm"] = $("#text6").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='7']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[6]["3pm"] = $("#text7").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[6]["3pm"] = $("#text7").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='8']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[7]["4pm"] = $("#text8").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[7]["4pm"] = $("#text8").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})

$("button[data-index='9']").on("click", function () {
    var savedList = JSON.parse(localStorage.getItem("all"))
    if (!savedList) {
        todoObj[8]["5pm"] = $("#text9").val();
        localStorage.setItem("all", JSON.stringify(todoObj))
    }
    else {
        savedList[8]["5pm"] = $("#text9").val();
        localStorage.setItem("all", JSON.stringify(savedList))
    }
})
