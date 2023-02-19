try {
  chrome.devtools.panels.create(
    "Dev Tools",
    "reindeer.png",
    "src/pages/panel/index.html"
  );
} catch (e) {
  console.error(e);
}
