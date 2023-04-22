const todoForm = document.getElementById("todoForm");

todoForm.onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(todoForm);
  
  try {
    const response = await postRequest("/todos", formData);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
