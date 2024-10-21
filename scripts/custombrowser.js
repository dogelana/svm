function initializeMiniBrowser() {
  let miniBrowserArea = document.getElementById('miniBrowserArea');

  if (!miniBrowserArea) {
    miniBrowserArea = document.createElement('div');
    miniBrowserArea.id = 'miniBrowserArea';

    const titleElement = document.createElement('h3');
    titleElement.textContent = 'Mini Browser';

    let container = document.getElementById('miniBrowserContent') || document.getElementById('customContent');
    if (!container) {
      container = document.createElement('div');
      container.id = 'miniBrowserContent';
      document.body.appendChild(container);
    }

    container.appendChild(titleElement);
    container.appendChild(miniBrowserArea);

    // Add the browser elements
    miniBrowserArea.innerHTML = `
      <input type="text" id="urlInput" placeholder="Enter URL">
      <button id="loadUrlButton">Load</button>
      <iframe id="browserIframe" width="100%" height="200px"></iframe> 
    `;

    // Add event listener to the button
    const urlInput = document.getElementById('urlInput');
    const loadUrlButton = document.getElementById('loadUrlButton');
    const browserIframe = document.getElementById('browserIframe');

    loadUrlButton.addEventListener('click', () => {
      const url = urlInput.value.trim();
      if (url) {
        // Load the URL in the iframe
        browserIframe.src = url; 
      }
    });
  }
}

initializeMiniBrowser();
