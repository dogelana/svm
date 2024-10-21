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

    // Fetch and display recent Solana blocks
    fetch('https://api.mainnet-beta.solana.com', {
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
        const blockhash = data.result.value.blockhash;
        fetch(`https://api.mainnet-beta.solana.com`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "jsonrpc": "2.0",
              "id": 1,
              "method": "getBlock",
              "params": [
                blockhash
              ]
            })
          })
          .then(response => response.json())
          .then(blockData => {
            // Display block information
            const blockInfo = `
              <h2>Block Height: ${blockData.result.blockHeight}</h2>
              <p>Timestamp: ${new Date(blockData.result.blockTime * 1000).toLocaleString()}</p>
              <p>Number of Transactions: ${blockData.result.transactions.length}</p>
            `;
            solanaBlockExplorerArea.innerHTML = blockInfo;
          })
          .catch(error => {
            console.error('Error fetching block data:', error);
            solanaBlockExplorerArea.innerHTML = "<p>Error loading block data.</p>";
          });
      })
      .catch(error => {
        console.error('Error fetching recent blockhash:', error);
        solanaBlockExplorerArea.innerHTML = "<p>Error loading block data.</p>";
      });
  }
}

initializeSolanaBlockExplorer();
