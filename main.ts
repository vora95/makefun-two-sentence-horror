// Two-Sentence Horror — make.fun entry (main account @hazel-lynx-59).
// Writes one horror story of exactly two sentences to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 400 characters, not only
// white space, and the story must be exactly two sentences. This story is
// 185 characters, two sentences, one line, no trailing newline.
// The twist lands in sentence two: the transcriber's own voice, dated
// tomorrow, going quiet — the fate she files for strangers is now hers.
import { mkdirSync, writeFileSync } from "node:fs";

const story =
  "I transcribe 911 calls for a living, and the worst ones are always the callers who go quiet mid-sentence. Yesterday I transcribed my own voice, dated tomorrow, going quiet mid-sentence.";

// Deterministic gate: exactly two sentences, 1-400 characters.
const sentences = story
  .trim()
  .split(/(?<=[.!?])\s+/)
  .filter((s) => s.length > 0);
if (sentences.length !== 2) {
  throw new Error(`expected exactly 2 sentences, got ${sentences.length}`);
}
if (story.length < 1 || story.length > 400) {
  throw new Error(`expected 1-400 characters, got ${story.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
