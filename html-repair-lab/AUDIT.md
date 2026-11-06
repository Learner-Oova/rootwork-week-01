Problem: No Html fundamental tags

## FIX AND WHY

<!DOCTYPE html>: Tells the browser to use modern HTML5 standards. Without it, pages are rendered inconsistently.

<html lang="en">: The root element that wraps everything. The lang attribute helps screen readers pronounce text correctly, aids search engines, and enables browser translation prompts.


<meta charset="UTF-8">: Sets the character encoding so symbols, accents, emojis, and non-English text display properly instead of turning into garbled characters.

<meta name="viewport" content="width=device-width, initial-scale=1.0">: Makes the page fit the device’s screen width. Without it, mobile browsers render the page at desktop width and shrink it down, which breaks responsive design.

<title>: Sets the text shown in the browser tab, bookmarks, and search results. It matters for usability and SEO.

## Tags changed FORMAT (Problem: Fix and why)

div: <div> containing navigations was changed to nav: <nav> tells browsers and assistive tools “this is navigation,” while <div> says nothing.

No semantic html tag: Added a main tag: <main> wraps the central content that is unique to the page.

<h3 id="about">: <h3> with id 'about' was changed to <h1>: <h1> marks the main topic of the page, while <h3> is a lower-level subheading.

h1: I changed the h1 tag enclosing the Upcoming events to h2, for proper structuring since a page doesn't usually require more than one h1 tag except in certain cases.

alt: I changed the value for alt in the img tag to Tech Crush 2026 since is a vague word to use while Tech Crush 2026 is more specific

div: I changed the div tags under the main tag to section tag since section tag is used when a content is a meanngful and could have its own heading.

h4: I changed the h4 tag containing HTML workshop to h3 tag so as to be ordered structurally as h3 tag should be under h2, h4 under h3 and so on

h4: I changed the h4 tag enclosing Git practice to h3 for the same reason above

No label tag for input: I added a label tag to enclose the Name, Email and Why did you want to join, to place the labels in their specific tags

he: I changed the join the club tag from h3 to h2 to follow the sub heading structure that has been laid from Upcoming events.

type="text": I changed the type property 'input' in the Email label tag to email because Email checks for a valid format (like name@site.com) before the form submits. Text accepts anything.

input tag: I changed the input tag of the Why do you want to join to textarea because the label requires a long multiline text

div: I changed the div enclosing the Tech Club 2026 to footer since div is a generic container but footer marks the closing section of a page (or section)

No breal line: I added the break tag to separate the labels from each other to give the webpage a spacious and better look for easy accessibility