import { Button } from '@/components/Button';

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

const stats = [
  { value: '2,400+', label: 'trainers listed' },
  { value: '4.9', label: 'avg. rating' },
  { value: '0%', label: 'listing fee' },
] as const;

export function HeroBanner() {
  return (
    <section className="grid grid-cols-1 items-center gap-7 py-9 sm:gap-10 sm:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-[72px] lg:pb-16">
      <div>
        <span className="eyebrow">For personal trainers</span>
        <h1 className="mt-[18px] font-display text-[2.375rem] font-bold leading-[1.02] tracking-[-0.02em] text-ink-950 md:text-display-m lg:text-[3.75rem]">
          Coaching, minus the admin.
        </h1>
        <p className="mt-5 max-w-[480px] font-sans text-[17px] leading-[1.6] text-ink-700 sm:text-[19px]">
          List your services, share resources, and take bookings — all from one
          calm dashboard. Get discovered by clients who fit.
        </p>

        <div className="mt-[30px] flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            primary
            size="large"
            label="List yourself free"
            icon={<ArrowRightIcon />}
            className="w-full sm:w-auto"
          />
          <Button
            size="large"
            label="Browse trainers"
            className="w-full sm:w-auto"
          />
        </div>

        <div className="mt-[34px] flex flex-wrap items-center gap-4 sm:gap-5 lg:gap-[26px]">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 sm:gap-5 lg:gap-[26px]"
            >
              {index > 0 && (
                <span
                  className="inline-block h-[34px] w-px shrink-0 bg-line-200"
                  aria-hidden="true"
                />
              )}
              <div>
                <div className="font-mono text-lg font-bold leading-snug text-ink-950 sm:text-[22px]">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[13px] text-ink-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-3xl border border-line-200 bg-paper-sunk text-ink-400 sm:aspect-[16/10] sm:max-h-[360px] lg:aspect-[4/5] lg:max-h-none"
        role="img"
        aria-label="Hero photo placeholder"
      >
        <ImageIcon />
        <span className="text-[13px] text-ink-500">hero photo</span>
      </div>
    </section>
  );
}