// panggil navbar
const navBar = document.getElementById("navbar");

function scroll() {
    let calc = window.scrollY; // mendapatkan posisi scroll dari atas ke bawah
    if (calc > 0) { // jika posisi scroll lebih dari 0 pixel
        navBar.classList.replace("bg-white", "bg-transparent");
    } else if (calc <= 0) { // jika posisi scroll sama dengan 0 pixel
        navBar.classList.replace("bg-transparent", "bg-white"); // ganti background navbar
    }
  }

  //panggil saat inisialisasi
scroll();

// panggil saat discroll
window.onscroll = () => { // jika tidak work untuk arrow function, coba pakai function biasa
  scroll();
};

function daftar() {
  var nama = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var no =  document.getElementById("no_hp").value;

  var newData = {
    Username: nama,
    Email: email,
    Password: pass,
    No_hp: no,
  };

  if (localStorage.getItem("Database_user") == null) {
    localStorage.setItem("Database_user", "[]");
  }

  var oldDataUser = JSON.parse(localStorage.getItem("Database_user"));
  oldDataUser.push(newData);

  localStorage.setItem("Database_user", JSON.stringify(oldDataUser));
}

