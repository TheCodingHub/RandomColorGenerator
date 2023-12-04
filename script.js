function generateRandomColor(containerId) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const colorContainer = document.getElementById(containerId);

    if (colorContainer) {
      // Apply background color
      colorContainer.style.backgroundColor = randomColor;

      // Calculate luminance to determine text color
      const luminance = calculateLuminance(randomColor);
      const textColor = luminance > 0.5 ? 'black' : 'white';

      // Apply text color
      colorContainer.style.color = textColor;

      // Center the text within the div
      colorContainer.style.textAlign = 'center';

      // Display hex code inside the div
      colorContainer.textContent = randomColor;
    }
  }

  function calculateLuminance(hexColor) {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16) / 255;
    const g = parseInt(hexColor.slice(3, 5), 16) / 255;
    const b = parseInt(hexColor.slice(5, 7), 16) / 255;

    // Calculate luminance
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  function generateRandomColors() {
    for (let i = 1; i <= 5; i++) {
      generateRandomColor(`colorContainer${i}`);
    }
  }

  // Use DOMContentLoaded event to ensure the DOM is fully loaded before executing the script
  document.addEventListener('DOMContentLoaded', function() {
    // Initial color generation for each div
    generateRandomColors();

    // Add click event listener to the button
    document.getElementById('generateButton').addEventListener('click', generateRandomColors);
  });