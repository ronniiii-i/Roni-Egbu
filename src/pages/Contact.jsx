import { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ery0cp8",
        "template_e6ej3qt",
        form.current,
        "wLhnusKVW2bFhZfIx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true); // Set a state variable to indicate success
          setErrorMessage(""); // Clear any previous error messages
          form.current.reset(); // Reset the form to clear the inputs
        },
        (error) => {
          console.log(error.text);
          setIsSuccess(false);
          setErrorMessage("Failed to send email. Please try again."); // Set the error message
        }
      );
  };

  function showSuccessAlert() {
    Swal.fire({
      title: "Success!",
      text: "Email sent successfully",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#4CAF50",
      background: "#000",
      color: "#fff",
    });
  }

  const showErrorAlert = useCallback(() => {
    Swal.fire({
      title: "Error",
      text: errorMessage,
      icon: "error",
      confirmButtonText: "OK",
      background: "#000",
      color: "#fff",
    });
  }, [errorMessage]);

  useEffect(() => {
    if (isSuccess === true) {
      showSuccessAlert();
      setIsSuccess(null); // Clear the success state after displaying the alert
    } else if (isSuccess === false) {
      showErrorAlert();
      setIsSuccess(null); // Clear the error state after displaying the alert
    }
  }, [isSuccess, showErrorAlert]); // Only re-run the effect if the `isSuccess` state variable changes

  return (
    <main id="contact">
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="g-af">
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button className="button button-primary">Send</button>
      </form>
    </main>
  );
}

export default Contact;
