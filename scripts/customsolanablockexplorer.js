// solana_block_explorer.js

function initializeSolanaBlockExplorer() {
  // ... (rest of the function remains the same) ...

    // Fetch the current block and recent blockhash using QuickNode
    fetch('https://smart-fittest-valley.solana-mainnet.quiknode.pro/3d2117f57930154544c7eddf4bd5d4f6776048c3/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getFirstAvailableBlock"
        })
      })
      .then(response => response.json())
      .then(data => {
        const firstAvailableBlock = data.result;

        // Fetch recent blockhash
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
          .then(blockhashData => {
            const recentBlockhash = blockhashData.result.value.blockhash;

            // Display block information
            const blockInfo = `
              <h2>First Available Block: ${firstAvailableBlock}</h2>
              <p>Recent Blockhash: ${recentBlockhash}</p>
            `;
            solanaBlockExplorerArea.innerHTML = blockInfo;
          })
          .catch(error => {
            console.error('Error fetching blockhash data:', error);
            solanaBlockExplorerArea.innerHTML = "<p>Error loading blockhash data.</p>";
          });
      })
      .catch(error => {
        console.error('Error fetching block data:', error);
        solanaBlockExplorerArea.innerHTML = "<p>Error loading block data.</p>";
      });
  }
}

initializeSolanaBlockExplorer();
