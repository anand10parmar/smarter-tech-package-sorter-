# Smarter Technology – Package Sorter

This repository contains an implementation of `sort(width, height, length, mass)` that dispatches packages to the correct stack based on **bulky** and **heavy** rules.

## Rules

A package is **bulky** if:
- Volume (W × H × L) >= 1,000,000 cm³, **OR**
- Any dimension >= 150 cm

A package is **heavy** if:
- Mass >= 20 kg

Stacks:
- **STANDARD**: not bulky and not heavy
- **SPECIAL**: bulky or heavy (but not both)
- **REJECTED**: bulky and heavy

## Tech

- Node.js (no external dependencies)

## Getting Started

### 1) Clone

```bash
git clone https://github.com/<your-username>/smarter-tech-package-sorter.git
cd smarter-tech-package-sorter
