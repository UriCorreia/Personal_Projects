const container = document.querySelector(".container");

const showResponse = (event) => {

    if(event.target.classList.contains("bx-plus")){

        const pResponse = event.target.parentElement.querySelector("p");

        if(!pResponse) return;

        const idpResponse = pResponse.id;
        
        let message = "";

        switch(idpResponse){
            case "first_FAQ":
                message = "Frontend Mentor is a platform that helps you improve your coding skills by building realistic projects.";
                break;
            case "second_FAQ":
                message = "Yes, Frontend Mentor offers both free and premium challenges. The free challenges are a great way to start.";
                break;
            case "third_FAQ":
                message = "Absolutely! You are encouraged to use the projects you build in your portfolio to showcase your skills.";
                break;
            case "fourth_FAQ":
                message = "You can ask for help in the official Slack community. There's a dedicated channel for each challenge.";
                break;
            case "fifth_FAQ":
                message = "To create a new account, simply go to the sign-up page and follow the instructions.";
                break;
            case "sixth_FAQ":
                message = "If you forget your password, you can use the 'Forgot Password' link on the login page to reset it.";
                break;
            default:
                message = "Answer not found."
                break
        }
        pResponse.textContent = message;
    }
};

const hidingResponse = (event) => {
    if(event.target.classList.contains("bx-plus")){
        const pResponse = event.target.parentElement.querySelector("P");
        if(pResponse){
            pResponse.textContent = "";
        }
    }
};

container.addEventListener('mouseover', showResponse);
container.addEventListener('mouseout', hidingResponse);