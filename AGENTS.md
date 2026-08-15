# AGENTS.md
- for codex
- 
## Project Overview

This project is a personal portfolio website.

The website serves two purposes:
- Present development projects and technical experience.
- Provide a personal space for blog, wiki, and experiments.

## Tech Stack

- Framework: React
- Language: JavaScript / TypeScript
- Styling:
- Build Tool:
- Package Manager: npm
- Version Control: Git / GitHub

## Site Structure

The website is organized around the following sections:

- `/` : Home
- `/portfolio` : Portfolio

## Component Architecture

- Build reusable UI components whenever appropriate.
- Keep page-level components separate from reusable components.
- Avoid creating overly large components.
- Components should have a clear and focused responsibility.
- Reuse existing components before creating new ones.
  
## UI / Design Rules

- Reuse existing components and styles.

## Project Pages

Each project page should clearly present:

- Project overview
  
## Code Style

- Follow the existing project conventions.
- Use descriptive variable and function names.
- Avoid unnecessary abstraction.
- Avoid duplicated logic.
- Prefer simple solutions over premature optimization.
- Do not introduce a new library for a problem that can be solved with existing dependencies.

## Dependencies

- Do not add new npm packages without a clear reason.
- Prefer existing dependencies.
- Before adding a dependency, consider whether the functionality can be implemented with the existing stack.
- Keep dependencies minimal.

## Git Rules

- Do not create commits unless explicitly requested.
- Do not push to remote repositories unless explicitly requested.
- Do not force-push.
- Do not reset or discard user changes without explicit permission.
- Do not modify unrelated files.
- Keep commits focused and meaningful.

## Build and Verification

After making code changes:

- Run build command "npm start"

## Change Scope

- Make the smallest change necessary to fulfill the request.
- Do not refactor unrelated code.
- Do not rewrite existing components without a clear reason.
- When a task targets a specific component or page, limit changes to that area.
- Inspect existing implementations before creating new components.
- Reuse existing components whenever possible.