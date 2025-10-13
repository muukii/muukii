# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an Obsidian vault that serves as a personal portfolio and knowledge base. It contains:
- Personal profile information (README.md)
- Obsidian workspace configuration (`.obsidian/`)
- Links to professional work and projects

## Repository Structure

- `README.md` - Main profile page with navigation to all content
- `Career/` - Professional history and credentials
  - `Resume.md` - Career history, skills, and OSS contributions (経歴書)
- `Engineering/` - Technical philosophy and principles
  - `Principles.md` - Programming principles and design philosophy
- `.obsidian/` - Obsidian configuration directory
  - `workspace.json` - Workspace layout and open files
  - `core-plugins.json` - Enabled Obsidian core plugins
  - `app.json`, `appearance.json` - App-level settings

## Working with this Repository

### Obsidian Vault Management

This is an Obsidian vault. To work with it:
- Open the repository directory in Obsidian to view and edit notes
- Markdown files follow Obsidian's extended markdown syntax (supports `[[wiki-links]]`, tags, frontmatter)
- The vault uses standard Obsidian features: file explorer, search, backlinks, outgoing links, tags, and outline

### Content Overview

#### Career/Resume.md
Contains professional information in English:
- Public profile links (GitHub, Instagram, Lapras)
- Career history at Eureka, Inc. (2014-present)
- Technical stack: Swift, Objective-C, UIKit, SwiftUI, Texture, CoreData, Tuist
- OSS contributions (Verge, swift-state-graph, FluidInterfaceKit, Brightroom)
- Management experience and skills
- References to published articles

**Note:** Personal information (name, address, phone, birthdate) has been removed for privacy

#### Engineering/Principles.md
Documents engineering philosophy and coding standards (in Japanese):
- Core engineering philosophy and problem-solving approach
- State-driven design principles
- Type safety and immutability patterns
- StateGraph/Observable usage guidelines
- Swift coding patterns and best practices
- Company growth strategy from an engineering perspective
- Balance between abstraction and pragmatism
- Programming as skill development (like learning games)

### Content Guidelines

- **README.md** serves as the portfolio landing page - keep it concise and professional
- **Career/Resume.md** is in English and suitable for public sharing
- **Engineering/Principles.md** is in Japanese and contains detailed technical philosophy
- Both documents can be referenced when discussing architecture, coding philosophy, or career experience
- Use Obsidian wiki-links `[[path/to/file]]` for internal navigation
- Maintain clean git history with descriptive commit messages

### Git Workflow

Recent commits show simple updates:
```bash
git add .
git commit -m "Update"
git push
```

### Key External Links

- Professional profile: https://lapras.com/public/muukii
- Work organizations:
  - https://github.com/VergeGroup
  - https://github.com/FluidGroup
  - https://github.com/eure (Eureka, Inc. employer)
