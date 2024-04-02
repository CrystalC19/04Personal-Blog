const userNameInput = document.querySelector (`#username`);
const userTitleInput = document.querySelector (`#title`);
const userContentInput = document.querySelector (`#content`);
const submitButton = document.querySelector (`#submit`);

submitButton.addEventListener(`click`, function(event){
    event.preventDefault();
    
    //Creating an object for the users submission and adding trim remove left over space //


    const user={
        username: userNameInput.value.trim(),
        title: userTitleInput.value.trim(),
        content: userContentInput.value.trim()
    }
    console.log(`user`,user);
    //Set Submission to local storage//

    localStorage.setItem(`user`,JSON.stringify(user));

    console.log(`Get User:`,JSON.parse(localStorage.getItem(`user`)));


}) 

