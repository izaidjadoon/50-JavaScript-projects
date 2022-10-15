//Here i'm making an arrey of multiple objects
let property = [
  {
    id: 1,
    category: 'plot',
    size: '1 kanal',
    price: 'Pkr 500000',
    location: 'islamabad',
    img: './imges/land1.jpeg" alt=""',
  },
  {
    id: 2,
    category: 'house',
    size: '1 kanal',
    bdh: '5',
    price: 'Pkr 800000',
    location: 'islamabad',
    img: './imges/house1.jpeg" alt=""',
  },
  {
    id: 3,
    category: 'plot',
    size: '1 kanal',
    price: 'Pkr 700000',
    location: 'peshawar',
    img: './imges/land1.jpeg" alt=""',
  },
  {
    id: 4,
    category: 'house',
    size: '1 kanal',
    bdh: '5',
    price: 'Pkr 750000',
    location: 'islamabad',
    img: './imges/house1.jpeg" alt=""',
  },
  {
    id: 5,
    category: 'plot',
    size: '10 marla',
    price: 'Pkr 300000',
    location: 'islamabad',
    img: './imges/land1.jpeg" alt=""',
  },
  {
    id: 6,
    category: 'house',
    size: '10 marla',
    bdh: '4',
    price: 'Pkr 430000',
    location: 'peshawar',
    img: './imges/house1.jpeg" alt=""',
  },
  {
    id: 7,
    category: 'plot',
    size: '7 marla',
    price: 'Pkr 330000',
    location: 'islamabad',
    img: './imges/land1.jpeg" alt=""',
  },
  {
    id: 8,
    category: 'house',
    size: '10 marla',
    bdh: '4',
    price: 'Pkr 510000',
    location: 'karachi',
    img: './imges/house1.jpeg" alt=""',
  },
  {
    id: 9,
    category: 'plot',
    size: '7 marla',
    bdh: '4',
    price: 'Pkr 550000',
    location: 'peshawar',
    img: './imges/land1.jpeg" alt=""',
  },
];

//im selection item info
let itemInfo = document.querySelector('.item-info');
//add eventListener on window so it will be load items .
window.addEventListener('DOMContentLoaded', () => {
  /* NOTE......First we write code here and inject the whole content to html through javascript and than copy that code and past it in below function displaayPropertyItems() so i'm not deleting the coode from here just for my understanding*/

  //   let displayProperty = property.map((item) => {
  //     return ` <article class="item-info">
  //         <div class="header">
  //              <img class="img" src="${item.img}" alt="">
  //             <h4 class="catagory">Catagory: ${item.category}</h4>
  //             <h4 class="size">Size: ${item.size}</h4>
  //             <h4 class="location">Location: ${item.location}</h4>
  //             <h4 class="price">Price: ${item.price}</h4>
  //         </div>

  //     </article>`;
  //   });
  //   displayProperty = displayProperty.join('');
  //   itemInfo.innerHTML = displayProperty;

  //declearing the following function here
  displayPropertyItems(property);
});

function displayPropertyItems(propertyItems) {
  let displayProperty = propertyItems.map((item) => {
    return ` <article class="item-info">
        <div class="header">
             <img class="img" src="${item.img}" alt="">
            <h4 class="catagory">Catagory: ${item.category}</h4>
            <h4 class="size">Size: ${item.size}</h4>
            <h4 class="location">Location: ${item.location}</h4>
            <h4 class="price">Price: ${item.price}</h4>
        </div>

    </article>`;
  });
  displayProperty = displayProperty.join('');
  itemInfo.innerHTML = displayProperty;
}

//filter items
let filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let category = e.currentTarget.dataset.id;
    let size = e.currentTarget.dataset.size;
    let location = e.currentTarget.dataset.location;

    let propertyCategory = property.filter((propertyItem) => {
      // let filteredCategories = [];
      // for (let item of property) {
      //   if ((item = category && propertyItem.category === category)) {
      //     filteredCategories.push(propertyItem);
      //     return filteredCategories;
      //   }
      // }

      if (propertyItem.category === category) {
        return propertyItem;
      } else if (propertyItem.size === size) {
        return propertyItem;
      } else if (propertyItem.location === location) {
        return propertyItem;
      }
    });

    if (category === 'all') {
      displayPropertyItems(property);
    } else {
      displayPropertyItems(propertyCategory);
    }
  });
});
