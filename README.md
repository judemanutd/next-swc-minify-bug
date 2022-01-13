# Next.js SWC minify bug

## How to re-create

1. Make sure `swcMinify` is true in the `next.config.js` file
2. Run `npm run build`
3. Run `npm start`

At this point,

- the user in no longer able to focus on a given input and the system selects the last input as the default even though the user can actually input the data.
- for the date picker, the cursor no longer goes to the next character, instead it goes one step back everytime the user inputs a character.

## Fix for the above

1. Turn off `swcMinify` in the `next.config.js` file
2. Run `npm run build`
3. Run `npm start`

Both the otp input and the date picker are fully functional.
