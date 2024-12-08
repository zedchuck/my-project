let btn = document.querySelectorAll('.pg-btn, .close, .login-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let btnWidth = btn.clientWidth;
        let btnHeight = btn.clientHeight;
        let transX = (x - btnWidth / 2);
        let transY = (y - btnHeight / 2);
        btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

        let mx = e.pageX - btn.offsetLeft;
        let my = e.pageY - btn.offsetTop;
        btn.style.setProperty('--x', mx + 'px');
        btn.style.setProperty('--y', my + 'px');
    })

    btn.addEventListener('mouseout', (e) => {
        btn.style.transform = '';
    })
})

// let btn1 = document.getElementById("nav-btn");

//     // let navPg = document.getElementById("navArea");

//     let nav = document.getElementById("nav");

//     let close1 = document.getElementById("close");

//     btn1.addEventListener("click", function(){
//       navPg.style.display = `flex`;
//       nav.style.display = 'none';

//     });

    // close1.addEventListener("click", function(){
    //   navPg.style.display = `none`;

    //   nav.style.display = `flex`;
    // });

// let cards = document.querySelectorAll('.card');
// // let stackArea = document.querySelector('.stack-area');
// cards.forEach(card => {
//     card.onmousemove =function(e){
//         let x = e.pageX - card.offsetLeft;
//         let y = e.pageY - card.offsetTop;

//         card.style.setProperty('--x', x + 'px');
//         card.style.setProperty('--y', y + 'px');
//     }

// })

// function rotatecards(){
//     let angle = 0
//     cards.forEach((card) =>{
//         card.style.transform = `translate(-50%,-50%) rotate(${angle}deg)`;
//         angle = angle + 10;
//     })
// }

// rotatecards();
// gsap
//     .fromTo(".nit", 1,{y: -100, }, {y: 0, stagger: {amount: 0.3,},ease: "power4.inOut",})

// document.addEventListener("DOMContentLoaded", function(){
//     let drawer = document.getElementById('nav-btn');
//     let close = document.getElementById('close');
//     let whots = document.getElementById('whots');

//     let tl = gsap.timeline({
//         paused: true,
//         reversed: true,
//         onStart: function() {
//             whots.style.pointerEvents = "all";
//         },
//         onReverseComplete: function() {
//             whots.style.pointerEvents = "none";
//         },
//     });

//     tl
//     .to(".nit", .3,{y: -100, stagger: {amount: 0.3,},ease: "power4.inOut",})
//     .from(".whots .whot", 1.5,{ y: 1000, stagger: { amount: 0.3,},ease: "power4.inOut",})
//     .from(".close", 0.5,{opacity: 0, delay: 1.5,},"<")
//     .from(".footer", 0.5,{opacity: 0,});

//     drawer.addEventListener("click", function (){
//         if (tl.reversed()){
//             tl.play();
//         } else {
//             tl.reverse();
//         }
//     });

//     close.addEventListener("click", () => {
//         tl.reverse();
//     });
// });




let animationInProgress = false;
let animationId ;

document.body.addEventListener("click", (e) => {
    const clickEffect = document.querySelector(".click-effect");
    // let clickEffect = document.getElementById("click-effect");

    if(animationInProgress){
        clearTimeout(animationId);
        clickEffect.classList.remove("effect")
        void clickEffect.offsetWidth;
    }
    
    clickEffect.style.top = e.clientY + "px";
    clickEffect.style.left = e.clientX + "px";
    clickEffect.classList.add("effect");
    animationInProgress = true;
    animationId = setTimeout(() => {
        clickEffect.classList.remove("effect") ;
        animationInProgress = false;
    }, 750); 
});

// let animationInPro1 = false;
// let animationId1 ;
// document.body.addEventListener("click", (e) => {
//     // const clickEffect1 = document.querySelector(".click-effect");
//     let clickEffect1 = document.getElementById("click-effect");

//     if(animationInProgress1){
//         clearTimeout(animationId1);
//         clickEffect1.classList.remove("effect")
//         void clickEffect1.offsetWidth;
//     }
    
//     clickEffect1.style.top = e.clientY + "px";
//     clickEffect1.style.left = e.clientX + "px";
//     clickEffect1.classList.add("effect");
//     animationInProgress1 = true;
//     animationId1 = setTimeout(() => {
//         clickEffect1.classList.remove("effect") ;
//         animationInProgress1 = false;
//     }, 750); 
// });









//remember to uncomment
// let beam = document.querySelector(".beam");
// document.addEventListener("mousemove",(event) =>{
//     let mouseY= event.clientY;
//     let rotationRange = 8;
//     let rotationAngle =

//     (mouseY / window.innerHeight) * rotationRange - rotationRange / 2;
//     beam.style.transform = `translate(0%, -52 %) rotate(${-rotationAngle}deg)`;
// });

function toggle(btn){
    let password = document.getElementById("pwd");
    if (input.type === "password") {
        input.type = "text";
    } else{
        input.type = "password";
    }
}

//tilt on hover for the ticket - replica
  VanillaTilt.init(document.querySelector(".ticpos"), {
    max: 20,
    speed: 2000,
  });


  //color mode - light - dark - normal

  //replica - body
  let body = document.querySelector('.body');

  //btn light - dark - norm
  let lightBtn =  document.getElementById('light-btn');
  let darkBtn =  document.getElementById('dark-btn');
  let normBtn =  document.getElementById('norm-btn');

  //mode light - dark - norm
  let lightMode = document.querySelector('.light');
  let darkMode = document.querySelector('.dark');
  let normMode = document.querySelector('.norm');

  //tickets - replica
