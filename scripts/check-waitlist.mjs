const BASE_URL = 'http://localhost:3000';

async function checkWaitlist() {
    console.log('Checking waitlist status (Expect: DISABLED)...');
    let failures = 0;

    // 1. Check Homepage
    try {
        const res = await fetch(BASE_URL);
        const text = await res.text();

        // Check for link
        if (text.includes('href="/priority-seating"')) {
            console.error('FAIL: Found link to /priority-seating on homepage (Waitlist should be disabled)');
            failures++;
        } else {
            console.log('PASS: No /priority-seating link on homepage');
        }

        // Check for CTA text
        if (text.includes('Join Waitlist') || text.includes('Join the Waitlist')) {
            console.error('FAIL: Found "Join Waitlist" text on homepage');
            failures++;
        } else {
            console.log('PASS: No "Join Waitlist" text on homepage');
        }

        // Check for replacement phone number
        if (text.includes('305-295-2620')) {
            console.log('PASS: Found phone number (replacement CTA)');
        } else {
            console.error('FAIL: Phone number 305-295-2620 not found');
            failures++;
        }

    } catch (e) {
        console.error('Error fetching homepage:', e.message);
        failures++;
    }

    // 2. Check Priority Seating Page Redirect
    try {
        const res = await fetch(`${BASE_URL}/priority-seating`, { redirect: 'manual' });
        if (res.status === 307 || res.status === 308 || res.status === 302) {
            const location = res.headers.get('location');
            if (location && location.includes('/contact')) {
                console.log(`PASS: /priority-seating redirects to ${location}`);
            } else {
                console.error(`FAIL: /priority-seating redirects to ${location}, expected /contact...`);
                failures++;
            }
        } else {
            console.error(`FAIL: /priority-seating returned status ${res.status} (expected redirect)`);
            failures++;
        }
    } catch (e) {
        console.error('Error fetching /priority-seating:', e.message);
        failures++;
    }

    if (failures > 0) {
        console.error(`\nFAILED: ${failures} checks failed.`);
        process.exit(1);
    } else {
        console.log('\nSUCCESS: All checks passed.');
        process.exit(0);
    }
}

checkWaitlist();
