/* ============================================================
   main.js — minimal JS, no dependencies
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. CHECKLIST — click to toggle checked state
     (Pain section interactive checkboxes)
  ---------------------------------------------------------- */
  const checklistItems = document.querySelectorAll('.checklist li');
  checklistItems.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('checked');
    });
  });

  /* ----------------------------------------------------------
     2. TESTIMONIALS — show more button
  ---------------------------------------------------------- */
  const btnSeeMore  = document.getElementById('btnSeeMore');
  const seeMoreWrap = document.getElementById('seeMoreWrap');
  const hiddenCards = document.querySelectorAll('.testimonials__hidden');

  if (btnSeeMore) {
    btnSeeMore.addEventListener('click', function () {
      hiddenCards.forEach(function (card) {
        card.style.display = 'flex';
        card.style.flexDirection = 'column';
      });
      seeMoreWrap.style.display = 'none';
    });
  }

  /* ----------------------------------------------------------
     3. SMOOTH ANCHOR SCROLL (fallback for older browsers)
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

}); 