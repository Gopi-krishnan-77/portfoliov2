import Image from 'next/image'

const RIDE_URL = 'https://ride.gopikrishnanb.co.in'
const CODE_URL = 'https://github.com/Gopi-krishnan-77/backwater-portfolio'

const built = ['React Three Fiber', 'Custom GLSL water', 'Web Audio', 'TypeScript']

/**
 * The same portfolio as an interactive 3D boat ride through the Kerala backwaters.
 * A dark card between Projects and Stack: the scene on one side, what it is on the other.
 */
export default function BoatRide() {
  return (
    <section id="boat-ride" className="bg-white pb-20 md:pb-32">
      <div className="mx-auto max-w-[1280px] px-[clamp(20px,5vw,32px)]">
        <div className="grid overflow-hidden rounded-3xl bg-dark-green text-cream md:grid-cols-[1.25fr_1fr]">
          <a
            href={RIDE_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            data-cursor-label="sail"
            aria-label="Open the boat ride"
            className="group relative block aspect-[1200/630] overflow-hidden md:order-2 md:aspect-auto md:min-h-[420px]"
          >
            <Image
              src="/boat-ride.jpg"
              alt="A wooden boat on the Kerala backwaters at sunset, coconut palms and a tiled-roof house reflected in the water"
              fill
              sizes="(min-width: 768px) 55vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </a>

          <div className="flex flex-col justify-center gap-5 p-[clamp(28px,4vw,56px)] md:order-1">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-green">
              The 3D version
            </p>
            <h2
              className="font-heading font-extrabold leading-[1.05] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(30px, 3.6vw, 46px)' }}
            >
              Take a boat ride through my work.
            </h2>
            <p className="max-w-md text-[15px] leading-relaxed text-cream/75 md:text-base">
              Sail a wooden vallam round a Kerala lagoon at sunset. Each jetty is a chapter, from profile to
              projects, and the lights come on behind you as you go. Steer it yourself, or let the autopilot take you.
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Built with">
              {built.map((t) => (
                <li key={t} className="rounded-full border border-cream/20 px-3 py-1 font-mono text-xs text-cream/70">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-1 flex flex-wrap items-center gap-4">
              <a
                href={RIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="sail"
                className="rounded-full bg-green px-6 py-3 text-sm font-semibold text-dark transition-colors duration-200 hover:bg-cream"
              >
                Start the ride →
              </a>
              <a
                href={CODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-label="code"
                className="font-mono text-sm font-semibold text-cream/80 underline-offset-4 hover:text-green hover:underline"
              >
                Code →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
