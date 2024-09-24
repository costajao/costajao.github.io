// Function to open the schedule popup
function openSchedulePopup() {
  document.getElementById('schedule-popup').classList.add('active');
}

// Function to close the popup
function closeSchedulePopup() {
  document.getElementById('schedule-popup').classList.remove('active');
}

// Function to confirm the selected schedule
function confirmSchedule() {
  const selectedDate = document.getElementById('data').value;
  const selectedTime = document.getElementById('horario').value;
  
  if (selectedDate && selectedTime) {
    alert(`Agendamento confirmado para ${selectedDate} às ${selectedTime}`);
    closeSchedulePopup();
  } else {
    alert('Por favor, selecione uma data e um horário.');
  }
}
