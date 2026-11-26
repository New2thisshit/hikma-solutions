# Hikma Solutions — "Jali" redesign (Nov 2026)

## Concept

A jali is the carved lattice screen of Islamic and Indian architecture: it lets
light and air in while keeping prying eyes out: easy for customers to use, hard
for anyone else to get into. The headline line is **"I build your website. Then
I try to hack it."** It ties the two halves of the business together:

- **Build**: websites and business systems that win enquiries and cut admin.
- **Secure**: health checks, penetration testing, hardening and monthly cover.

## Voice

- First person, but no personal name on the site. The owner talks to the reader: "I", "you", "we" only for the two of you.
- Short sentences and everyday words. Explain any technical term the first time.
- Say what happens, not how great it is. No hype words.

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| Indigo | `#1c2245` | Hero bands, header, footer |
| Saffron | `#f4a51c` | Primary buttons, the lit lattice, focus ring |
| Ground | `#f5f6f2` | Page background |
| Ground sunk | `#e9ebe4` | Alternate sections |
| Ink | `#161a33` | Body text on light |
| Muted | `#535a77` | Secondary text on light |

Type: **Unbounded** (wide geometric display, sentence case) + **Hanken Grotesk**
(body). Both are self-hosted from `src/fonts` (OFL licence files included), so
builds don't depend on Google Fonts.

The lattice (`src/components/jali.tsx`) is the one memorable element. It
animates once on the home page; everything else stays quiet. Reduced motion is
respected.

## Where to edit content

- Prices, offers and work items: `src/lib/site.ts`
- Sample security report: `src/components/sample-report.tsx`

## Pages

`/` home · `/services` build offers · `/security` cyber security (new) ·
`/about` · `/contact`
