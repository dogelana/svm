// solana_block_explorer.js

function initializeSolanaBlockExplorer() {
  let solanaBlockExplorerArea = document.getElementById('solanaBlockExplorerArea');

  if (!solanaBlockExplorerArea) {
    // ... (rest of the initialization code remains the same) ...

    // Fetch recent blockheight using QuickNode
    fetch('https://smart-fittest-valley.solana-mainnet.quiknode.pro/3d2117f57930154544c7eddf4bd5d4f6776048c3/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getBlockHeight"
        })
      })
      .then(response => response.json())
      .then(data => {
        const blockHeight = data.result;

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

            // Display blockheight and blockhash information
            const blockInfo = `
              <p>Recent Blockheight: ${blockHeight}</p>
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
        console.error('Error fetching blockheight data:', error);
        solanaBlockExplorerArea.innerHTML = "<p>Error loading blockheight data.</p>";
      });
  }
}

initializeSolanaBlockExplorer();
