import React from 'react'
export default function Header() {
  return (
    <div className='header'>
      <span id='icon'><ion-icon name="menu-outline"></ion-icon></span>
      <ul>
        <li className='listAp buttonx'>
          <a hrefLang='#'>
            <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
            <span className='text'>Home</span>
          </a>
        </li>
        <li className='listAp buttonx {
 '>
          <a hrefLang='#'>
            <span className='icon'><ion-icon name="information-circle-outline"></ion-icon></span>
            <span className='text'>About</span>
          </a>
        </li>
        <li className='listAp buttonx {
'>
          <a hrefLang='#'>
            <span className='icon'><ion-icon name="people-outline"></ion-icon></span>
            <span className='text'>Contact</span>
          </a>
        </li>
        <li className='listAp buttonx
 '>
          <a hrefLang='#'>
            <span className='icon'><ion-icon name="code-download-outline"></ion-icon></span>
            <span className='text'>Download</span>
          </a>
        </li>
        <li className='listAp buttonx 
'>
          <a hrefLang='#'>
            <span className='icon'><ion-icon name="log-in-outline"></ion-icon></span>
            <span className='text'>Log_In</span>
          </a>
        </li>
        <li className='listAp buttonx searchx'>
          <a>  <span className='icon'><ion-icon name="search-outline"></ion-icon></span>
            <span className='inp'> <input type="search" placeholder="Search..." /></span>
            <span class="text">Search</span></a>
        </li>
      </ul>
    </div>
  
  )

  // let sidebar = document.querySelector(".sidebar");
  // let closeBtn = document.querySelector("#btn");
  // let searchBtn = document.querySelector(".bx-search");

  // closeBtn.addEventListener("click", ()=>{
  //   sidebar.classList.toggle("open");
  //   menuBtnChange();//calling the function(optional)
  // });

  // searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  //   sidebar.classList.toggle("open");
  //   menuBtnChange(); //calling the function(optional)
  // });

  // // following are the code to change sidebar button(optional)
  // function menuBtnChange() {
  //  if(sidebar.classList.contains("open")){
  //    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  //  }else {
  //    closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
  //  }
  // }

}
//   let icon = document.querySelector("#icon");
// let header = document.querySelector(".header")
// icon.onclick = function()
// {
//   header.classList.toggle("active");
