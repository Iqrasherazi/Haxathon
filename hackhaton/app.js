// Newsletter Subscription
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for subscribing!");
});

// Signup Form Submission
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission refresh

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple validation
    if (username && email && password) {
      // Replace this section with Firebase authentication logic
      alert(`Signup successful!\nUsername: ${username}\nEmail: ${email}`);
    } else {
      alert("Please fill in all fields.");
    }
  });
}

// Login Functionality
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission refresh

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (email && password) {
      // Simulate successful login (replace with actual Firebase sign-in logic)
      alert(`Login Successful!\nEmail: ${email}`);
    } else {
      alert("Please fill in both email and password.");
    }
  });
}

// DOM Elements
const searchBar = document.getElementById("search-bar");
const blogForm = document.getElementById("blog-form");
const blogContainer = document.getElementById("blog-container");

// In-memory blog posts
let posts = []; // Each post will have { id, title, content }

// Add Post
blogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("blog-title").value.trim();
  const content = document.getElementById("blog-content").value.trim();

  if (title && content) {
    const newPost = { id: Date.now(), title, content };
    posts.push(newPost);
    displayPosts();
    blogForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Display Posts
const displayPosts = () => {
  blogContainer.innerHTML = ""; // Clear existing posts
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "blog-post";
    postElement.innerHTML = `
      <h4>${post.title}</h4>
      <p>${post.content}</p>
      <button onclick="editPost(${post.id})">Edit</button>
      <button onclick="deletePost(${post.id})">Delete</button>
    `;
    blogContainer.appendChild(postElement);
  });
};

// Edit Post
window.editPost = (id) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    const newTitle = prompt("Edit Title:", post.title);
    const newContent = prompt("Edit Content:", post.content);
    if (newTitle && newContent) {
      post.title = newTitle;
      post.content = newContent;
      displayPosts();
    }
  }
};

// Delete Post
window.deletePost = (id) => {
  if (confirm("Are you sure you want to delete this post?")) {
    posts = posts.filter((post) => post.id !== id);
    displayPosts();
  }
};

// Search Posts
searchBar.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const blogPosts = document.querySelectorAll(".blog-post");
  blogPosts.forEach((post) => {
    const title = post.querySelector("h4").innerText.toLowerCase();
    const content = post.querySelector("p").innerText.toLowerCase();
    if (title.includes(searchTerm) || content.includes(searchTerm)) {
      post.style.display = "block";
      highlightText(post, searchTerm);
    } else {
      post.style.display = "none";
    }
  });
});

// Highlight Search Text
const highlightText = (post, searchTerm) => {
  const regex = new RegExp(`(${searchTerm})`, "gi");
  const title = post.querySelector("h4");
  const content = post.querySelector("p");

  // Highlight matching text
  title.innerHTML = title.innerText.replace(regex, `<span class="highlight">$1</span>`);
  content.innerHTML = content.innerText.replace(regex, `<span class="highlight">$1</span>`);
};
