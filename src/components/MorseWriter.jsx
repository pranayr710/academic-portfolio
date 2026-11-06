import { useMemo, useState } from 'react';

/*
 * Type a word and it is written in Morse, stroke by stroke, the way the robot arm writes
 * a message it read from eye blinks. Dots are short taps of the pen, dashes are strokes.
 * Under prefers-reduced-motion the marks appear without the drawing animation.
 */

const MORSE = {
    A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
    K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
    U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..',
    0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.',
};

const WIDTH = 520;
const DOT = 7;
const DASH = 22;
const GAP = 7;
const LETTER_GAP = 20;
const WORD_GAP = 34;
const LINE_H = 40;

function layout(text) {
    const marks = [];
    let x = 0;
    let y = 0;
    const words = text.toUpperCase().split(/\s+/).filter(Boolean);
    words.forEach((word, wi) => {
        const letters = word.split('').filter((ch) => MORSE[ch]);
        const wordWidth = letters.reduce((w, ch) => w + MORSE[ch].split('').reduce((a, s) => a + (s === '.' ? DOT : DASH) + GAP, 0) + LETTER_GAP, 0);
        if (x > 0 && x + wordWidth > WIDTH) { x = 0; y += LINE_H; }
        letters.forEach((ch) => {
            MORSE[ch].split('').forEach((s) => {
                const w = s === '.' ? DOT : DASH;
                marks.push({ kind: s, x, y, w });
                x += w + GAP;
            });
            x += LETTER_GAP - GAP;
        });
        if (wi < words.length - 1) x += WORD_GAP - LETTER_GAP;
    });
    return { marks, height: y + LINE_H };
}

const MorseWriter = () => {
    const [text, setText] = useState('PRANAY');
    const [run, setRun] = useState(0);
    const clean = text.replace(/[^A-Za-z0-9 ]/g, '').slice(0, 24);
    const { marks, height } = useMemo(() => layout(clean), [clean]);
    const code = clean.toUpperCase().split('').map((ch) => (ch === ' ' ? '/' : MORSE[ch] || '')).join(' ');

    return (
        <div className="tc">
            <p className="tc-label">Write like the robot arm</p>
            <h3>Your name, in Morse</h3>
            <p className="tc-copy">
                The arm reads a message from eye blinks and writes it on paper. Type something and
                watch it write.
            </p>
            <form className="mw-form" onSubmit={(e) => { e.preventDefault(); setRun((r) => r + 1); }}>
                <label htmlFor="mw-input" className="sr-only">Text to write in Morse</label>
                <input id="mw-input" value={text} maxLength={24} autoComplete="off" spellCheck="false"
                    onChange={(e) => { setText(e.target.value); setRun((r) => r + 1); }} />
                <button type="submit" className="btn-primary">Write again</button>
            </form>
            <div className="mw-paper">
                <svg key={`${clean}-${run}`} viewBox={`-6 -14 ${WIDTH + 12} ${Math.max(height, LINE_H)}`}
                    role="img" aria-label={`${clean || 'nothing'} in Morse code: ${code}`}>
                    {marks.map((m, i) => (m.kind === '.'
                        ? <circle key={i} className="mw-dot" cx={m.x + DOT / 2} cy={m.y} r={3.4} style={{ animationDelay: `${i * 70}ms` }} />
                        : <line key={i} className="mw-dash" x1={m.x} y1={m.y} x2={m.x + DASH} y2={m.y} pathLength="1" style={{ animationDelay: `${i * 70}ms` }} />))}
                </svg>
            </div>
            <p className="tc-note mw-code" aria-hidden="true">{code || '—'}</p>
        </div>
    );
};

export default MorseWriter;