//   let tickets = document.getElementById('ticket');
//   let tickets = document.querySelector('.ticket1');
  let tic1 = document.querySelector('.t1');
  let tic2 = document.querySelector('.t2');
  let tic3 = document.querySelector('.t3');
  let tic4 = document.querySelector('.t4');
  let tic5 = document.querySelector('.t5');

//toggle function for light mode
   lightBtn.addEventListener('click', function(){
    lightMode.style.width = '2px';
    lightMode.style.borderBottomLeftRadius = "100%";
    lightMode.style.padding = '900px';
    lightMode.style.zIndex = '-4';
    lightMode.style.backgroundColor = "#e3e3e3";
    body.style.backgroundColor = "#e3e3e3";

    //switches from the current button to the next button
    darkBtn.style.opacity = "1";
    lightBtn.style.display = "none";

    //change color of the ticket replica
    tic1.style.backgroundColor = "#A59781";
    tic2.style.backgroundColor = "#A59781";
    tic3.style.backgroundColor = "#A59781";
    tic4.style.backgroundColor = "#A59781";
    tic5.style.backgroundColor = "#A59781";

    //reverse for normmode 
    normMode.style.width = '0px';
    normMode.style.borderBottomLeftRadius = "0%";
    normMode.style.padding = '0px';
    normMode.style.backgroundColor = "transparent";

    //reverse for dark mode
    darkMode.style.width = '0px';
    darkMode.style.borderBottomLeftRadius = "0%";
    darkMode.style.padding = '0px';
    darkMode.style.backgroundColor = "transparent";
  })


//toggle function for dark mode
  darkBtn.addEventListener('click', function(){
    darkMode.style.width = '2px';
    darkMode.style.borderBottomLeftRadius = "100%";
    darkMode.style.padding = '900px';
    darkMode.style.zIndex ='-3';
    darkMode.style.backgroundColor = "#161623";
    body.style.backgroundColor = "#161623";

    //switches from the current button to the next button
    darkBtn.style.display = 'none';
    normBtn.style.opacity = '1';

    //change color of the ticket replica
    tic1.style.backgroundColor = "#F2EBD3";
    tic2.style.backgroundColor = "#F2EBD3";
    tic3.style.backgroundColor = "#F2EBD3";
    tic4.style.backgroundColor = "#F2EBD3";
    tic5.style.backgroundColor = "#F2EBD3";

    //reverse for light mode
    lightMode.style.width = '0px';
    lightMode.style.borderBottomLeftRadius = "0%";
    lightMode.style.padding = '0px';
    lightMode.style.backgroundColor = "transparent"; 

    //reverse for normmode 
    normMode.style.width = '0px';
    normMode.style.borderBottomLeftRadius = "0%";
    normMode.style.padding = '0px';
    normMode.style.backgroundColor = "transparent";
  })

//toogle function for norm mode 
  normBtn.addEventListener('click', function(){
    normMode.style.width = '2px';
    normMode.style.borderBottomLeftRadius = "100%";
    normMode.style.padding = '900px';
    normMode.style.zIndex = '-2';
    normMode.style.backgroundColor = "#666";
    body.style.backgroundColor = "#666";

    //switches from the current button to the next button
    lightBtn.style.opacity = '1';
    normBtn.style.display = "none";

    //change color of the ticket replica
    tic1.style.backgroundColor = "rgba(63, 59, 59, 0.8)";
    tic2.style.backgroundColor = "rgba(76, 114, 152, 0.8)";
    tic3.style.backgroundColor = "rgba(68, 141, 86, 0.8)";
    tic4.style.backgroundColor = "rgba(164, 164, 92, 0.8)";
    tic5.style.backgroundColor = "rgba(138, 86, 86, 0.8)";

    //reverse for dark mode 
    darkMode.style.width = '0px';
    darkMode.style.borderBottomLeftRadius = "0%";
    darkMode.style.padding = '0px';
    darkMode.style.backgroundColor = "transparent";
  
    //reverse for light mode 
    lightMode.style.width = '0px';
    lightMode.style.borderBottomLeftRadius = "0%";
    lightMode.style.padding = '0px';
    lightMode.style.backgroundColor = "transparent";
  })

  // sign in or sign up 
 let logBtn = document.querySelector('.login-btn');
 let logPage = document.querySelector('.logPage');
 let pgReverse = document.querySelector('.pgReverse');
 let logPgH = document.querySelector('.loginPageH');
 let logPg1 = document.querySelector('.logPage1');


 logBtn.addEventListener('click', function(){
  logPage.style.zIndex = '100';

    logPage.style.width = '2px';
    logPage.style.borderBottomLeftRadius = "100%";
    logPage.style.padding = '900px';
    logPage.style.zIndex = '50';
    //  logPg1.style.opacity = '1';
    // logPg1.style.transitionDelay = '2s';
    setTimeout(function(){
      logPg1.style.display = 'flex';
      logPg1.style.zIndex = '60';
      logPg1.style.opacity = '1';
    }, 2000); 
   

    logPgH.style.zIndex = '40';

    // logPage.style.backgroundColor = 'red';
    // pgReverse.style.opacity = "1";
    // pgReverse.style.zIndex = '50';  
    // logPage.classList.toggle('logPage1');
    // logPg1.style.height = '720px';
    // logPgH.classList.add('holder');
    // logPg1.style.display = 'flex';
  })

//  pgReverse.addEventListener('click', function(){
//   logPage.style.width = '2px';
//   logPage.style.borderBottomLeftRadius = "100%";
//   logPage.style.padding = '0px';
//   logPage.style.zIndex = '10';
//   logPage.style.backgroundColor = "#161623";
//   pgReverse.style.opacity = "0";
//   pgReverse.style.zIndex = '-1'; 
//   // logPage.classList.toggle('logPage1');
//   pgReverse.style.opacity = "0";
// })