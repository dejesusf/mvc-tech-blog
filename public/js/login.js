document.querySelector("#loginForm").addEventListener("submit",e=>{
  e.preventDefault();
  const loginObj = {
      user:document.querySelector("#login").value,
      password:document.querySelector("#loginPassword").value
  }
  console.log(loginObj)
  fetch("/api/users/login",{
      method:"POST",
      body:JSON.stringify(loginObj),
      headers:{
          "Content-Type":"application/json"
      }
  }).then(res=>{
      if(res.ok){
         location.href="/profile"
      } else {
          alert("Username/password is incorrect! Try again.")
      }
  })
})