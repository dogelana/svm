function initializeCustomTweetX() {
    let customTweetXArea = document.getElementById('customTweetXArea');
  
    if (!customTweetXArea) {
      customTweetXArea = document.createElement('div');
      customTweetXArea.id = 'customTweetXArea';
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = 'Tweet/X Composer';
  
      let container = document.getElementById('customTweetXContent') || document.getElementById('customContent');
      if (!container) {
        container = document.createElement('div');
        container.id = 'customTweetXContent';
        document.body.appendChild(container);
      }
  
      container.appendChild(titleElement);
      container.appendChild(customTweetXArea);
  
      // Tweet/X composition logic
      const starters = [
        "Hey there, world! ",
        "What's up, everyone? ",
        "Dogelana here! "
      ];
      const middles = [
        "I am testing out my post creation app. ",
        "Just built a cool new widget for my terminal! ",
        "Check out this awesome Solana Virtual Machine! "
      ];
      const ends = [
        "#Solana #SVM #Widgets",
        "🚀🌕",
        "🐶💻"
      ];
  
      const composeButton = document.createElement('button');
      composeButton.textContent = 'Compose Tweet/X';
      customTweetXArea.appendChild(composeButton);
  
      composeButton.addEventListener('click', () => {
        const starter = starters[Math.floor(Math.random() * starters.length)];
        const middle = middles[Math.floor(Math.random() * middles.length)];
        const end = ends[Math.floor(Math.random() * ends.length)];
  
        const tweetText = starter + middle + end;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank');
      });
    }
  }
  
  initializeCustomTweetX();
