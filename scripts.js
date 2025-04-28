document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Тут можна буде додати перевірку через Google Таблицю

  if (email === 'user@example.com' && password === 'password123') {
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.download-materials').style.display = 'block';
  } else {
    alert('Невірний логін чи пароль');
  }
});
