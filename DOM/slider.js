const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const items = document.querySelector('#items');
const computedStyles = getComputedStyle(items);


rightBtn.addEventListener("click", e => {
   e.preventDefault();
   let currentRight = parseInt(computedStyles.right)

    if (currentRight < 500) {
   items.style.right =`${currentRight + 100}px`;
    }
});

leftBtn.addEventListener("click", e => {
   e.preventDefault();
   let currentRight = parseInt(computedStyles.right)

    if (currentRight > 0) {
   items.style.right =`${currentRight - 100}px`;
    }
});




// const minRight =0;
// const maxRight = 500;
// const step = 100;
// let currentRight= 0;

// itemsList.style.right = currentRight;

// right.addEventListener("click", e => {
//   e.preventDefault();

//   if (currentRight < maxRight) {
//     currentRight += step;
//     itemsList.style.right =`${currentRight}px`;
//   }
// })

// left.addEventListener("click", e => {
//   e.preventDefault();

//   if (currentRight > minRight) {
//     currentRight -= step;
//     itemsList.style.right =`${currentRight}px`;
//   }

// })
