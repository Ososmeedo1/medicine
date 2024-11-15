let saturday = document.getElementById('saturday')
let sunday = document.getElementById('sunday')
let monday = document.getElementById('monday')
let tuesday = document.getElementById('tuesday')
let wednesday = document.getElementById('wednesday')
let thursday = document.getElementById('thursday')
let friday = document.getElementById('friday')
let reset = document.getElementById('reset');

let week = {
  sat: false,
  sun: false,
  mon: false,
  tues: false,
  wed: false,
  thur: false,
  fri: false
}

if (localStorage.getItem('medicine') != null) {
  check();
} else {
  localStorage.setItem('medicine', JSON.stringify(week))
}

function check() {
  let allDays = JSON.parse(localStorage.getItem('medicine'));
  allDays.sat ? saturday.classList.add('bg-success') : saturday.classList.remove('bg-success')
  allDays.sun ? sunday.classList.add('bg-success') : sunday.classList.remove('bg-success')
  allDays.mon ? monday.classList.add('bg-success') : monday.classList.remove('bg-success')
  allDays.tues ? tuesday.classList.add('bg-success') : tuesday.classList.remove('bg-success')
  allDays.wed ? wednesday.classList.add('bg-success') : wednesday.classList.remove('bg-success')
  allDays.thur ? thursday.classList.add('bg-success') : thursday.classList.remove('bg-success')
  allDays.fri ? friday.classList.add('bg-success') : friday.classList.remove('bg-success')
}



saturday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      saturday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.sat = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });
})

sunday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      sunday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.sun = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });


})

monday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      monday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.mon = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });


})

tuesday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      tuesday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.tues = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });


})

wednesday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      wednesday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.wed = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });


})

thursday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      thursday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.thur = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });


})

friday.addEventListener('click', function (e) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Signed",
        text: "The day has been selected",
        icon: "success"
      });
      friday.classList.add('bg-success')
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.fri = true;
      localStorage.setItem('medicine', JSON.stringify(allDays))
    }
  });


})

reset.addEventListener('click', function (e) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, reset it!",
    cancelButtonText: "No, cancel!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "Reseted!",
        text: "The days has been reseted",
        icon: "success"
      });
      let allDays = JSON.parse(localStorage.getItem('medicine'));
      allDays.sat = false;
      allDays.sun = false;
      allDays.mon = false;
      allDays.tues = false;
      allDays.wed = false;
      allDays.thur = false;
      allDays.fri = false;
      localStorage.setItem('medicine', JSON.stringify(allDays))
      check()
    } else if (

      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelled",
        text: "The days has not been reseted",
        icon: "error"
      });
    }
  });



})



