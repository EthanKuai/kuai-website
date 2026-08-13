import { socials } from "@/data/socials";
import type { Social } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="py-6 px-[5%]">
      <div className="bar">
        <span className="left mx-1">Ethan Kuai, CS @ Cambridge</span>

        <div className="middle flex flex-wrap items-center justify-center gap-2">
          {socials.map((s: Social) => (
            <a
              key={s.name}
              href={s.href}
              title={s.name}
              target="_blank"
              rel="external"
              className="p-5"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <span className="right text-right">
          © 2026 Ethan Kuai
          <br />
          All rights reserved
        </span>
      </div>
    </footer>
  );
}
