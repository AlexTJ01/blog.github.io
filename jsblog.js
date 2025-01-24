{
    id: 1,
    title: "The Rise of AI in Tech",
    category: "tech",
    image: "https://via.placeholder.com/400x200",
    description: "A look into how AI is shaping the future of technology."
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations for 2024",
    category: "travel",
    image: "https://via.placeholder.com/400x200",
    description: "Explore the best places to visit this year."
  },
  {
    id: 3,
    title: "Minimalist Lifestyle: A Beginner's Guide",
    category: "lifestyle",
    image: "https://via.placeholder.com/400x200",
    description: "Tips to embrace simplicity and live better."
  },
  {
    id: 4,
    title: "Web Development Trends in 2024",
    category: "tech",
    image: "https://via.placeholder.com/400x200",
    description: "Stay updated with the latest web development trends."
  }
];

// Load blog posts dynamically
const blogPostsContainer = document.getElementById("blogPosts");
const searchBar = document.getElementById("searchBar");
const categoryFilter = document.getElementById("categoryFilter");

function displayPosts(posts) {
  blogPostsContainer.innerHTML = posts
    .map(post => {
      return `
        <article class="blog-post">
          <img src="${post.image}" alt="${post.title}">
          <div class="content">
            <h2>${post.title}</h2>
            <p>${post.description}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

// Initial load
displayPosts(blogPosts);

// Search functionality
searchBar.addEventListener("input", () => {
  const query = searchBar.value.toLowerCase();
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(query)
  );
  displayPosts(filteredPosts);
});

// Filter by category
categoryFilter.addEventListener("change", () => {
  const category = categoryFilter.value;
  const filteredPosts =
    category === "all"
      ? blogPosts
      : blogPosts.filter(post => post.category === category);
  displayPosts(filteredPosts);
});
}


