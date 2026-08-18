export type SocialName = "LinkedIn" | "Instagram" | "X (Twitter)";

export default function SocialIcon({ name, className }: { name: SocialName; className?: string }) {
  switch (name) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.9c0-1.41-.03-3.22-1.96-3.22-1.97 0-2.27 1.54-2.27 3.12V20H9.47V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={className}
          aria-hidden="true"
        >
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "X (Twitter)":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
          <path d="M13.6 10.53 20.3 3h-1.6l-5.83 6.54L8.2 3H3l7.03 10.05L3 21h1.6l6.16-6.9L15.8 21H21l-7.4-10.47Zm-2.18 2.45-.71-1L5.06 4.2h2.46l4.58 6.42.71 1 5.96 8.35h-2.46l-4.85-6.99Z" />
        </svg>
      );
  }
}
