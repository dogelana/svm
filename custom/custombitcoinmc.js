function initializeCustomMarketCapWidget() {
    // Check if the content area for the widget already exists, otherwise create it
    let customMarketCapArea = document.getElementById('customMarketCapArea');

    if (!customMarketCapArea) {
        // Create and set up content area and title
        customMarketCapArea = document.createElement('div');
        customMarketCapArea.id = 'customMarketCapArea';

        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Bitcoin Market Cap Calculator';

        // Find or create the container
        let container = document.getElementById('customMarketCapContent') || document.getElementById('customContent');
        if (!container) {
            container = document.createElement('div');
            container.id = 'customMarketCapContent';
            document.body.appendChild(container);
        }

        // Append the title and content to the container
        container.appendChild(titleElement);
        container.appendChild(customMarketCapArea);

        // Generate market cap values and display them
        generateMarketCapValues();
    }
}

function generateMarketCapValues() {
    const marketCapArea = document.getElementById('customMarketCapArea');
    marketCapArea.innerHTML = ''; // Clear previous content

    // Bitcoin supply (as of now, it is capped at 21 million)
    const bitcoinSupply = 21000000;

    // Calculate and display market cap at increments of $25,000
    for (let price = 0; price <= 1000000; price += 25000) {
        const marketCap = price * bitcoinSupply;
        const marketCapEntry = document.createElement('p');
        marketCapEntry.textContent = `Price: $${price.toLocaleString()} | Market Cap: $${marketCap.toLocaleString()}`;
        marketCapArea.appendChild(marketCapEntry);
    }
}

// Initialize the Bitcoin Market Cap widget
initializeCustomMarketCapWidget();
