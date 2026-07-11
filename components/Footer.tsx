import { portfolioData } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs font-mono">
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
        <div className="flex items-center gap-4">
          {portfolioData.about.linkedin && (
            <a
              href={portfolioData.about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-accent transition-colors text-sm"
            >
              LinkedIn
            </a>
          )}
          {portfolioData.about.github && (
            <a
              href={`https://github.com/${portfolioData.about.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-accent transition-colors text-sm"
            >
              GitHub
            </a>
          )}
          <a
            href={`mailto:${portfolioData.about.email}`}
            className="text-white/30 hover:text-accent transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
