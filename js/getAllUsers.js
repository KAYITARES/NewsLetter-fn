const token = window.localStorage.getItem("token");
const table = document.querySelector(".tableusers");

fetch("https://sapphire-buffalo-wear.cyclic.cloud//api/v1/user", {
  headers: {
    "x-auth-token": token,
  },
})
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    data.data.map((user, index) => {
      table.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        </tr>
        `;
    });
  });
