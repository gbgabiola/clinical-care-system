/*!
 * Start Bootstrap - SB Admin v7.0.2 (https://startbootstrap.com/template/sb-admin)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
 */

window.addEventListener('DOMContentLoaded', event => {
  // https://github.com/fiduswriter/Simple-DataTables/wiki
  const patientTable = document.getElementById('patientTable');
  if (patientTable) {
    new simpleDatatables.DataTable(patientTable);
  }

  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector('#sidebarToggle');
  if (sidebarToggle) {
    // Comment Below to remove persist sidebar toggle between refreshes
    if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
      document.body.classList.toggle('sb-sidenav-toggled');
    }

    sidebarToggle.addEventListener('click', event => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    });
  }

  // Select/Deselect checkboxes
  var checkbox = $('input[type="checkbox"]');
  $('#selectAll').click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    } else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $('#selectAll').prop('checked', false);
    }
  });
});
