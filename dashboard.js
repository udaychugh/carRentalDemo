function bookRide() {
    swal({
            title: "Currently Available",
            text: "Audi R8",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                swal("Your Ride is booked Succenfully with code:123", {
                    icon: "success",
                });
            } else {
                swal("you cancel Ride Booking");
            }
        });
}

function createRide() {
    swal("Enter Car Name", {
            content: "input",
        })
        .then((value) => {
            swal(`Car Created: ${value}`);
        });
}

var name = localStorage.getItem("name");
var mail = localStorage.getItem("email");
var number = localStorage.getItem("number");

document.getElementById("userkanam").innerHTML = name;
document.getElementById("email").value = mail;
document.getElementById("number").value = number;
    