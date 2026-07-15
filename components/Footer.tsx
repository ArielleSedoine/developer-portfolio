export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Arielle Sedoine. All rights reserved.</p>

        <p>Cloud Software Engineer</p>

        <div className="flex gap-6">
          <a
            href="https://github.com/ArielleSedoine"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arielle-60178832a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            LinkedIn
          </a>

          <a
            href="mailto:notouom777@gmail.com"
            className="transition hover:text-blue-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}