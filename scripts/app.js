const filter_btns = document.querySelectorAll(".filter-btn");

const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;
    console.log(filterValue);

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});
// ckeckScroll(skills_wrap)

function ckeckScroll(elem) {
  let rect = elem.getBoundingClientRect();

  if (window.innerHeight >= rect.top + elem.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!ckeckScroll(skills_wrap)) return;

  skills_bars.forEach((skill) => {
    skill.style.width = skill.dataset.progress;
  });
}

function countUp() {
  if (!ckeckScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 10);
      }
    };

    setTimeout(updateCount, 400);
  });
}

const swiper = new Swiper(".swiper", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
