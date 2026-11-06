import { useState } from 'react';

/*
 * A mate-in-one to solve: White plays Rd1-d8#. Black's king is boxed in by its own
 * pawns (a back-rank mate), and nothing black can capture on d8 or block on e8/f8.
 * Only the solution is accepted; any other move shakes the board and resets.
 */

const FILES = 'abcdefgh';
// ︎ forces the text (not emoji) form of the chess glyphs on phones.
const G = (c) => `${c}︎`;
const START = {
    g8: ['b', G('♚')], c2: ['b', G('♜')],
    a7: ['b', G('♟')], b7: ['b', G('♟')], f7: ['b', G('♟')], g7: ['b', G('♟')], h7: ['b', G('♟')],
    g1: ['w', G('♚')], d1: ['w', G('♜')],
    a2: ['w', G('♟')], b2: ['w', G('♟')], f2: ['w', G('♟')], g2: ['w', G('♟')], h2: ['w', G('♟')],
};
const SOLUTION = { from: 'd1', to: 'd8' };
const NAMES = { '♚': 'king', '♔': 'king', '♜': 'rook', '♖': 'rook', '♟': 'pawn', '♙': 'pawn' };

const ChessPuzzle = () => {
    const [pieces, setPieces] = useState(START);
    const [selected, setSelected] = useState(null);
    const [state, setState] = useState('play'); // play | wrong | solved
    const [misses, setMisses] = useState(0);

    const reset = () => { setPieces(START); setSelected(null); setState('play'); };

    const onSquare = (sq) => {
        if (state === 'solved') return;
        const piece = pieces[sq];
        if (!selected) {
            if (piece && piece[0] === 'w') { setSelected(sq); setState('play'); }
            return;
        }
        if (sq === selected) { setSelected(null); return; }
        if (piece && piece[0] === 'w') { setSelected(sq); return; }

        const moved = { ...pieces, [sq]: pieces[selected] };
        delete moved[selected];
        setPieces(moved);
        setSelected(null);
        if (selected === SOLUTION.from && sq === SOLUTION.to) {
            setState('solved');
        } else {
            setState('wrong');
            setMisses((m) => m + 1);
            setTimeout(() => { setPieces(START); setState('play'); }, 650);
        }
    };

    const message = state === 'solved'
        ? 'Checkmate. Rook to d8 — the king is trapped behind its own pawns.'
        : state === 'wrong'
            ? 'Not quite. Try again.'
            : misses >= 2
                ? 'Hint: look at Black’s back rank.'
                : 'White to move and mate in one. Click a piece, then a square.';

    return (
        <div className="cp">
            <div className={`cp-board ${state === 'wrong' ? 'shake' : ''} ${state === 'solved' ? 'solved' : ''}`}
                role="grid" aria-label="Chess puzzle: white to move and mate in one">
                {[8, 7, 6, 5, 4, 3, 2, 1].map((rank) => (
                    <div className="cp-rank" role="row" key={rank}>
                        {FILES.split('').map((file, fi) => {
                            const sq = `${file}${rank}`;
                            const piece = pieces[sq];
                            const dark = (fi + rank) % 2 === 1;
                            const label = piece
                                ? `${sq}, ${piece[0] === 'w' ? 'white' : 'black'} ${NAMES[piece[1][0]]}`
                                : sq;
                            return (
                                <button
                                    key={sq}
                                    type="button"
                                    role="gridcell"
                                    className={`cp-sq ${dark ? 'dark' : 'light'} ${selected === sq ? 'sel' : ''} ${state === 'solved' && sq === 'g8' ? 'mated' : ''}`}
                                    onClick={() => onSquare(sq)}
                                    aria-label={label}
                                    aria-pressed={selected === sq}
                                >
                                    {piece && <span className={`cp-pc ${piece[0]}`}>{piece[1]}</span>}
                                    {fi === 0 && <span className="cp-coord r">{rank}</span>}
                                    {rank === 1 && <span className="cp-coord f">{file}</span>}
                                </button>
                            );
                        })}
                    </div>
                ))}
            </div>
            <div className="cp-foot">
                <p aria-live="polite" className={state === 'solved' ? 'ok' : ''}>{message}</p>
                <button type="button" className="btn-primary cp-reset" onClick={() => { reset(); setMisses(0); }}>Reset</button>
            </div>
        </div>
    );
};

export default ChessPuzzle;
