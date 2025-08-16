# Pomodoro Timer

A simple and clean Pomodoro Timer application built with Preact and Tailwind CSS v4.

## Features

- 25-minute work sessions
- 5-minute break sessions
- Start, pause, and reset functionality
- Manual switching between work and break modes
- Visual progress bar
- Clean, shadow-free design

## Tech Stack

- **Preact** - Lightweight React alternative
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- pnpm

### Installation

1. Clone the repository

```bash
git clone https://github.com/minagishl/pomodoro-timer.git
cd pomodoro-timer
```

2. Install dependencies

```bash
pnpm install
```

3. Start the development server

```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Usage

1. **Start Timer**: Click the "Start" button to begin a 25-minute work session
2. **Pause Timer**: Click "Pause" to temporarily stop the timer
3. **Reset Timer**: Click "Reset" to return to the initial time for the current mode
4. **Switch Modes**: Use the "Switch to Break/Work" button to manually change between work and break sessions

The timer will automatically switch from work to break (and vice versa) when a session completes.

## Project Structure

```
src/
├── app.tsx          # Main Pomodoro Timer component
├── main.tsx         # Application entry point
├── index.css        # Tailwind CSS imports
└── vite-env.d.ts    # Vite type definitions
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
