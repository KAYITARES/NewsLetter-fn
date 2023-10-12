const categoryTable = document.querySelector(".category");
fetch("https://sapphire-buffalo-wear.cyclic.cloud/api/v1/category")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.data.map((category, index) => {
      categoryTable.innerHTML += `
        <tr>
        <td>${index + 1}</td>
        <td>${category.categoryName}</td>
        </tr>
        `;
    });
  });
