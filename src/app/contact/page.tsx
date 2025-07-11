"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "wOcf7bpSksTH6BSax" // Your public key
      );
      toast.success("Message sent successfully!!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Oops! Failed to send the message...");
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
      </form>

      {/* Social Links */}
      <div className='mt-6 flex justify-center space-x-6'>
        <a
          href='https://github.com/Shaurya8425'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='GitHub'
          className='text-gray-600 hover:text-primary transition'
        >
          {/* GitHub SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.9 1.5 1.5 1.8.2.5.8.4 1.3.4.4-.2.6-.7.6-1.2V18c-2.6.6-4.7-1.3-4.7-4.4 0-1 .4-2 1.1-2.8-.2-.5-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1a10.1 10.1 0 0 1 5.3 0c2-.9 2.9-1.1 2.9-1.1.6 1.4.3 2.3.1 2.8.7.8 1.1 1.8 1.1 2.8 0 3.1-2 5-4.7 4.4v2c0 .4.2.9.8.6A10.8 10.8 0 0 0 23.5 12c0-6.4-5.1-11.5-11.5-11.5z' />
          </svg>
        </a>

        <a
          href='https://www.linkedin.com/in/shaurya-yadav-57a96722a/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
          className='text-gray-600 hover:text-primary transition'
        >
          {/* LinkedIn SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5.002zM2.5 8.75h5v13.5h-5v-13.5zM9.5 8.75h4.75v1.75h.06c.66-1.25 2.28-2.06 4.2-2.06 4.5 0 5.32 2.96 5.32 6.81v7h-5v-6.2c0-1.48-.03-3.39-2.06-3.39-2.06 0-2.38 1.6-2.38 3.28v6.31h-5v-13.5z' />
          </svg>
        </a>

        <a
          href='https://x.com/Shaurya7086'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Twitter/X'
          className='text-gray-600 hover:text-primary transition'
        >
          {/* X SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M20.15 3h-3.25l-4.47 6.17L8.35 3H2.5l6.87 9.62L2.15 21h3.25l4.98-6.87L15.65 21h5.85l-7.21-10.05L20.15 3z' />
          </svg>
        </a>

        <a
          href='mailto:shaurya.y321@gmail.com'
          className='text-gray-600 hover:text-primary transition'
          aria-label='Email'
        >
          {/* Email SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15a2.25 2.25 0 0 1 2.25 2.25v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15zM4.5 6.41v12.09h15V6.41l-7.5 4.7-7.5-4.7zm7.5 3.69L19.5 4.5h-15l7.5 5.6z' />
          </svg>
        </a>
      </div>
    </div>
  );
}
