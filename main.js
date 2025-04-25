const sections = [
    document.getElementById("landing"),
    document.getElementById("projects"),
    document.getElementById("skills"),
    document.getElementById("aboutme"),
    document.getElementById("contact"),
    document.getElementById("messagesent"),
];

let headerImg = document.getElementById("headerimg");

const loadLanding = () => {
    landing.style.display = 'flex';
};

/*const landingShut = () => {
    headerImg.style.display = 'flex';
}*/

const goToSection = (showSection) => {
    sections.forEach(section => {
        section.style.display = (section === showSection) ? 'flex' : 'none';
    })
};

/*CONTACT FORM*/
const form = document.getElementById("contactform");

form.addEventListener("submit", async (e) => { // Add event listener to the form, async function to handle the form submission, (e) is the event object (the form submission event)
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(form); // Create a new FormData object from the form, which will automatically collect all the input values  
    try { // Try to send the form data to Formspree
      const response = await fetch("https://formspree.io/f/xkgjevld", { //fetch is used to make network requests, in this case to send the form data to Formspree
        method: "POST",
        body: formData, // The body of the request is the form data we collected earlier
        headers: { // The request needs to have the correct headers, in this case we are specifying that we are sending JSON data
          'Accept': 'application/json'
        }
      });
  
      if (response.ok) {
        goToSection(messagesent);
        document.getElementById("messageheader").innerHTML = "Message Sent!";
        form.reset();
      } else {
        goToSection(messagesent);
        document.getElementById("messageheader").innerHTML = "Message sending failed.";
        document.getElementById("messagebulk").innerHTML = "Please try again!";
      }
  
    } catch (error) {
        goToSection(messagesent);
        document.getElementById("messageheader").innerHTML = "Message sending failed.";
        document.getElementById("messagebulk").innerHTML = "Please try again!";
    }
  });