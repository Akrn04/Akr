document.getElementById('next').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    if (amount < 15) {
        alert('Amount must be at least 15');
    } else {
        alert('Proceeding to the next step');
    }
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.operation').forEach(btn => btn.style.backgroundColor = '#2a5298');
        button.style.backgroundColor = '#1e3c72';
    });
});