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
    fetch('https://api.github.com/repos/dogelana/svm/git/trees/f9d21397ffba7c5e140e54f3a73bfdd575a42a36?recursive=1')
      .then(response => response.json())
      .then(data => {
        const fileList = data.tree.filter(item => item.type === 'blob' && item.path.endsWith('.js'));
        const listElement = document.createElement('ul');
        fileList.forEach(file => {
          const listItem = document.createElement('li');

          // Extract filename from path (ignoring folders)
          const fileName = file.path.split('/').pop(); 

          // Create a "Load" button
          const loadButton = document.createElement('button');
          loadButton.textContent = 'Load';
          loadButton.addEventListener('click', () => {
            const inputCustomScript = document.getElementById('inputCustomScript');
            inputCustomScript.value = "github " + fileName; 
          });

          // Add the filename and the "Load" button to the list item
          listItem.innerHTML = fileName + " ";
          listItem.appendChild(loadButton);

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
