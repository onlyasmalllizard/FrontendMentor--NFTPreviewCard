# Frontend Mentor - NFT preview card component

This is my second Frontend Mentor challenge. I've been making two versions of each one: the first time with vanilla CSS, the second with TailwindCSS.

## Version 1

**Visible on the vanilla branch**

While I was working, I noticed that my CSS file was becoming confusing. I was having a hard time finding things, even on the same day I wrote them.

I refactored the file using a table of contents and grouping rules by category. This makes the file longer overall, but it is easier to understand and maintain.

## Version 2

**Working version visible in `/src` and `/dist` folders, running on minified version in `./style.css`**

This went together faster than I expected to based on my experience with my first Frontend Mentor challenge. I did benefit a lot from having worked out how to do the active state on the main image in Version 1, but it wasn't only due to that. I'm also starting to remember common Tailwind classes.

The act of applying classes to individual elements results in mes repeating myself a lot. For example, in the footer, I want both `a` tags to behave the same way, but I can't use inheritance to set their colour without impacting the normal text. Similarly, their hover effects and transition duration have to be applied to both individually, leaving more room for potential error.

## Things I am morally obligated to say

1. Frontend Mentor needs to review all its designs for text contrast issues.
2. Cryptocurrency is a scam.
3. NFTs are even more of a scam than crypto.
