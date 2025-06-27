<script>
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t + " ";
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => { tasks.splice(i,1); localStorage.setItem("tasks", JSON.stringify(tasks)); renderTasks(); };
    li.appendChild(btn);
    list.appendChild(li);
  });
}
document.getElementById("addBtn").addEventListener("click", () => {
  const value = document.getElementById("taskInput").value.trim();
  if(value){ tasks.push(value); localStorage.setItem("tasks", JSON.stringify(tasks)); renderTasks(); document.getElementById("taskInput").value = ""; }
});



renderTasks();

// PRODUCT LISTING
const products = [
  { name: "Smartphone", category: "electronics", price: 500, rating: 4.5 },
  { name: "Jeans", category: "clothing", price: 40, rating: 4.1 },
  { name: "Headphones", category: "electronics", price: 100, rating: 4.7 },
];

function renderProducts(data) {
  const container = document.getElementById("productList");
  container.innerHTML = ""; // Clear existing contents
  data.forEach((product) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.appendChild(div);
  });
}

function filterAndSort() {
  const category = document.getElementById("categoryFilter").value;
  const sortOption = document.getElementById("sortOption").value;

  let result = [...products];
  
  // Filter by category
  if (category !== "all") {
    result = result.filter((p) => p.category === category);
  }

  // Sort results
  if (sortOption === "priceLow") {
    result.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHigh") {
    result.sort((a, b) => b.price - a.price);
  } else if (sortOption === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  // Render the final results
  renderProducts(result);
}

// Event Listeners
document.getElementById("categoryFilter").addEventListener("change", filterAndSort);
document.getElementById("sortOption").addEventListener("change", filterAndSort);

// Initial Render
renderProducts(products);

</script>
