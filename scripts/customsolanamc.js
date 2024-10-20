function initializeCustomSolanaMarketCapWidget() {
    // Check if the content area for the widget already exists, otherwise create it
    let customSolanaMarketCapArea = document.getElementById('customSolanaMarketCapArea');

    if (!customSolanaMarketCapArea) {
        // Create and set up content area and title
        customSolanaMarketCapArea = document.createElement('div');
        customSolanaMarketCapArea.id = 'customSolanaMarketCapArea';

        const titleElement = document.createElement('h3');
        titleElement.textContent = 'Solana Market Cap Calculator';

        // Find or create the container
        let container = document.getElementById('customSolanaMarketCapContent') || document.getElementById('customContent');
        if (!container) {
            container = document.createElement('div');
            container.id = 'customSolanaMarketCapContent';
            document.body.appendChild(container);
        }

        // Append the title and content to the container
        container.appendChild(titleElement);
        container.appendChild(customSolanaMarketCapArea);

        // Generate market cap values and display them
        generateSolanaMarketCapValues();
    }
}

function generateSolanaMarketCapValues() {
    const marketCapArea = document.getElementById('customSolanaMarketCapArea');
    marketCapArea.innerHTML = ''; // Clear previous content

    // Solana supply (as of now, it is capped at around 500 million)
    const solanaSupply = 469925023; // Modify this value based on current supply if necessary

    // Calculate and display market cap at increments of $25
    for (let price = 0; price <= 1000; price += 25) {
        const marketCap = price * solanaSupply;
        const marketCapEntry = document.createElement('p');
        marketCapEntry.textContent = `Price: $${price.toLocaleString()} | Market Cap: $${marketCap.toLocaleString()}`;
        marketCapArea.appendChild(marketCapEntry);
    }
}

// Initialize the Solana Market Cap widget
initializeCustomSolanaMarketCapWidget();
