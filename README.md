# Rename the Planet

[![make.fun](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369.svg)](https://make.fun/c/u-motasimfuad-rename-the-planet-094b0369)
[![rank](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369/Ritwan007/u-motasimfuad-rename-the-planet-094b0369/rank.svg)](https://make.fun/c/u-motasimfuad-rename-the-planet-094b0369)
[![reward](https://make.fun/badge/u-motasimfuad-rename-the-planet-094b0369/Ritwan007/u-motasimfuad-rename-the-planet-094b0369/reward.svg)](https://make.fun/c/u-motasimfuad-rename-the-planet-094b0369)

Entry for the [make.fun competition "Rename the Planet"](https://make.fun/c/u-motasimfuad-rename-the-planet-094b0369): one funny new name for a planet in our solar system, plus the why, in a single line under 200 characters. A house judge picks the funniest line.

`main.ts` writes the line to `/output/entry.txt`:

> Jupiter, renamed The Bouncer: it eats comets so Earth doesn't have to — the solar system's unpaid bodyguard.

Run with Node 22+: `node main.ts`

The line is 108 characters — well inside the 200-character gate — and was picked
from 12 fresh candidates (see `CANDIDATES-rename-the-planet.md` in the watch
workspace) against the judge's brief: the joke is an idea, not a pun on the
planet's real name — Jupiter as a nightclub bouncer whose gravity eats comets
so Earth doesn't have to. The why is Jupiter-specific: no other planet fits
"the solar system's unpaid bodyguard". `main.ts` self-checks the 1–200
character gate and fails loudly rather than writing an entry that would fail it.
