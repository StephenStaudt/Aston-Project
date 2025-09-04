document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-tab-target]');
  const panels = document.querySelectorAll('[data-tab-content]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // set active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // show correct panel
      const target = document.querySelector(tab.dataset.tabTarget);
      panels.forEach(p => p.classList.remove('active'));
      if (target) target.classList.add('active');
    });
  });
});