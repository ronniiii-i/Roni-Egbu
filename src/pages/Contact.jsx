import { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

function Contact() {
  const form = useRef(null);
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
          form.current?.reset();
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
    <main id="main-content" className="contact-page">
      <h1>Contact</h1>
      <p className="sr-only" aria-live="polite">
        {isSuccess === true ? "Your message was sent successfully." : ""}
        {isSuccess === false ? errorMessage : ""}
      </p>
      <form ref={form} onSubmit={sendEmail} aria-label="Contact Roni Egbu">
        <div className="g-af">
          <label>
            Your name
            <input name="name" type="text" placeholder="Your Name" required />
          </label>
          <label>
            Your email
            <input name="email" type="email" placeholder="Your Email" required />
          </label>
        </div>
        <label>
          Subject
          <input type="text" name="subject" placeholder="Subject" required />
        </label>
        <label>
          Your message
          <textarea name="message" placeholder="Your Message" required></textarea>
        </label>
        <button type="submit" className="button button-primary">Send message</button>
      </form>
    </main>
  );
}

export default Contact;
