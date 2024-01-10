let form = document.getElementById("form");
let nameInput = document.getElementById("input");
let bio = document.getElementById("Bio");
let msg = document.getElementById("msg");
let containerProfile = document.getElementById("containerProfile");
let showform = document.querySelector(".form");
let removeModal = document.getElementById("remove");

removeModal.addEventListener("click", ()=>{
    showform.classList.remove("showform");
})

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
})

let formValidation = ()=>{
    if( nameInput.value === "" ){
        msg.innerHTML = "Name cannot be blank";
        showform.classList.add("showform");
    }else{
        msg.innerHTML = ""
        acceptData();
    }
}

let data = {};

let acceptData = ()=>{
    data["text"] = nameInput.value;
    data["bio"] = bio.value;
    creatPost();
}

let creatPost = ()=>{
    containerProfile.innerHTML = 
    `<div id="profile">
    <div id="profileImage">
        <img src="image/profile.jpg" alt="profile" width="100%">
    </div>
    <div id="name"><p>${data.text}</p></div>
    <div id="bio">
        <p>${data.bio}</p>
    </div>
    <button onclick="editProfile()">Edit profile</button>
</div>`
}

let editProfile = ()=>{
        showform.classList.toggle("showform");
}

