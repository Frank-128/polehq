# PoleHQ — Formula 1 Intelligence Platform

A premium F1 analytics SaaS scaffold built with Next.js 15, TypeScript, and Tailwind CSS.

## Design System

- **Font**: Titillium Web (all weights 200–900)
- **Primary**: `#E10600` (F1 Red)
- **Secondary**: `#252525` (Dark surface)
- **Tertiary**: `#00D2BE` (F1 Teal)
- **Base bg**: `#0A0A0A`
- **Surface bg**: `#111111`

Inspired by: Bloomberg Terminal, Linear, Vercel — premium data analytics aesthetic.

## Routes

| Route | Page |
|-------|------|
| `/` | Landing Page |
| `/login` | Authentication |
| `/dashboard` | Analytics Dashboard |
| `/drivers` | Driver Analytics |
| `/constructors` | Constructor Analytics |
| `/circuits` | Circuit Intelligence |
| `/archetypes` | Driver Archetypes (ML Clustering) |
| `/simulator` | Championship Simulator (Monte Carlo) |
| `/search` | Global Search |
| `/settings` | Settings & Profile |

## Components

### Layout
- `AppShell` — sidebar + topbar wrapper for authenticated pages
- `Sidebar` — fixed left nav with season badge and profile
- `Topbar` — sticky header with breadcrumb, search shortcut, live indicator

### UI
- `KpiCard` — stat card with accent bar, delta indicator
- `PlaceholderChart` — SVG-based chart placeholders (line, bar, scatter, heatmap, radar, donut, area)
- `SectionHeader` — section title with badge and optional action
- `PagePlaceholder` — generic placeholder for unimplemented pages

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Next Steps

Replace `PlaceholderChart` components with real chart libraries:
- **Recharts** or **Victory** for line/bar/area charts
- **D3.js** for custom visualizations (radar, scatter, heatmap)
- **Nivo** for ready-made chart components

Integrate real F1 data via:
- **Ergast API** (historical data)
- **FastF1** Python library (telemetry)
- **OpenF1 API** (live timing)
