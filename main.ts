// Describe Your Ex in One Word — make.fun program/v1 entry.
// Writes exactly one word to /output/entry.txt. Deterministic: no network,
// no randomness, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "placeholder";

// Gate invariant: exactly one word, 1-111 chars, no whitespace, no padding.
if (word.length < 1 || word.length > 111 || /\s/.test(word)) {
  throw new Error("entry must be a single word of 1-111 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
