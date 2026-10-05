/* ===== YOUR ARTWORK LIST =====
   To add a piece, copy one line, paste it at the end, and edit it.

   title:  name shown in the lightbox
   medium: "digital" or "traditional" (lowercase, exactly one of these)
   tags:   any words you like, lowercase, e.g. ["cat", "fanart", "sketch", "unfinished"]
   thumb:  small version for the grid (about 400px wide)   e.g. "images/thumbs/cat-sketch.jpg"
   full:   larger version for the lightbox (about 1600px)  e.g. "images/full/cat-sketch.jpg"

   Leave thumb and full as "" to show a grey placeholder while you test.
   Keep a comma after every line except (optionally) the last. */

const ARTWORKS = [
  { title: "Sample sketch 1",   medium: "traditional", tags: ["sketch", "animal"],      thumb: "", full: "" },
  { title: "Sample sketch 2",   medium: "digital",     tags: ["sketch", "character"],   thumb: "", full: "" },
  { title: "Sample fanart",     medium: "digital",     tags: ["fanart", "character"],   thumb: "", full: "" },
  { title: "Sample unfinished", medium: "traditional", tags: ["unfinished", "animal"],  thumb: "", full: "" },
  { title: "Sample original",   medium: "digital",     tags: ["original", "landscape"], thumb: "", full: "" },
  { title: "Sample sketch 3",   medium: "traditional", tags: ["sketch", "landscape"],   thumb: "", full: "" }
];
