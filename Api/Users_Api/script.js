  fetch('https://fakestoreapi.com/users')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.getElementById('user-table');
        tableBody.innerHTML = '';

        data.forEach(user => {
          const row = `
            <tr>
              <td>${user.id}</td>
              <td>${user.name.firstname} ${user.name.lastname}</td>
              <td>${user.username}</td>
              <td>${user.email}</td>
              <td>${user.phone}</td>
              <td>${user.address.city}</td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });
      })
      .catch(error => console.error('Error fetching data:', error));