import React from "react";
import microsoftIcon from "../assets/brands/icons/microsoft.svg";
import googleIcon from "../assets/brands/icons/google.svg";
import cloudflareIcon from "../assets/brands/icons/cloudflare.svg";
import openaiIcon from "../assets/brands/icons/openai.svg";
import claudeIcon from "../assets/brands/icons/claude.svg";
import proxmoxIcon from "../assets/brands/icons/proxmox.svg";
import unraidIcon from "../assets/brands/icons/unraid.svg";
import ubiquitiIcon from "../assets/brands/icons/ubiquiti.svg";
import tplinkIcon from "../assets/brands/icons/tp-link.svg";
import omadaIcon from "../assets/brands/icons/omada.svg";
import xinkIcon from "../assets/brands/icons/xink.svg";

// Real, monochrome (white) brand icons shown inside small dark chips so they
// stay visible on any background, with the brand name alongside.
export const brandLogos = {
  microsoft: { name: "Microsoft", icon: microsoftIcon },
  xink: { name: "Xink", icon: xinkIcon },
  google: { name: "Google", icon: googleIcon },
  proxmox: { name: "Proxmox", icon: proxmoxIcon },
  unraid: { name: "Unraid", icon: unraidIcon },
  unifi: { name: "UniFi", icon: ubiquitiIcon },
  tplink: { name: "TP-Link", icon: tplinkIcon },
  omada: { name: "Omada", icon: omadaIcon },
  cloudflare: { name: "Cloudflare", icon: cloudflareIcon },
  claude: { name: "Claude", icon: claudeIcon },
  openai: { name: "OpenAI", icon: openaiIcon },
};

export const BrandStrip = ({ brands = [], label = "Works with", theme = "light", className = "" }) => {
  const onDark = theme === "dark";
  return (
    <div className={className}>
      {label && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            onDark ? "text-white/40" : "text-neutral-400"
          }`}
        >
          {label}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2.5">
        {brands.map((b) => {
          const item = brandLogos[b];
          if (!item) return null;
          return (
            <span
              key={b}
              data-testid={`brand-${b}`}
              className={`inline-flex items-center gap-2 rounded-full pl-3 pr-4 py-2 transition-colors ${
                onDark
                  ? "bg-white/[0.07] ring-1 ring-white/10 hover:bg-white/[0.14]"
                  : "bg-[#160638] ring-1 ring-black/5 hover:bg-[#2a1466]"
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="h-[15px] w-[15px] object-contain shrink-0"
              />
              <span className="text-[13px] font-semibold text-white whitespace-nowrap">
                {item.name}
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default BrandStrip;
