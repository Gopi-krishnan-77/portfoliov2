import { content } from '@/lib/content'

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="18" x2="12" y2="12" />
      <polyline points="9 15 12 18 15 15" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section className="bg-[#FAFAF8] py-20 md:py-32">
      <div
        className="mx-auto text-center"
        style={{ maxWidth: '1280px', padding: '0 clamp(20px, 5vw, 32px)' }}
      >
        <div>
          <h2
            className="font-heading font-extrabold text-[#0F0F0F] leading-none mb-6"
            style={{ fontSize: 'clamp(40px, 7vw, 72px)' }}
          >
            Building something?
          </h2>
          <p
            className="text-[#3b4a3d] mb-4"
            style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 300, fontSize: 'clamp(20px, 3vw, 28px)' }}
          >
            Or hiring?{' '}
            <span className="font-heading font-extrabold italic text-[#00E87A]">Let&apos;s talk.</span>
          </p>
          <p
            className="text-[#6b7b6c] mb-12"
            style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 400, fontSize: 'clamp(14px, 1.6vw, 16px)' }}
          >
            Open to collaborations, freelance work, and new opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <a
            href={`mailto:${content.email}`}
            data-cursor-label="email"
            className="bg-white border-2 border-[#00E87A] text-[#0F0F0F] rounded-full px-8 py-4 font-bold flex items-center gap-2 hover:bg-[#00E87A] transition-all duration-200"
          >
            <EnvelopeIcon />
            Email me
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="open"
            className="bg-[#0F0F0F] border-2 border-[#0F0F0F] text-white rounded-full px-8 py-4 font-bold flex items-center gap-2 hover:bg-[#00E87A] hover:border-[#00E87A] hover:text-[#0F0F0F] transition-all duration-200"
          >
            <ResumeIcon />
            Resume
          </a>

          <a
            href={content.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="github"
            className="bg-white border-2 border-[#00E87A] text-[#0F0F0F] rounded-full px-8 py-4 font-bold flex items-center gap-2 hover:bg-[#00E87A] transition-all duration-200"
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-label="linkedin"
            className="bg-white border-2 border-[#00E87A] text-[#0F0F0F] rounded-full px-8 py-4 font-bold flex items-center gap-2 hover:bg-[#00E87A] transition-all duration-200"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
