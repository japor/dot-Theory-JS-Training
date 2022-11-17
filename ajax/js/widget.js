$(document).ready(function () {

  // Vanilla version.
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
       var employees = JSON.parse(xhr.responseText);
       var statusHTML = '<ul class="bulleted">';
       employees.forEach(function(employee){
        if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
        } else {
          statusHTML +='<li class="out">';
        }
        statusHTML += employee.name + '</li>';
       });
       statusHTML += '</ul>';
       document.querySelector("#employeeList").innerHTML = statusHTML;
    }
  };
  xhr.open('GET', '../data/employees.json');
  xhr.send();

  // Vanilla version.
  var roomXhr = new XMLHttpRequest();
  roomXhr.onreadystatechange = function() {
    if (roomXhr.readyState === 4 && roomXhr.status === 200) {
       var rooms = JSON.parse(roomXhr.responseText);
       var statusHTML = '<ul class="rooms">';
       rooms.forEach(function(room){
        if (room.available === true) {
          statusHTML +='<li class="empty">';
        } else {
          statusHTML +='<li class="full">';
        }
        statusHTML += room.room + '</li>';
       });
       statusHTML += '</ul>';
       document.querySelector("#roomList").innerHTML = statusHTML;
    }
  };
  roomXhr.open('GET', '../data/rooms.json');
  roomXhr.send();

  // Jquery Version.
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); 
  
  $.getJSON('../data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, room) {
      if (room.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += room.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  });
});
