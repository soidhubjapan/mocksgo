const postsDiv = document.getElementById("posts");
const textArea = document.getElementById("text");
const postBtn = document.getElementById("postBtn");

function loadPosts() {
  postsDiv.innerHTML = "";
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${p.text}</p><small>${p.time}</small><hr>`;
    postsDiv.prepend(div);
  });
}

postBtn.onclick = () => {
  const text = textArea.value.trim();
  if (!text) return;

  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.push({
    text: text,
    time: new Date().toLocaleString()
  });
  localStorage.setItem("posts", JSON.stringify(posts));

  textArea.value = "";
  loadPosts();
};

loadPosts();
