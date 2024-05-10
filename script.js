function checkEmail (event) {
  const e1 = this.email.value;
  const e2 = this.emailconfirm.value;
  //Email Regex from //stackoverflow.com/a/46181/383904
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const isEmail = re.test( e1 );
  const isMatch = e1 === e2;
  if( !isEmail ){
    event.preventDefault();
    alert('Invalid email address');
  }
  else if ( !isMatch ){
    event.preventDefault();
    alert("Those emails don't match!");
  }
}

 document.querySelector("#contact").addEventListener("submit", checkEmail);