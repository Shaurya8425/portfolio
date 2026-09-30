export default function Footer() {
  return (
    <footer className='max-w-6xl mx-auto mt-24 border-t border-[var(--line)] px-2 py-8 text-sm text-[var(--muted)] flex justify-between'>
      <span>© {new Date().getFullYear()} Shaurya Yadav</span>
      <span>Built with curiosity + caffeine.</span>
    </footer>
  );
}
