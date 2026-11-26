// Rename the Planet — entry program (Node 22).
// Writes one funny new planet name + why to /output/entry.txt.
// Chosen from 12 fresh candidates: Jupiter as a nightclub bouncer — its
// gravity eats comets so Earth doesn't have to (108 chars, 110 bytes).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Jupiter, renamed The Bouncer: it eats comets so Earth doesn't have to \u2014 the solar system's unpaid bodyguard.";
const OUTPUT_FILE = "/output/entry.txt";
const MAX_CHARS = 200;
const MIN_CHARS = 1;

const chars = [...ENTRY].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `entry is ${chars} chars, outside the ${MIN_CHARS}-${MAX_CHARS} gate`,
  );
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
console.log(
  `wrote ${chars} chars (${Buffer.byteLength(ENTRY, "utf8")} bytes) to ${OUTPUT_FILE}`,
);
