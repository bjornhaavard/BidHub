import { register } from "../api/auth/register.js";
import { displayMessage } from "../components/shared/displayMessage.js";

export function setRegisterFormListener() {
  const form = document.querySelector("#registrationForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const profile = Object.fromEntries(formData.entries());

    // if(profile.avatar === "") {
    //     delete profile.avatar
    //   }
    //   else {
    // profile.avatar = {
    //     url: profile.avatar,
    //     alt: `${profile.name}'s avatar`
    //   }
    // }
    

    console.log(profile);

    try {
      await register(profile);
      displayMessage("#message", 'Registration successful. Please <a href="/auth/login">login</a>', "dark");
      form.reset();
    } catch (error) {
      console.error(error);
      displayMessage("#message", error.message, "danger");
    }
  });
}
