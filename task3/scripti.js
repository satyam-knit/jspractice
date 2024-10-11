var form = document.querySelector("form")
var inps = document.querySelectorAll('input[type="text"]')
var h3 = document.querySelector("h3")

form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    for (var i = 0; i < inps.length; i++) {
        if (inps[i].value.trim() === '')
            h3.textContent = "Error, some fields are missing "
        break;
    }
})



// var inp1 = document.querySelector("#inp1")
// var inp2 = document.querySelector("#inp2")
// or hum agar aise likhenge toh hume 10 inputs k liye bhi aise hi likhna padega isiliye hum dusra method use krte hai 