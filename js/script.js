document.getElementById('year').textContent = new Date().getFullYear();

const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('i');

toggleBtn.onclick = () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    icon.classList.replace('fa-moon','fa-sun');
  } else {
    icon.classList.replace('fa-sun','fa-moon');
  }
};

// SCROLL REVEAL
const revealElements = document.querySelectorAll('[data-reveal]');
const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 60){ el.classList.add('revealed'); }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// contact form Control
 const form = document.getElementById("contactForm");
  const result = document.getElementById("result");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    result.innerHTML = "Sending...";

    const formData = new FormData(form);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      result.innerHTML = "<span class='text-success'>Message sent successfully!</span>";
      form.reset();
    } else {
      result.innerHTML = "<span class='text-danger'>Something went wrong. Try again.</span>";
    }
  });