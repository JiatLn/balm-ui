# Contributing to BalmUI

BalmUI is an open source project that accepts contributions from community members.

Before submitting your contribution though, please make sure to take a moment and read through the following guidelines.

If you’ve never contributed to an open source project before, take a look at GitHub’s [Contributing to Open Source on GitHub](https://guides.github.com/activities/contributing-to-open-source/) to learn some of the basics.

## Code of Conduct

The BalmUI authors value respect and are committed to making the repos and communication channels a safe space for all peoples.

To learn more about what to expect from us and what we expect from you, read the [Code of Conduct](CODE_OF_CONDUCT.md).

## Issues and Bugs

If you find a bug in the source code or a mistake in the documentation, you can help us by submitting an issue to the GitHub repository for that platform.

Even better: propose a fix with a pull request and link it to the issue!

## Pull Requests

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Checkout a topic branch from the relevant branch, e.g. `dev`, and merge back against that branch.

- Work in the `src`, `docs` and `test` folder and **DO NOT** checkin `dist`, `components`, `directives`, `plugins`, `utils` and `fonts` in the commits.

- If the pull request is accepted, we will merge the pull request for you.

- If fixing a bug:
  - If you are resolving a special issue, add `(fix #xxxx[,#xxx])` (#xxxx is the issue id) in your PR title for a better release log, e.g. `update entities encoding/decoding (fix #3899)`.
  - Provide detailed description of the bug in the PR. Live demo preferred.
  - Add appropriate test coverage if applicable.

## Development Setup

Install [Node.js® and npm](https://nodejs.org/en/download/) if they are not already on your machine.

> **Verify that you are running at least Node.js version 8.x or greater** and npm version 5.x or greater by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors, but newer versions are fine.

The BalmUI depends on [BalmJS](https://balm.js.org/), so we need to install the `balm-core` globally.

```sh
yarn global add balm-core
# OR
npm install -g balm-core
```

After cloning the repo, run:

```sh
yarn
# OR
npm install
```

Checkout your branch, enjoy:

```sh
npm run dev
```

## Project Structure

```
project
├── components // contains all standalone components for distribution.
├── config     // BalmJS config files.
├── directives // contains all standalone directives for distribution.
├── dist       // contains built files for distribution.
├── docs       // BalmUI documentation and demos. (DEV)
│ ├── data     // mock data
│ ├── ...
│ ├── scripts
│ │ ├── docs     // API docs
│ │ ├── ...
│ │ ├── snippets // code snippets
│ │ ├── ...
│ │ └── views    // official demos
│ └── styles
├── examples   // BalmUI examples. (TEST)
├── fonts      // Material Icons
├── plugins    // contains all standalone plugins for distribution.
├── scripts    // Build-related configuration files.
├─┬ src        // contains the source code, obviously.
│ ├── material-components-web // Stable mdc-web source code.
│ ├── material-icons          // Stable Material Icons fonts.
│ ├── scripts        // BalmUI core scripts (DEV)
│ │ ├── ...
│ │ ├── index.js     // Official Google Material Components entry.
│ │ ├── next.js      // Experimental Google Material Components entry.
│ │ └── plus.js      // BalmJS Team Feature Material Components entry.
│ └── styles         // BalmUI core styles (DEV)
│   ├── ...
│   └── balm-ui.scss // BalmUI style entry.
├── test       // contains all tests. (TEST)
├── utils      // contains all standalone utils for distribution.
└── ...
```

- `config`: In most cases you don't need to touch them.

- `dist`, `components`, `directives`, `plugins` and `utils`: Note these directories are only updated when a release happens; they do not reflect the latest changes in development branches.

- `src/material-components-web` and `src/material-icons`: Note these directories are only updated in `next` branch.

- `docs/{styles,scripts}`, `src/{styles,scripts}` and `test`: **Welcome to improve me;)**
