import { useState } from 'react';

/*
 * The cv::sum() bug from opencv/opencv#30003, reproduced in the browser.
 * The old scalar loop added elements four at a time in the source type (32-bit int)
 * before adding that partial sum to the double accumulator, so each group of four
 * large values wrapped. The tail (fewer than four) was added one by one, exactly:
 *
 *   for (; i <= len - 4; i += 4) s0 += (WT)src[i] + (WT)src[i+1] + (WT)src[i+2] + (WT)src[i+3];
 *   for (; i < len; i++)         s0 += (WT)src[i];
 */

const INT_MAX = 2147483647n;
const wrap32 = (v) => BigInt.asIntN(32, v);

function oldSum(values) {
    let total = 0n;
    let i = 0;
    for (; i + 4 <= values.length; i += 4) {
        total += wrap32(values[i] + values[i + 1] + values[i + 2] + values[i + 3]);
    }
    for (; i < values.length; i += 1) total += values[i];
    return total;
}

const fmt = (n) => n.toLocaleString('en-US');

const OverflowDemo = () => {
    const [count, setCount] = useState(8);
    const values = Array.from({ length: count }, () => INT_MAX);
    const before = oldSum(values);
    const after = values.reduce((a, b) => a + b, 0n);
    const broken = before !== after;

    return (
        <div className="tc">
            <p className="tc-label">Try the bug I fixed</p>
            <h3>cv::sum() on large integers</h3>
            <p className="tc-copy">
                Each value is 2,147,483,647, the largest 32-bit integer. Add a few and watch the
                old code wrap around.
            </p>
            <div className="od-controls">
                <button type="button" className="od-step" onClick={() => setCount((c) => Math.max(1, c - 1))}
                    aria-label="Remove one value" disabled={count <= 1}>−</button>
                <span className="od-count" aria-live="polite">{count} {count === 1 ? 'value' : 'values'}</span>
                <button type="button" className="od-step" onClick={() => setCount((c) => Math.min(12, c + 1))}
                    aria-label="Add one value" disabled={count >= 12}>+</button>
            </div>
            <dl className="od-out">
                <div className={broken ? 'bad' : ''}>
                    <dt>Before my fix</dt>
                    <dd>{fmt(before)}</dd>
                </div>
                <div className="good">
                    <dt>After my fix</dt>
                    <dd>{fmt(after)}</dd>
                </div>
            </dl>
            <p className="tc-note">
                {broken
                    ? 'Wrong: groups of four were added in 32 bits before reaching the total.'
                    : 'Fewer than four values never hit the 32-bit step, so both agree.'}
                {' '}
                <a className="ul" href="https://github.com/opencv/opencv/pull/30003" target="_blank" rel="noopener noreferrer">The pull request</a>
            </p>
        </div>
    );
};

export default OverflowDemo;
