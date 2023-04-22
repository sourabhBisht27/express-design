const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");
const loginFormIndicator = document.getElementById("loginFormIndicator");
const loginFormBtn = document.getElementById("loginFormBtn");
loginForm.onsubmit = async (e) => {
  e.preventDefault();
  loginFormBtn.style.display = "none";
  loginFormIndicator.style.display = "block";
  const form = new FormData(loginForm);
  const body = { email: form.get("email"), password: form.get("password") };
  try {
    const data = await (
      await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    if (data.status) {
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.replace("/");
    } else {
      message.innerText = data.message;
      message.style.display = "block";
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    }
  } catch (error) {
    message.innerText = "Error has occured !";
    message.style.display = "block";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000);
  } finally {
    loginFormBtn.style.display = "block";
    loginFormIndicator.style.display = "none";
  }
};
