import { useState } from 'react';

const initialForm = {
  firstname: '',
  lastname: '',
  email: ''
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState('');

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('Sending contact information...');

    try {
      const response = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Contact could not be saved.');
      }

      setMessage('Contact saved successfully.');
      setForm(initialForm);
    } catch (error) {
      setMessage('Backend is not connected yet. Start the server and try again.');
    }
  }

  return (
    <section className="page">
      <h1>Contact Me</h1>
      <p>Use this form to save a contact record into MongoDB through the backend API.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input name="firstname" value={form.firstname} onChange={handleChange} required />
        </label>
        <label>
          Last Name
          <input name="lastname" value={form.lastname} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </section>
  );
}

export default Contact;
