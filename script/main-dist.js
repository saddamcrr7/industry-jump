"use strict";window.onload=function(){const e=document.querySelector(".page-header"),t=document.querySelector(".mobile-menu-toggle");t.addEventListener("click",()=>{e.classList.forEach(t=>{-1!==t.indexOf("page-header__mobile__open")?e.classList.remove("page-header__mobile__open"):e.classList.add("page-header__mobile__open")})});new Swiper(".block-hero__slider",{slidesPerView:"auto",spaceBetween:95,wrapperClass:"block-hero__slider-row",slideClass:"block-hero__slider-item",slideActiveClass:"block-hero__slider-item--active",loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".block-hero__slider-pagination",clickable:!0}}),new Swiper(".block-bugets__slider",{slidesPerView:"auto",spaceBetween:13,wrapperClass:"block-bugets__row",slideClass:"block-bugets__col",slideActiveClass:"block-bugets__col--active",loop:!0,loopFillGroupWithBlank:!0,breakpoints:{640:{spaceBetween:30}}});const c=document.querySelectorAll(".video-play-btn"),s=document.querySelector(".video-player-modal__close"),l=document.querySelector(".video-player-modal__container"),i=document.querySelector(".video-player-modal");c.forEach(e=>{e.addEventListener("click",()=>{!function(e){const t=document.createElement("iframe");t.src=e,i.classList.add("is-active"),l.appendChild(t)}(e.dataset.src)})}),s.addEventListener("click",()=>{i.classList.remove("is-active"),l.innerHTML=""}),document.querySelectorAll(".search-matching__select").forEach(e=>{const t=e.querySelector(".search-matching__select-main"),c=e.querySelector(".search-matching__select-text"),s=e.querySelectorAll(".search-matching__select-option");t.addEventListener("click",()=>{e.classList.add("is-active")}),s.forEach(t=>{t.addEventListener("click",()=>{e.classList.remove("is-active"),c.dataset.value=t.dataset.value,c.innerHTML=t.innerText})}),e.addEventListener("mouseleave",()=>{e.classList.remove("is-active")})});const a=document.querySelectorAll(".music-item");a.forEach(e=>{e.addEventListener("click",()=>{a.forEach(e=>e.classList.remove("is-active")),e.classList.add("is-active")})})};