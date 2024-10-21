// solana_block_explorer.js

function initializeSolanaBlockExplorer() {
  let solanaBlockExplorerArea = document.getElementById('solanaBlockExplorerArea');

  if (!solanaBlockExplorerArea) {
    solanaBlockExplorerArea = document.createElement('div');
    solanaBlockExplorerArea.id = 'solanaBlockExplorerArea';

    const titleElement = document.createElement('h3');
    titleElement.textContent = 'Solana Block Explorer';

    let container = document.getElementById('solanaBlockExplorerContent') || document.getElementById('customContent');
    if (!container) {
      container = document.createElement('div');
      container.id = 'solanaBlockExplorerContent';
      document.body.appendChild(container);
    }

    container.appendChild(titleElement);
    container.appendChild(solanaBlockExplorerArea);

    // Fetch recent blockhash using QuickNode
    fetch('https://smart-fittest-valley.solana-mainnet.quiknode.pro/3d2117f57930154544c7eddf4bd5d4f6776048c3/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getRecentBlockhash"
        })
      })
      .then(response => response.json())
      .then(data => {
        const recentBlockhash = data.result.value.blockhash;

        // Display blockhash information
        const blockInfo = `
          <p>Recent Blockhash: ${recentBlockhash}</p>
        `;
        solanaBlockExplorerArea.innerHTML = blockInfo;
      })
      .catch(error => {
        console.error('Error fetching blockhash data:', error);
        solanaBlockExplorerArea.innerHTML = "<p>Error loading blockhash data.</p>";
      });
  }
}

initializeSolanaBlockExplorer();
