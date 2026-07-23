import Link from "next/link";

const COMMISSIONS_OPEN = true; // <-- toggle this to true/false

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-4 py-6 sm:py-10">
      <div className="w-full max-w-3xl">
        <div className="bg-slate-900/80 border border-slate-700/70 rounded-3xl shadow-2xl shadow-black/40 overflow-hidden">
          {/* Top banner */}
          <div className="hidden sm:block w-full">
            <img
              src="/banner.png"
              alt="Dew banner"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Card content */}
          <div className="p-5 sm:p-8 space-y-6 sm:space-y-8">
            {/* Header / Hero */}
            <header className="flex flex-col items-center text-center gap-4 sm:-mt-12">
              <img
                src="/profile.png"
                alt="Dew profile picture"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover border-4 border-slate-900 shadow-lg"
              />
              <div className="space-y-1">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  DEW
                </h1>
                <p className="text-sm sm:text-base text-slate-300">
                  <span className="font-medium text-slate-100">
                    dewclawpaw
                  </span>{" "}
                  · furry artist · 2D art / 2D animation / 3D rigging
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

            {/* Commission types */}
            <section aria-labelledby="commission-types" className="space-y-3">
              <h2
                id="commission-types"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400"
              >
                Commission types
              </h2>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-slate-100">
                      2D Sketch
                    </h3>
                    <p className="font-semibold text-sky-300">
                      $70 per character
                    </p>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Turnaround
                      </p>
                      <p className="mt-1 text-slate-200">
                        Rough sketches usually take around 4 hours. Clean
                        sketches usually take around 6 to 8 hours.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Includes
                      </p>
                      <p className="mt-1 text-slate-200">
                        I normally provide clean sketches. Rough sketches are
                        only provided when a very quick turnaround is needed.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Revisions
                      </p>
                      <p className="mt-1 text-slate-200">
                        Tweaks are okay during the rough stage.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-slate-100">
                      2D Flat Color
                    </h3>
                    <p className="font-semibold text-sky-300">
                      $110 per character
                    </p>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Turnaround
                      </p>
                      <p className="mt-1 text-slate-200">
                        Usually completed within 2 to 3 days depending on
                        complexity.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Includes
                      </p>
                      <p className="mt-1 text-slate-200">
                        A cleaned sketch with flat colors over top. Flats are
                        not done over rough sketches.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Revisions
                      </p>
                      <p className="mt-1 text-slate-200">
                        Small color or detail tweaks are okay before final
                        delivery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-slate-100">
                      2D Simple Loop Animation
                    </h3>
                    <p className="font-semibold text-sky-300">
                      $400 base + $300 per additional character
                    </p>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Turnaround
                      </p>
                      <p className="mt-1 text-slate-200">
                        Usually around 2 weeks. Larger or more complex loops may
                        take up to 3 weeks.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Includes
                      </p>
                      <p className="mt-1 text-slate-200">
                        Simple character motion loops, idle loops, or sex loops.
                        Loops can be up to 11 seconds and can be repeated as
                        many times as needed.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                        Extras
                      </p>
                      <p className="mt-1 text-slate-200">
                        I can edit the final loop and provide sound effects when
                        needed. Major action or pose changes after animation
                        starts may cost extra.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-400/50 bg-amber-500/10 px-4 py-4 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-amber-200">
                      Basic Blender Character Rig
                    </h3>
                    <p className="font-semibold text-amber-200">
                      Starting at $500
                    </p>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        Body
                      </p>
                      <p className="mt-1 text-slate-200">
                        A complete body rig with animator friendly controls,
                        skinning, weight painting, and basic deformation testing.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        Basic face
                      </p>
                      <p className="mt-1 text-slate-200">
                        Eye aiming, eye blinking, and jaw open and close. No full
                        facial rig, custom expressions, or custom face states.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        Basic anatomy
                      </p>
                      <p className="mt-1 text-slate-200">
                        Basic penis controls or a generic vaginal open and close
                        control where applicable. No additional custom shapes or
                        states.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-400/50 bg-amber-500/10 px-4 py-4 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-amber-200">
                      Advanced Blender Character Rig
                    </h3>
                    <p className="font-semibold text-amber-200">
                      Starting at $750
                    </p>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        Includes
                      </p>
                      <p className="mt-1 text-slate-200">
                        Everything included in the Basic Blender Character Rig.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        Full face
                      </p>
                      <p className="mt-1 text-slate-200">
                        A full facial rig for more detailed posing, expressions,
                        mouth movement, eyelids, brows, and character performance.
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-amber-200/80">
                        Correctives
                      </p>
                      <p className="mt-1 text-slate-200">
                        Basic corrective shapes for common deformation problems
                        found during normal posing and testing.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-400/50 bg-amber-500/10 px-4 py-4 text-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-amber-200">
                      Full Alternate / Transformation State
                    </h3>
                    <p className="font-semibold text-amber-200">
                      Starting at +$500 per state
                    </p>
                  </div>
                  <p className="mt-2 text-slate-200">
                    Major alternate forms that require substantial additional
                    rigging are treated as another full rig state. This includes
                    gender swap forms, major body or anatomy changes, creature
                    transformations, and similar alternate forms.
                  </p>
                  <p className="mt-2 text-slate-300">
                    Additional genital states, clothing alternates, specialized
                    anatomy, and other custom features are quoted separately.
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                Exact totals may vary with complexity, extra characters, props,
                backgrounds, rig requirements, or specific animation needs. Large
                or complex projects can be quoted individually.
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
              <div className="flex flex-col gap-3">
                <Link
                  href="#info"
                  className="order-1 block w-full rounded-full border border-sky-500/80 bg-sky-500/10 px-4 py-3 sm:py-2.5 text-sm font-medium text-center hover:bg-sky-500/20 hover:border-sky-400 transition"
                >
                  Commission Info &amp; ToS
                </Link>

                <div className="order-2 sm:order-last rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-200">
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

                <Link
                  href="https://www.furaffinity.net/user/dewclawpaw"
                  target="_blank"
                  rel="noreferrer"
                  className="order-3 block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 sm:py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Gallery on Fur Affinity
                </Link>

                <Link
                  href="https://dew-devlog.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="order-4 block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 sm:py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Dev Blog
                </Link>

                <Link
                  href="https://x.com/DewAnimation"
                  target="_blank"
                  rel="noreferrer"
                  className="order-5 block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 sm:py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Twitter / X
                </Link>

                <Link
                  href="https://bsky.app/profile/dewram.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                  className="order-6 block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 sm:py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Bluesky
                </Link>

                <Link
                  href="https://discord.gg/uVnMmk3wSs"
                  target="_blank"
                  rel="noreferrer"
                  className="order-7 block w-full rounded-full border border-slate-700 bg-slate-900/80 px-4 py-3 sm:py-2.5 text-sm font-medium text-center hover:border-sky-400 hover:bg-slate-800 transition"
                >
                  Join Discord Server
                </Link>
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
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">Requirements</h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
                  <li>
                    You must provide{" "}
                    <span className="font-medium">
                      ref sheets or clear visual references
                    </span>{" "}
                    for your character(s).
                  </li>
                  <li>
                    You must come with a{" "}
                    <span className="font-medium">clear idea</span>. I don’t
                    come up with scenarios for you. If you don’t know what you
                    want, come back when you do.
                  </li>
                  <li>
                    A <span className="font-medium">valid email</span> is
                    required so I can invoice you directly.
                  </li>
                </ul>
              </div>

              {/* 3D model requirements */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  3D model requirements
                </h3>
                <p className="text-slate-200">
                  Before rigging begins, I will inspect the model to make sure it
                  is suitable for rigging. I check the mesh, intended symmetry,
                  UVs, object organization, and any obvious problems that could
                  prevent the character from deforming correctly.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
                  <li>
                    Minor problems that are quick and safe to address are included
                    in the rig price.
                  </li>
                  <li>
                    Major mesh, topology, UV, or symmetry problems cannot be
                    repaired as part of the commission and may need to be sent
                    back to the original modeler.
                  </li>
                  <li>
                    I do not provide general model repair or remodeling services.
                  </li>
                </ul>
              </div>

              {/* Content restrictions */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Content I will not accept
                </h3>
                <p className="text-slate-200">
                  I reserve the right to refuse any commission I&apos;m not
                  comfortable with, without exception. I will not accept
                  anything involving:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
                  <li>Underage characters. No exceptions.</li>
                  <li>
                    Incest, including &quot;step&quot; relationships. No
                    exceptions.
                  </li>
                  <li>Snuff or extreme gore</li>
                  <li>Body-function focused content / gross-out themes</li>
                  <li>
                    Extreme obesity / immobility-focused content. Some
                    hyper/exaggerated proportions may be okay depending on the
                    idea. Ask first.
                  </li>
                  <li>Vore or digestion</li>
                  <li>Inanimate transformation. Regular TF is fine.</li>
                  <li>
                    Pain-focused or hardcore BDSM. Soft or light themes are
                    okay.
                  </li>
                  <li>Non-consensual themes</li>
                  <li>Findom or cuckoldry</li>
                </ul>
              </div>

              {/* Workflow & revisions */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Workflow &amp; revisions
                </h3>
                <p className="text-slate-200">
                  My workflow is simple so you know what to expect:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
                  <li>
                    <span className="font-semibold">2D art:</span> rough WIP to
                    sketch to final cleanup / color.
                  </li>
                  <li>
                    <span className="font-semibold">2D animation:</span>{" "}
                    rough WIP / blocking to motion refining to polish to final
                    render.
                  </li>
                  <li>
                    <span className="font-semibold">3D rigging:</span> model
                    inspection to rig setup to skinning / weight painting to
                    deformation testing and final cleanup.
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

              {/* Queue */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Turnaround &amp; queue
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
                  <li>
                    Rough sketches usually take around 4 hours. Clean sketches
                    usually take around 6 to 8 hours.
                  </li>
                  <li>
                    2D flat color commissions are usually completed within 2 to
                    3 days depending on complexity.
                  </li>
                  <li>
                    2D simple loops are usually completed in around 2 weeks.
                    Larger or more complex loops may take up to 3 weeks.
                  </li>
                  <li>
                    3D rig turnaround depends on the model and requested features.
                    The expected schedule will be discussed before work begins.
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
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Payment, refunds &amp; usage
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
                  <li>
                    For normal work,{" "}
                    <span className="font-medium">
                      payment is due when the work is completed
                    </span>
                    . I&apos;ll invoice you via the email you provide.
                  </li>
                  <li>
                    For larger / time-intensive projects, we may do a{" "}
                    <span className="font-medium">50/50 split</span>. Half
                    before starting, half on completion.
                  </li>
                  <li>
                    If you need a refund, please let me know{" "}
                    <span className="font-medium">before I start</span>. Life
                    happens and it&apos;s not a big deal. Real life is more
                    important and art is a luxury.
                  </li>
                  <li>
                    Full refunds are available if no work has started. Once
                    I&apos;ve begun, refunds are case-by-case based on progress.
                    No refunds after final delivery.
                  </li>
                  <li>
                    Once you buy artwork, animation, or a rig from me,{" "}
                    <span className="font-medium">
                      you can use it however you want
                    </span>
                    . Post it, edit it, sell it, or include it in monetized
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
              <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-slate-100">
                  Privacy &amp; behavior
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-200">
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