const btn = document.getElementById("btn")
btn.addEventListener("click", function () {
    const name = document.getElementById("name").value
    const age = document.getElementById("age").value
    const gender = document.querySelector('input[name="gender"]:checked').value
    const course = document.getElementById("course").value
    const email = document.getElementById("email").value
    if (!name || !age || !course || !email || !gender) {
        alert("Please fill all fields in the form")
        return
    }
    const tbody = document.querySelector(".studenttable tbody")
    const row = tbody.insertRow()
    row.insertCell(0).textContent = name
    row.insertCell(1).textContent = age
    row.insertCell(2).textContent = course
    row.insertCell(3).textContent = gender
    row.insertCell(4).textContent = email
    const action = row.insertCell(5)
    var delbtn = document.createElement("button")
    delbtn.textContent = "Delete"
    delbtn.className = "deletebtn"
    delbtn.addEventListener("click", function () {
        row.remove()
    })
    action.appendChild(delbtn)
})



