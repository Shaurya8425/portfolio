"use client";

import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { siteConfig } from "../../../config/site";

const initialForm = { name: "", email: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message);
      toast.success(result.message);
      setForm(initialForm);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to send your message.";
      toast.error(message);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className='mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr]'>
      <div><p className='eyebrow mb-3'>Start a conversation</p><h1 className='text-5xl font-black tracking-tight'>Have a good problem?</h1><p className='mt-6 text-lg leading-relaxed text-[var(--muted)]'>Whether you are building something new, improving an existing system, or just want to say hello, I’d love to hear from you.</p><div className='mt-8 flex gap-5 text-[var(--muted)]'><a href={siteConfig.links.github} target='_blank' rel='noreferrer' aria-label='GitHub' className='hover:text-primary-dark'><FiGithub className='h-5 w-5' /></a><a href={siteConfig.linkedin} target='_blank' rel='noreferrer' aria-label='LinkedIn' className='hover:text-primary-dark'><FiLinkedin className='h-5 w-5' /></a><a href={`mailto:${siteConfig.email}`} aria-label='Email' className='hover:text-primary-dark'><FiMail className='h-5 w-5' /></a></div></div>
      <form className='surface space-y-5 p-6 sm:p-8' onSubmit={handleSubmit}><div><label htmlFor='name' className='mb-2 block text-sm font-bold'>Name</label><input id='name' type='text' name='name' value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder='Your name' required className='w-full rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)]' /></div><div><label htmlFor='email' className='mb-2 block text-sm font-bold'>Email</label><input id='email' type='email' name='email' value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder='you@example.com' required className='w-full rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)]' /></div><div><label htmlFor='message' className='mb-2 block text-sm font-bold'>Message</label><textarea id='message' name='message' value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder='Tell me a little about what you are working on...' rows={6} required className='w-full resize-y rounded-lg border border-[var(--line)] bg-transparent px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)]' /></div><button type='submit' disabled={sending} className='rounded-full bg-primary px-6 py-3 text-sm font-black text-black hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60'>{sending ? "Sending…" : "Send message"}</button><p className='text-xs text-[var(--muted)]'>Having trouble? Email me directly at {siteConfig.email}.</p></form>
    </div>
  );
}
