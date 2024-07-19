---
title: "Delete RAW Photos from Google Photos"
description: "A hacky way to view and remove RAW photos from Google Photos"
date: "July 18, 2024"
---

Since Google does not provide a native way to view and delete RAW photos from your library, I devised a little script to programmatically select all Google Photos to be moved to the trash.

Some notes from anyone looking to use this:

1. This script is based on the architecture of Google Photos in July 2024. It may stop working at any time. There's also a selector for the scrollable element that will likely need to be updated when you use it.
2. This script **only bulk selects** photos. It is non-destructive, and does not move photos to the trash for you.
3. The script will run until it reaches the end of the library, or if it fails to find any RAW photos after a certain amount of time. If you'd like to abort early, reload the page.
4. This was a quick-and-dirty script that worked for me. I'm certain there's edge cases that it may not account for. If you cannot understand what the code is doing, I do not recommend running it.

First, here's the script, with instructions below:

```js
(async function run() {
  let emptyCount = 0;
  let doc = document.querySelector(
    // UPDATE THIS SELECTOR TO THE ELEMENT THAT SCROLLS
    '[jsname="vAv0dd"]',
  );

  if (!doc) {
    console.error(
      "Failed to locate the scrolling element for the library. You will need to locate that element and create a unique selector for it, and update the query above.",
    );
  }

  while (true) {
    let windowHeight = doc.offsetHeight;
    let scrollDistance = doc.scrollTop;

    doc.scrollTop = scrollDistance + windowHeight;
    await wait(1000);

    // If it doesn't seem like we're scrolling anymore, end
    if (doc.scrollTop - scrollDistance <= 200) {
      console.log("Reached end of library.");
      break;
    }

    let rawPhotos = Array.from(
      document.querySelectorAll(
        '[role="checkbox"][aria-label^="Raw"][aria-checked="false"]',
      ),
    );

    console.log("Found raw photos: ", rawPhotos);

    if (rawPhotos.length === 0) {
      emptyCount++;
      if (emptyCount > 10) {
        console.log("Stopped finding raw photos, so bailing early.");
        break;
      }
      continue;
    }

    for (let photo of rawPhotos) {
      if (photo.getAttribute("aria-checked") !== "true") {
        photo.click();
      }
    }
  }

  async function wait(time) {
    await new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
})();
```

## How to delete RAW photos from Google Photos

<ol>

<li>Navigate to <a href="https://photos.google.com/search/_tra_" rel="noreferrer" target="_blank">https://photos.google.com/search/_tra_</a>. This page will break-up your library into RAW and JPG separately. (<a rel="noreferrer" target="_blank" href="https://www.reddit.com/r/GooglePixel/comments/17kwujv/the_way_google_photos_handles_raw_photos_now_is/">source</a>)
<li>Scroll to the very top of your library, or to where RAW photos begin to appear in your library.</li>
<li>Copy the script above and paste it into the developer console. Hit ENTER to run it.</li>
<li>The script will start to run, and progressively select RAW photos in your library. It will run until the end of the library, or until it stops finding RAW photos after a certain period of time, whichever comes first.
<ul>
   <li>If you need to cancel the script, reload the page.</li>
</ul>
</li>
<li>You can take actions on the photos, such as moving them to the trash, as it's running. Although I'd recommend waiting for it to stop. (It will say when it does.)</li>

</ol>

## It's annoying that we have to do this

At some point last year, I switched my iPhone to shoot in JPEG + RAW, and promptly forgot about it. A few months later, I got an email that I was maxing the capacity of my Google One storage, not realizing I had taken so many RAW photos, most of which I didn't care to preserve in its RAW version.

Unfortunately, Google does not provide any native way to filter to show just RAW photos, or remove them from your library. Probably to make it as difficult as possible to persuade you to just pay for more Google One storage.

Well, I didn't want to do that, and I didn't want to spend the time selecting each RAW photo individually. So I made this script to do that work programmatically in a minute or two.

## How I made it

The first hurdle was to figure out if there was actually a way to distinguish RAW photos in the DOM compared to non-RAW photos. Fortunately, I discovered that every RAW photo has an `aria-label` that starts with "Raw". Convenient!

The second challenge was how to select a photo programmatically. I quickly learned that Google uses pseudo-checkboxes that can be clicked (thanks to `HTMLElement.click()`), to select it. Fortunately Google implemented this with the appropriate ARIA attributes, so we can determine whether or not an image is already selected. I was concerned that every photo "click" might reset the selection instead of bulk-selecting, but I was pleased to learn that I can successively click photos and that would maintain the bulk-selection.

The final hurdle was scrolling virtualization. Google uses a virtualized scrolling window for the library, probably to maintain performance. But this means that your whole library is not available in the DOM to be selected. So the way I dealt with this was to:

1. Find the scrolling element.
2. Select all of the RAW photos available in the document.
3. Scroll the element by the height of client window.
4. Select all of the unchecked RAW photos, then keep scrolling.
5. Repeat.

To accommodate any latency with the page scrolling and photos loading in, I added a brief `wait` step. Makes the operation a little slower, but hopefully more reliable. One could maybe improve this script with a `MutationObserver` to check whether new photos had been added to the container, but a brief pause worked well enough for me.

Good luck, I hope this helps someone else out there!
