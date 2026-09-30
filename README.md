# Xiao Wei Oral Practice Buddy

A simple browser-based P4 English oral practice coach built around the **SEPS** framework used in Xiao Wei's practice materials:

- **S — State**
- **E — Explain**
- **P — Personal Experience**
- **S — Suggestion**

## What V1 does

- Five P4 oral topics:
  - Kindness
  - Safety
  - Respect
  - Energy Conservation
  - Clean Environment
- Three questions per topic
- Progressive SEPS hints rather than showing the model answer immediately
- Browser speech-to-text where Web Speech Recognition is available
- Typed-answer fallback
- Lightweight answer analysis to identify missing SEPS components
- Parent Mode with sentence starters and suggested answers
- Mobile-friendly layout

## Run locally

No installation is required.

Open `index.html` in a modern browser.

For the best speech-recognition experience, use a Chromium-based browser such as Chrome or Edge and allow microphone permission.

A local web server is also fine, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Important limitation of V1

The coach currently uses local rule-based guidance. It does **not** send Xiao Wei's speech to an AI model. This keeps the first version easy to run and lets us validate the teaching flow first.

A later version can add an AI backend so the coach can understand meaning, grammar and elaboration more naturally while still following the same SEPS teaching method.
