import Link from "next/link";

const COMMISSIONS_OPEN = false; // <-- toggle this to true/false

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <div className="bg-slate-900/80 border border-slate-700/70 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Top banner */}
          <div className="w-full">
            <img
              src="/banner.png"
              alt="Dew banner"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Header / Hero */}
            <header className="flex flex-col items-center text-center gap-4 -mt-12">
              <img
                src="/profile.png"
                alt="Dew profile picture"
                className="h-24 w-24 rounded-full object-cover border-4 border-slate-900 shadow-lg"
              />
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  DEW
                </h1>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-medium text-slate-100">
                    dewclawpaw
                  </span>{" "}
                  · furry artist · 2D / 3D animation
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {COMMISSIONS_OPEN ? (
                  <span className="inline-flex items-center rounded-full border border-emerald-400/80 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                    ● Commissions Open
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full border border-red-400/80 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-red-300">
                    ● Commissions Closed
                  </span>
                )}
                <span className="text-xs text-slate-300">
                  SFW & NSFW (see rules below)
                </span>
              </div>
            </header>

            {/* Quick pricing summary */}
            <section aria-labelledby="pricing-summary" className="space-y-3">
              <h2
                id="pricing-summary"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
              >
                Pricing at a glance
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    2D Art
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <span className="font-medium">Sketch:</span>{" "}
                      <span className="text-slate-300"> $40 / character</span>
                    </li>
                    <li>
                      <span className="font-medium">Flat color:</span>{" "}
                      <span className="text-slate-300"> $75 / character</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-1">
                    Animation
                  </p>
                  <ul className="space-y-1">
                    <li>
                      <span className="font-medium">2D simple loop:</span>{" "}
                      <span className="text-slate-300">
                        {" "}
                        $250 (includes sex loops)
                      </span>
                    </li>
                    <li>
                      <span className="font-medium">
                        3D simple loop (model provided):
                      </span>{" "}
                      <span className="text-slate-300">
                        {" "}
                        $75 (includes sex loops)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Exact totals may vary with complexity, extra characters, props,
                or backgrounds. For large projects, we can discuss custom
                pricing.
              </p>
            </section>

            {/* Links / buttons */}
            <section aria-labelledby="links" className="space-y-3">
              <h2
                id="links"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
              >
                Links & contact
              </h2>
              <div className="space-y-3">
                <Link
                  href="#info"
                  className="block w-full rounded-full border border-sky-500/80 bg-sky-500/10 px-4 py-2.5 text-sm font-medium text-center hover:bg-sky-500/20 hover:border-sky-400 transition"
                >
                  Commission Info &amp; ToS
                </Link>

                <Link
                  href="https://www.furaffinity.net/user/dewclawpaw"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Fur Affinity
                </Link>

                <Link
                  href="https://x.com/DewAnimation"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Twitter / X
                </Link>

                <Link
                  href="https://bsky.app/profile/dewram.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Bluesky
                </Link>

                <Link
                  href="https://discord.gg/uVnMmk3wSs"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Discord Server
                </Link>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-200">
                  <p className="font-semibold text-slate-100 mb-1">
                    Direct contact
                  </p>
                  <p>
                    For commission inquiries, you can also contact me directly
                    on Discord:
                  </p>
                  <p className="mt-1 font-mono text-sm text-sky-300">
                    dewtheram
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Please include your refs, a clear idea, and your email for
                    invoicing when you reach out.
                  </p>
                </div>
              </div>
            </section>

            {/* Info / ToS */}
            <section
              id="info"
              aria-labelledby="info-heading"
              className="space-y-6 border-t border-slate-800 pt-6"
            >
              <h2
                id="info-heading"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
              >
                Commission info &amp; terms
              </h2>

              {/* Requirements */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">Requirements</h3>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>
                    You must provide{" "}
                    <span className="font-medium">
                      ref sheets or clear visual references
                    </span>{" "}
                    for your character(s).
                  </li>
                  <li>
                    For <span className="font-medium">3D animation</span>, you
                    must provide the{" "}
                    <span className="font-medium">3D model</span> and any
                    relevant files.
                  </li>
                  <li>
                    You must come with a{" "}
                    <span className="font-medium">clear idea</span>. I don’t
                    come up with scenarios for you; if you don’t know what you
                    want, come back when you do.
                  </li>
                  <li>
                    A <span className="font-medium">valid email</span> is
                    required so I can invoice you directly.
                  </li>
                </ul>
              </div>

              {/* Detailed pricing */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Pricing details
                </h3>
                <p className="text-slate-200">
                  These are my current base rates. Final pricing may vary with
                  complexity, extra characters, props, or specific animation
                  needs.
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>
                    <span className="font-semibold">2D Sketch</span>: $40 per
                    character
                  </li>
                  <li>
                    <span className="font-semibold">2D Flat Color</span>: $75
                    per character
                  </li>
                  <li>
                    <span className="font-semibold">
                      2D Animation (simple loop)
                    </span>{" "}
                    : $250 (includes idle loops, motion loops, and sex loops)
                  </li>
                  <li>
                    <span className="font-semibold">
                      3D Animation (simple loop, model provided)
                    </span>{" "}
                    : $75 (includes idle loops, motion loops, and sex loops)
                  </li>
                </ul>
                <p className="text-[11px] text-slate-400">
                  Large or complex projects can be quoted individually.
                </p>
              </div>

              {/* Content restrictions */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Content I will not draw or animate
                </h3>
                <p className="text-slate-200">
                  I reserve the right to refuse any commission I&apos;m not
                  comfortable with, without exception. I will not accept
                  anything involving:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>Underage characters (no exceptions)</li>
                  <li>
                    Incest, including &quot;step&quot; relationships (no
                    exceptions)
                  </li>
                  <li>Snuff or extreme gore</li>
                  <li>Body-function focused content / gross-out themes</li>
                  <li>Extreme obesity / hyper-size fetishes</li>
                  <li>Vore or digestion</li>
                  <li>Inanimate transformation (regular TF is fine)</li>
                  <li>
                    Pain-focused or hardcore BDSM (soft/light themes are okay)
                  </li>
                  <li>Non-consensual themes</li>
                  <li>Findom or cuckoldry</li>
                </ul>
              </div>

              {/* Workflow & revisions */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Workflow &amp; revisions
                </h3>
                <p className="text-slate-200">
                  My workflow is simple so you know what to expect:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>
                    <span className="font-semibold">
                      2D art &amp; animation:
                    </span>{" "}
                    rough WIP → sketch → final cleanup / polish.
                  </li>
                  <li>
                    <span className="font-semibold">3D animation:</span>{" "}
                    blocking → motion refining → polish → final render.
                  </li>
                  <li>
                    Small changes and tweaks are{" "}
                    <span className="font-medium">free</span> during rough /
                    sketch stages.
                  </li>
                  <li>
                    Major changes that require redrawing or re-animating are{" "}
                    <span className="font-medium">
                      billed as an additional sketch / animation
                    </span>
                    , since they often mean starting over.
                  </li>
                  <li>
                    Once a piece is in final cleanup / polish,{" "}
                    <span className="font-medium">no further changes</span> are
                    made.
                  </li>
                </ul>
              </div>

              {/* Turnaround & queue */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Turnaround &amp; queue
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>Sketches: usually ~1–2 hours per character.</li>
                  <li>
                    I can take up to{" "}
                    <span className="font-medium">
                      three sketch clients per day
                    </span>{" "}
                    depending on complexity.
                  </li>
                  <li>
                    3D simple loops: typically{" "}
                    <span className="font-medium">1–2 days</span>.
                  </li>
                  <li>
                    2D simple loops: around{" "}
                    <span className="font-medium">one week</span>.
                  </li>
                  <li>
                    For animation, I take{" "}
                    <span className="font-medium">one client at a time</span>,
                    finish them, then move on to the next.
                  </li>
                  <li>
                    Turnaround can vary with queue length and complexity. Rush
                    deadlines must be discussed and may cost extra.
                  </li>
                </ul>
              </div>

              {/* Payment / refunds / usage */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Payment, refunds &amp; usage
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>
                    For normal work (sketches, flat color, simple loops),{" "}
                    <span className="font-medium">
                      payment is due when the work is completed
                    </span>
                    . I&apos;ll invoice you via the email you provide.
                  </li>
                  <li>
                    For larger / time-intensive projects, we may do a{" "}
                    <span className="font-medium">50/50 split</span>: half
                    before starting, half on completion.
                  </li>
                  <li>
                    If you need a refund, please let me know{" "}
                    <span className="font-medium">before I start</span>. Life
                    happens and it&apos;s not a big deal : real life is more
                    important and art is a luxury.
                  </li>
                  <li>
                    Full refunds are available if no work has started. Once
                    I&apos;ve begun, refunds are case-by-case based on
                    progress. No refunds after final delivery.
                  </li>
                  <li>
                    Once you buy artwork or animation from me,{" "}
                    <span className="font-medium">
                      you can use it however you want
                    </span>
                    : post it, edit it, sell it, or include it in monetized
                    content.
                  </li>
                  <li>
                    Please{" "}
                    <span className="font-medium">
                      do not use my work to train AI models
                    </span>
                    . I can&apos;t stop you, but I ask this as a courtesy and
                    out of respect for the work I put in.
                  </li>
                </ul>
              </div>

              {/* Privacy & behavior */}
              <div className="space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Privacy &amp; behavior
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-200">
                  <li>
                    If you don&apos;t want your piece posted anywhere, I{" "}
                    <span className="font-medium">will not post it</span>. If
                    you want to remain anonymous or keep it fully private, I
                    will absolutely respect that.
                  </li>
                  <li>
                    I keep things friendly and respectful. If you are rude,
                    disrespectful, intentionally hurtful, harassing, or try to
                    push content I&apos;ve already said no to, I will simply{" "}
                    <span className="font-medium">block you</span> and not work
                    with you again.
                  </li>
                </ul>
              </div>

              <p className="text-[11px] text-slate-500 pt-2">
                By commissioning me, you agree to these terms. If anything is
                unclear, feel free to ask before we start.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
