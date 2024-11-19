

    async function fetchLeagueData() {
      try {
        const response = await fetch('https://raw.githubusercontent.com/Eboxsl/Robo/refs/heads/main/robo.js');
        const data = await response.json();

        // Populate drop-down boxes with fetched league data
        Object.keys(data).forEach((key, index) => {
          const select = document.getElementById(`team${index + 1}`);
          if (select) {
            select.value = data[key]; // Set selected value
          }
        });
      } catch (error) {
        console.error("An error occurred while fetching league data:", error);
      }
    }

    function validateLeagues() {
      // Validation removed, allowing same leagues to be selected for different teams
    }
    
    
    
 
 
    
    
    
    
    
    
    
    
    

    // Fetch league data on load
    window.onload = fetchLeagueData;
