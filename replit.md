# Shiftcivic Network State Platform

## Overview

Shiftcivic is a Next.js-based web application designed to support the creation and management of network states focused on sustainable living. The platform provides tools for decentralized governance, community management, educational resources, and transparent treasury operations. It aims to connect globally distributed communities through democratic decision-making frameworks and collaborative tools.

The application serves as a comprehensive platform for network state participants to learn about the concept, engage in governance activities, manage community membership, and participate in policy decisions through a modern, accessible web interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- Next.js 15.5.4 with App Router architecture for server-side rendering and routing
- React 19.1.0 for component-based UI development
- TypeScript 5 for type safety across the application
- Turbopack enabled for faster development builds and optimized production bundling

**Component System:**
- Ark UI 5.25.1 provides accessible, headless UI primitives (dialogs, tabs, accordions, selects)
- Park UI design system layered on top of Ark UI for consistent styling
- Custom component library in `src/components/ui/` wrapping Ark UI primitives
- Class Variance Authority for type-safe component variant management
- Lucide React for consistent iconography

**Styling Strategy:**
- Tailwind CSS 4.1.14 for utility-first styling
- Custom design tokens defined in CSS variables (colors, spacing, typography)
- Dark mode support through CSS class toggling
- Design system based on HSL color values for easy theming
- Outfit font family from Google Fonts as primary typeface

**State Management:**
- React hooks (useState, useEffect) for local component state
- Client-side interactivity marked with "use client" directive
- No global state management solution currently implemented

### Page Structure

**Public Pages:**
- Home page (`/`) - Landing page with hero section and mission statement
- Features (`/features`) - Overview of platform capabilities (Healthcare, Treasury, Governance)
- Learn (`/learn`) - Educational content and learning paths
- Knowledge (`/knowledge`) - Advanced topics and resources
- About (`/about`) - Platform principles and values
- Login/Signup (`/login`, `/signup`) - Authentication pages (UI only, no backend)

**Dashboard Pages:**
- Main Dashboard (`/dashboard`) - Governance overview and proposal management
- Members (`/dashboard/members`) - Community member directory and search
- Proposals (`/dashboard/proposals`) - List and filter governance proposals
- Proposal Detail (`/dashboard/proposals/[id]`) - Individual proposal voting interface

**Layout Components:**
- Persistent navigation header with dark mode toggle
- Persistent footer with sitemap links
- Root layout applies global fonts and styles

### Design Patterns

**Component Composition:**
- Wrapper components around Ark UI primitives provide consistent API and styling
- Compound component patterns for complex UI elements (Card, Dialog, Tabs)
- Forward refs pattern for DOM access and third-party library integration
- Variant-based styling using CVA for predictable component variations

**Accessibility:**
- Ark UI primitives ensure ARIA compliance and keyboard navigation
- Semantic HTML structure throughout components
- Screen reader text for icon-only buttons
- Focus management in modal and overlay components

**Routing:**
- File-based routing using Next.js App Router
- Dynamic routes for proposal details (`[id]`)
- Server components by default, client components explicitly marked
- No middleware or route protection currently implemented

**Code Organization:**
- `/src/app` - Pages and route handlers
- `/src/components` - Reusable React components
- `/src/components/ui` - Design system components
- `/src/lib` - Utility functions (currently only className merging)

## External Dependencies

### UI & Styling

**@ark-ui/react (5.25.1):**
- Provides headless, accessible UI primitives
- Handles complex component logic (focus management, keyboard navigation, ARIA)
- Used for: Dialog, Tabs, Accordion, Select components

**Tailwind CSS (4.1.14):**
- Utility-first CSS framework
- PostCSS plugin for processing
- Custom configuration in `tailwind.config.js` with extended color palette and font family

**class-variance-authority (0.7.1):**
- Type-safe variant generation for components
- Enables systematic component API design

**tailwind-merge (3.3.1) & clsx (2.1.1):**
- Utilities for conditional className merging
- Prevents Tailwind class conflicts

**lucide-react (0.544.0):**
- Icon library providing consistent SVG icons
- Used throughout UI for visual indicators

### Fonts

**Google Fonts - Outfit:**
- Primary typeface loaded via next/font optimization
- Multiple weights (300-800) for typography hierarchy
- Automatic font subsetting and optimization

### Development Tools

**@park-ui/cli (0.9.0):**
- CLI tool for scaffolding Park UI components
- Development dependency for component generation

**TypeScript (5.x):**
- Strict mode enabled for type safety
- Path aliases configured (`@/*` maps to `src/*`)
- Incremental compilation for faster builds

### Runtime Configuration

**Next.js Configuration:**
- Turbopack experimental features enabled
- CORS headers set to allow all origins (`Access-Control-Allow-Origin: *`)
- Custom port 5000 for development and production
- Host binding to 0.0.0.0 for network access

**Build & Deploy:**
- npm scripts for dev, build, start
- Designed for Vercel deployment (no explicit configuration)
- No environment variables currently configured
- No API routes or backend services implemented

### Missing Integrations (Future Considerations)

The application currently has no:
- Database or data persistence layer
- Authentication/authorization backend
- Blockchain integration (despite governance UI)
- Real-time features or WebSocket connections
- API endpoints or server actions
- Email or notification services
- Analytics or monitoring tools

The dashboard and governance features are currently UI-only implementations without backend persistence or blockchain smart contract integration.