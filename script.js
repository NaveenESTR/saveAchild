document.getElementById('addButton').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Thank you!';
    document.getElementById('response').style.color = '#4caf50';
  });
  
  document.getElementById('dontAddButton').addEventListener('click', function() {
    document.getElementById('response').textContent = 'Action not possible, try again.';
    document.getElementById('response').style.color = '#f44336';
  });
  