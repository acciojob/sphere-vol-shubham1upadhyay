function volume_sphere(event) {
  event.preventDefault(); // Add this line to prevent form submission

  const radius = document.getElementById("radius").value;
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  document.getElementById("volume").value = volume.toFixed(2);
}

window.onload = function() {
  document.getElementById('MyForm').addEventListener('submit', volume_sphere);
}