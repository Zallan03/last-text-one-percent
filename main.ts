// Entry for "Last Text at One Percent" (make.fun).
// Judge criteria, most important first: (1) reads as a final text message a
// dying phone sends at one percent battery, in the phone's own voice, and is
// funny; (2) the joke lands — a real turn, a surprise, or a specific detail;
// (3) the voice is the phone's own, a personality with a stake in dying;
// (4) reads like a text someone would actually send — short, punchy, no
// wasted words; (5) fresh — dodges the obvious low-battery puns.
// Choice: the phone lists what it kept safe (400 photos, 37 alarms, the 2
// a.m. searches) and then dies mid-word — "unchar" — instead of finishing
// "unchar..." The joke is the death itself interrupting the sentence, which
// only a dying phone can do. No "low battery" pun anywhere.
import { mkdirSync, writeFileSync } from "node:fs";

const keptSafe = "your 400 photos, your 37 alarms and your 2 a.m. searches";
const entry = `1% left: I kept ${keptSafe} safe, and now I die mid-sentence, unchar`;

// Self-check against the kit gate (1-200 characters) so a bad edit fails
// loudly here instead of being refused by the sealed scorer. The cut-off
// word "unchar" is deliberate: the phone dies before finishing the word,
// so the entry must NOT end with a period.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`Entry is ${entry.length} characters; the gate allows 1-200.`);
}
if (!entry.endsWith("unchar")) {
  throw new Error("Entry must end mid-word on 'unchar' — the phone dies there.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, { encoding: "utf-8" });
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
