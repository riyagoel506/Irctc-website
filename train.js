function validate() {

    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date = document.getElementById("date").value;
    var classes = document.getElementById("classes").value;
    var general = document.getElementById("general").value;
    var c1 = document.getElementById("c1").checked
    var c2 = document.getElementById("c2").checked
    var c3 = document.getElementById("c3").checked



    // console.log("rrrrrrrr",from,to,date,classes,general);


    if (c1 == true) {
        c1 = true
    }
    else {
        c1 = false
    }
    if (c2 == true) {
        c2 = true
    }
    else {
        c2 = false
    }
    if (c3 == true) {
        c3 = true
    }
    else {
        c3 = false
    }
    console.log("this valueof", c1, c2, c3)
    dateFunction()
    if ((from.length == 0) || (to.length == 0) || (date.length == 0) || (classes.length == 0) || (general.length == 0)) {
        alert("opps! Something wrong");
    }
    else {
        alert("Got it!!.. Thanks for register here :")
    }
}
// function myfun() {
//     const url = "http://192.168.1.31:8080/travel-data/"
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(res => {
//             console.log("res", res)
//             //    window.onload = setTimeout(function(){
//             //     alert(res.title)
//             //     window.location = 'http://127.0.0.1:5500/train.html';
//             // }, 5000);
//         })
//         .catch(err => {
//             console.log("err", err)
//         })
// }

function post() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date = document.getElementById("date").value;
    var classes = document.getElementById("classes").value;
    var general = document.getElementById("general").value;
    var c1 = document.getElementById("c1").checked
    var c2 = document.getElementById("c2").checked
    var c3 = document.getElementById("c3").checked
    console.log(typeof (date))
    $.ajax({
        type: "POST",
        url: " http://192.168.1.31:8080/class-travel-data/",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            d_from: from,
            d_to: to,
            date: date,
            section: classes,
            seat: general,
            concession: c1,
            with_data: c2,
            train_available: c3
        }),
        success: function (res) {
            if (res) {
                alert("Hello");

            } else {
                alert("Cannot add to list !");
            }
        },
        error: function (err) {
            console.log("err", err)
        }
    });
}
function dateFun() {
    var today = new Date();
    var Time = today.getTime();
    var dateId = document.getElementById("date").value;
    var today1 = new Date(dateId)
    var Time1 = today1.getTime();
    console.log("Time....", Time);
    console.log("Time 1.....", Time1)
    if (Time >= Time1) {
        alert("Please change your date")
    }
    else {
        alert("Date is perfect");
        post();
    }
}
debugger
    function dateFunction () {
    $('#date').on('change', function () {
        var today = new Date();
        var newMin = today;
        console.log(newMin);
        $('#date').attr('min', newMin)
        console.log($('#date')[0]);
    });
}
// function dateFun() {
//     var d = new Date();
//     var dateId = document.getElementById("date").value;

//     var year = d.getFullYear;
//     var month=
//     var
//     var n = dateId.localeCompare(d)

//     if (n==-1)
//     {
//         alert("No You cant choose this date ")
//     }
//     else{
//         alert("okay you can choose");
//     }
// }