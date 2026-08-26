// UNO — Intranet
// Comportamiento compartido: filtros por pestañas (tabs) en Comunicados,
// Directorio y Manual de políticas.

document.addEventListener('DOMContentLoaded', function () {
  var groups = document.querySelectorAll('[data-filter-group]');

  groups.forEach(function (group) {
    var tabs = group.querySelectorAll('.tab');
    var targetSelector = group.getAttribute('data-filter-target');
    var items = document.querySelectorAll(targetSelector);

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');

        var value = tab.getAttribute('data-filter');

        items.forEach(function (item) {
          if (value === 'todos' || item.getAttribute('data-category') === value) {
            item.classList.remove('is-hidden');
          } else {
            item.classList.add('is-hidden');
          }
        });
      });
    });
  });
});
