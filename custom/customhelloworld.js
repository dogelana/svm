function initializeCustomHelloWorld() {
    // Check if the content area for the widget already exists, otherwise create it
    let customHelloWorldArea = document.getElementById('customHelloWorldArea');

    if (!customHelloWorldArea) {
        // Create and set up content area and title
        customHelloWorldArea = document.createElement('div');
        customHelloWorldArea.id = 'customHelloWorldArea';

        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Hello World';

        // Find or create the container
        let container = document.getElementById('customHelloWorldContent') || document.getElementById('customContent');
        if (!container) {
            container = document.createElement('div');
            container.id = 'customHelloWorldContent';
            document.body.appendChild(container);
        }

        // Append the title and content to the container
        container.appendChild(titleElement);
        container.appendChild(customHelloWorldArea);

        // Set the content of the widget
        customHelloWorldArea.textContent = 'Hello World';
    }
}

// Initialize the Hello World widget
initializeCustomHelloWorld();
