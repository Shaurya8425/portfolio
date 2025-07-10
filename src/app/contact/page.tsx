"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        "service_9rhmowe", // Your EmailJS service ID
        "template_8i3rosg", // Your template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "wOcf7bpSksTH6BSax" // Your public key
      );
      setStatus("Sent!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("Failed to send.");
    }
  };

  return (
    <div className='max-w-xl mx-auto'>
      <h2 className='text-3xl font-bold text-primary mb-6 text-center'>
        Contact Me
      </h2>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder='Your Name'
          required
          className='w-full border px-4 py-2 rounded'
        />
        <input
          type='email'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder='Your Email'
          required
          className='w-full border px-4 py-2 rounded'
        />
        <textarea
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder='Your Message'
          rows={5}
          required
          className='w-full border px-4 py-2 rounded'
        />
        <button
          type='submit'
          className='bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark'
        >
          Send Message
        </button>
        {status && <p className='text-sm text-gray-600 mt-2'>{status}</p>}
      </form>
    </div>
  );
}
