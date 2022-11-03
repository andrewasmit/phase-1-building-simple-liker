// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// To Do
// 1. add event listener for clicks on the hearts
// 2. when clicked, invoke a 'like' function
// 3. 'Like' function should send request to server
//  if request is succesful, change the like,
//  if unsucessful, make the error appear on DOM and un-hide the error

// ________________________________________________________
const likeBtns = document.getElementsByClassName('like-glyph');
for (btn of likeBtns){
  btn.addEventListener('click', likeHandler);
}

function likeHandler(e){
  // console.log("LIKED!");
  const heart = e.target;
  // console.log(heart);
  mimicServerCall()
  .then(()=> {
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.className = 'activated-heart';
    } else {
      heart.innerText = EMPTY_HEART;
      heart.className = '';
    }
  })
  .catch((error)=>{
    let errorMsg = document.querySelector('#modal');
    errorMsg.className = '';
    errorMsg.innerText = error;
    setTimeout(()=> errorMsg.className= 'hidden', 3000);
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
