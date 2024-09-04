//fungsi validasi email
function validateEmail(){
  //ambil nilai dari input
  let email = document.getElementById("email").value;

  //regular expression untuk validasi email
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  //validasi email menggunakan regex
  if (emailPattern.test(email)){
    document.getElementById("result").textContent = "Email valid";
    document.getElementById("result").style.color = "green";
  }else{
    document.getElementById("result").textContent = "email tidak valid";
    document.getElementById("result").style.color = "red";
  }
}