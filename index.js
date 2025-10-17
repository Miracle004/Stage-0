    function updateTime() {
      const timeElement = document.getElementById('current-time');
      const currentTime = Date.now();
      timeElement.textContent = currentTime;
    }
    
    updateTime();

    // Update the time every second
    setInterval(updateTime, 1000);