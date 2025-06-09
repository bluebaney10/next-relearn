import { useFormStatus } from "react";

const ContactForm = () => {
  const { status, setLoading, setSuccess, setError } = useFormStatus();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading();

    try {
      await fetch("/api/contact", {
        method: "POST",
        body: new FormData(event.target),
      });
      setSuccess();
    } catch {
      setError();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" required />
      <input type="email" name="email" required />
      <button type="submit" disabled={status === "loading"}>
        Submit
      </button>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && <p>Form submitted successfully!</p>}
      {status === "error" && <p>There was an error submitting the form.</p>}
    </form>
  );
};

export default ContactForm;
