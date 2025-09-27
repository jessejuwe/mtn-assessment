# MTN eShop

Cloning the landing page for [MTN eShop](https://shop.mtn.ng/)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🎨 Modern UI with beautiful animations and transitions
- 🌙 Dark mode support
- 📱 Fully responsive design
- ♿ Accessibility compliant
- ⚡ Optimized performance with lazy loading
- 📝 Application form with validation

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Styling:** TailwindCSS
- **Components:** Chakra-UI
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/)

### Steps

1. Clone the repository:

```bash
   git clone https://github.com/jessejuwe/mtn-assessment
```

2. Navigate to the project directory:

```bash
   cd mtn-assessment
```

3. Install dependencies:

```bash
   npm install
```

## Usage

## Development Server

Start the app in development mode with turbopack:

```bash
   npm run dev
```

The server will start at [http://localhost:3200](http://localhost:3200).

## Production Build

Build the app for production:

```bash
   npm run build
```

Start the production server:

```bash
   npm start
```

## Configuration

No environment variables for now

```plaintext
NEXT_PUBLIC_MTN_ID=???
```

## Scripts

| Command             | Description                                     |
| ------------------- | ----------------------------------------------- |
| `npm run dev`       | Runs the app in development mode                |
| `npm run dev:turbo` | Runs the app in development mode with turbopack |
| `npm run build`     | Builds the app for production                   |
| `npm start`         | Runs the built app in production mode           |
| `npm test`          | Runs tests                                      |
| `npm run lint`      | Lints the code                                  |
| `npm run lint:fix`  | Fixes linting issues                            |

## Folder Structure

Flat folder structure for easy navigation.

```
mtn/
├── app/                # App router (Next.js routing)
├── components/         # Reusable UI components
│  ├── containers/      # For custom components e.g. Footer, Header etc
│  ├── layout/          # For layout components
│  ├── pages/           # For client-side page components e.g. Home etc
│  ├── shared/          # For app wide shared components
│  └── ui/              # For reusable UI components
├── constants/          # Colors and Themes
├── css/                # Tailwind base, theme and custom styles
├── exports/            # Reducing component import complexity
├── helpers/            # Helper variables for storing static data
├── providers/          # Providing context or state to sections of the app
├── public/             # Static files
│ ├── assets/           # Images and videos
│ ├── fonts/            # Fonts
├── utils/              # Utility functions
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Contributing

We welcome contributions to make this project better! If you'd like to contribute, please follow these steps:

1. **Fork the repository**: Click the "Fork" button at the top right of the page to create a copy of the repo on your GitHub account.
2. **Clone your fork**: Clone the forked repository to your local machine.

```bash
   git clone https://github.com/Trustcrow-Team/trustcrow-backoffice.git
```

3. **Create a new branch**: Create a branch for your feature or fix.

```bash
   git checkout -b feature/your-feature-name
```

4. **Make your changes**: Implement your feature or fix, making sure to follow the code style and guidelines.
5. **Commit your changes**: Commit your changes with a descriptive commit message.

```bash
   git commit -m "Add feature: your feature name"
```

6. **Push to your fork**: Push your changes to your forked repository.

```bash
   git push origin feature/your-feature-name
```

7. **Create a Pull Request**: Open a pull request on the main repository to merge your changes. Include a clear description of your changes and any relevant details.

**Note**: Please ensure your code is well-documented, and all tests are passing.

## License

You are not licensed to use, modify, and distribute this software unless agreed upon.
