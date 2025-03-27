const ac = document.querySelectorAll("button");
ac.forEach((x) => {
  x.onclick = () => console.log(x.textContent);
});
