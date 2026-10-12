# WEB PROGRAMMING LABORATORY — SET I

This repository contains **20 experiments / 40 practical parts**, matching the university Set I question list. Each `experiment-XX/` folder contains the `(a)` and `(b)` programs.

## Running HTML / CSS / JavaScript
Open each `a-*.html` or `b-*.html` in a modern browser. External stylesheets are in the same folder. AngularJS (experiments 1b, 2b), online images (3a, 4a, 14a, 15a) and the quotes API (7b) need an internet connection.

For experiment 14a, add your own `audio.mp3` and `video.mp4` alongside the HTML page. Media files are not bundled.

## Running Node.js + MySQL (Experiments 3b, 4b, 6b)

1. Install Node.js and MySQL Server.
2. Initialize each experiment's schema, e.g. `mysql -u root -p < experiment-03/b-database.sql`.
3. Run `npm install` at the repository root.
4. Configure your database login in environment variables (`DB_USER`, `DB_PASSWORD`) or use the local MySQL `root` user with a blank password.
5. Execute `node experiment-03/b-app.js`, `node experiment-04/b-app.js`, or `node experiment-06/b-app.js`.

All three experiments use the shared `supermarket` database and `products` table. The SQL scripts use upserts and are safe to run repeatedly for these demo rows.

## Important
- Conversion rates in 16b are **sample hard-coded rates**, not live forex rates.
- Password checks and HTML form handling are local teaching demonstrations, not production authentication.
- The Fibonacci demo limits itself to 79 terms for safe integer output with JavaScript Number.
- All programs are intended as simple standalone teaching exercises.
