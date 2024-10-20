// customgithublist.js

function initializeCustomGithubList() {
    let customGithubListArea = document.getElementById('customGithubListArea');
  
    if (!customGithubListArea) {
      customGithubListArea = document.createElement('div');
      customGithubListArea.id = 'customGithubListArea';
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = 'GitHub File List';
  
      let container = document.getElementById('customGithubListContent') || document.getElementById('customContent');
      if (!container) {
        container = document.createElement('div');
        container.id = 'customGithubListContent';
        document.body.appendChild(container);
      }
  
      container.appendChild(titleElement);
      container.appendChild(customGithubListArea);
  
      // Fetch the GitHub tree data
      fetch('https://github.com/dogelana/svm/tree/064c8d79c4008cdcc81d1cf86df09958ce991268/scripts?recursive=1')
        .then(response => response.json())
        .then(data => {
          const fileList = data.tree.filter(item => item.type === 'blob' && item.path.endsWith('.js'));
          const listElement = document.createElement('ul');
          fileList.forEach(file => {
            const listItem = document.createElement('li');
            listItem.textContent = file.path; // Display only the file path
            listElement.appendChild(listItem);
          });
          customGithubListArea.appendChild(listElement);
        })
        .catch(error => {
          console.error('Error fetching GitHub tree data:', error);
          customGithubListArea.textContent = "Error loading GitHub tree data.";
        });
    }
  }
  
  initializeCustomGithubList();
