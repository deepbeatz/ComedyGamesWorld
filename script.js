const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show1');
    }
    else {
      entry.target.classList.remove('show1');
    }
  });
}); 
const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));
// ---------------------------------------------------------------
const observer1 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show2');
    }
    else {
      entry.target.classList.remove('show2');
    }
  });
}); 
const hiddenElements1 = document.querySelectorAll('.hidden2');
hiddenElements1.forEach((el) => observer1.observe(el));
// ---------------------------------------------------------------
const observer2 = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show1');
    }
    else {
      entry.target.classList.remove('show1');
    }
  });
}); 
const hiddenElements2 = document.querySelectorAll('.hidden3');
hiddenElements2.forEach((el) => observer2.observe(el));
// ---------------------------------------------------------------
// const observer3 = new IntersectionObserver ((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show1');
//     }
//     else {
//       entry.target.classList.remove('show1');
//     }
//   });
// }); 
// const hiddenElements3 = document.querySelectorAll('.hidden4');
// hiddenElements3.forEach((el) => observer3.observe(el));
// ---------------------------------------------------------------
let dropdown1= document.querySelector(".dropdown1");
let dropdown2= document.querySelector(".dropdown2");
document.querySelector(".login_button").addEventListener("mouseover", function(){
  dropdown1.classList.add("dropdown_show");
  dropdown2.classList.add("dropdown_show");
});
// let dropdown3= document.querySelector(".dropdown1");
// let dropdown4= document.querySelector(".dropdown2");
document.querySelector(".myBody").addEventListener("click", function(){
  dropdown1.classList.remove("dropdown_show");
  dropdown2.classList.remove("dropdown_show");
});
// ---------------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
  anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
  });
});
// ---------------------------------------------------------------
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
// ---------------------------------------------------------------
function sendEmail() {
  let m = document.getElementById('message').value;
  let e = document.getElementById('email').value;
  let n = document.getElementById('name').value;
	Email.send({
    // securityToken: "62a3808a-3046-449a-97c7-3d5a4515c144",
    Host: "smtp.elasticemail.com",
    Username : "rajdeepchowdhury318@gmail.com",
    Password : "6CE7614740842B8F015BAA5203474B3C5631",
    To : "rajdeepchowdhury318@gmail.com",
    From : e,
    Subject : "Message from ComedyGamesWorld User : "+n,
    Body : m,
    }).then(
      message => alert("mail sent successfully...")
	);
}
// ---------------------------------------------------------------
let searchGame = () => {
  let searchbox = document.getElementById("search-control").value.toUpperCase();
  let game = document.querySelector(".container_under_main-3");
  let game_item = document.querySelectorAll(".card-myedit");
  let game_name = game.getElementsByTagName("h2");
  document.querySelector(".container_under_main-1").style.display="none";
  document.querySelector(".container_under_main-2").style.display="none";
  document.querySelector(".container_under_main-4").style.display="none";
  document.querySelector(".contactUsHeading").style.display="none";
  document.querySelector(".class-made-for-selecting-this").style.display="none";
  document.querySelector(".main_container").style.height="auto";
  document.querySelector(".not_available_msg").style.display="none";
  document.querySelector(".container_under_main-3").style.paddingTop="90px";
  document.querySelector(".container_under_main-3").classList.add("show-up-game-on-search");
  window.scrollTo(0, 0);
  document.querySelector(".myBody").addEventListener("click", function(){
    document.querySelector(".container_under_main-1").style.display="";
    document.querySelector(".container_under_main-2").style.display="";
    document.querySelector(".container_under_main-4").style.display="";
    document.querySelector(".contactUsHeading").style.display="";
    document.querySelector(".class-made-for-selecting-this").style.display="";
    document.querySelector(".main_container").style.height="520vh";
    document.querySelector(".container_under_main-3").style.paddingTop="0px";
    document.querySelector(".container_under_main-3").classList.remove("show-up-game-on-search");
  });
  var c=0;
  for (var i = 0; i < game_name.length; i++) {
    let match = game_item[i].getElementsByTagName("h2")[0];
    if (match){
      let textvalue = match.textContent || match.innerHTML;
      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        game_item[i].style.display = "";
        // game_item[i].classList.add("show-up-game-on-search");
      }
      else {
        game_item[i].style.display = "none";
        c=c+1;
        if(c==9){
          document.querySelector(".not_available_msg").style.display="block";
          document.querySelector(".main_container").style.height="57vh";
        }
      }
    }
  }
};
// ---------------------------------------------------------------
