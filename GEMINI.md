# Project Context: imgforger.github.io

## Project Overview

This is a documentation website built with **Next.js 16 (App Router)** and **Fumadocs**. It serves as the documentation hub for the "imgforge" project. The project uses **MDX** for content authoring and **Tailwind CSS v4** for styling.

### Key Technologies

*   **Framework:** Next.js 16 (App Router)
*   **Language:** TypeScript
*   **Documentation Engine:** Fumadocs (Core, MDX, UI)
*   **Styling:** Tailwind CSS v4 (via PostCSS)
*   **Search:** Orama (integrated via Fumadocs)
*   **Linting/Formatting:** Biome
*   **Package Manager:** pnpm

## Architecture

*   **`app/`**: Contains the Next.js App Router file structure.
    *   `app/(home)/`: Landing page routes.
    *   `app/docs/`: Documentation routes, rendering the MDX content.
    *   `app/api/`: API routes (e.g., for search).
*   **`content/`**: Stores the actual documentation content in MDX format.
    *   `content/docs/`: The main documentation tree.
*   **`lib/`**: Utility libraries.
    *   `lib/source.ts`: Configures the Fumadocs loader and source adapter.
*   **`components/`**: Reusable React components (e.g., Search, UI elements).

## Building and Running

The project uses `pnpm` for dependency management.

### Commands

*   **Development Server:**
    ```bash
    pnpm dev
    ```
    Runs the app in development mode (using Turbopack via `--turbo`).

*   **Production Build:**
    ```bash
    pnpm build
    ```
    Builds the application for production.

*   **Start Production Server:**
    ```bash
    pnpm start
    ```
    Runs the built application.

*   **Linting:**
    ```bash
    pnpm lint
    ```
    Checks code quality using Biome.

*   **Formatting:**
    ```bash
    pnpm format
    ```
    Formats code using Biome.

## Development Conventions

*   **Content Authoring:** Documentation pages are added as `.mdx` files in `content/docs`. Frontmatter is handled via `source.config.ts`.
*   **Styling:** Use Tailwind CSS utility classes. Global styles are in `app/global.css`.
*   **Code Style:**
    *   **Indentation:** 2 spaces.
    *   **Imports:** Organized automatically by Biome.
    *   **Linting:** Adheres to `biome.json` rules (Standard + Next.js + React recommendations).
*   **Icons:** Uses `lucide-react` (integrated via Fumadocs plugins).
