const restaurantMenu = [
  {
    id: 1,
    name: 'buttermilk pancakes',
    category: "breakfast",
    cost: 15.99,
    image: '../images/restaurant-menu/item-1.jpeg',
    desc: 'I\'m baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed '
  },
  {
    id: 2,
    name: "diner double",
    category: "lunch",
    cost: 13.99,
    image: '../images/restaurant-menu/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    name: "godzilla milkshake",
    category: "shakes",
    cost: 6.99,
    image: '../images/restaurant-menu/item-3.jpeg',
    desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    name: "country delight",
    category: "breakfast",
    cost: 20.99,
    image: '../images/restaurant-menu/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    name: "egg attack",
    category: "lunch",
    cost: 22.99,
    image: '../images/restaurant-menu/item-5.jpeg',
    desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    name: "oreo dream",
    category: "shakes",
    cost: 18.99,
    image: '../images/restaurant-menu/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    name: "bacon overflow",
    category: "breakfast",
    cost: 8.99,
    image: '../images/restaurant-menu/item-7.jpeg',
    desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    name: "american classic",
    category: "lunch",
    cost: 12.99,
    image: '../images/restaurant-menu/item-8.jpeg',
    desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    name: "quarantine buddy",
    category: "shakes",
    cost: 16.99,
    image: '../images/restaurant-menu/item-9.jpg',
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    name: "Steak Dinner",
    category: "dinner",
    cost: 34.99,
    image: '../images/restaurant-menu/item-10.jpeg',
    desc: `Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
]

const menuItems = document.querySelector('.menu__items')
const filterButtons = document.querySelector('.filter__buttons')

function displayMenuItem(menuItem) {
  let displayedMenu = menuItem.map( (item) => {
    return `<div class="menu__item item-menu">
                        <div class="item-menu__image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="item-menu__info">
                            <div class="item-menu__head">
                                <div class="item-menu__name">${item.name}</div>
                                <div class="item-menu__cost">$${item.cost}</div>
                            </div>
                            <div class="item-menu__desc">${item.desc}</div>
                        </div>
                    </div>`
  })

  displayedMenu = displayedMenu.join('')
  menuItems.innerHTML = displayedMenu
}

function displayFilterButtons() {
  const categories = restaurantMenu.reduce( (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category)
    }
    return values
  }, ['all'])

  let categoryButtons = categories.map((category) => {
    return `<button class="filter__btn" type="button"
                data-id="${category}">${category}
            </button>`
  })

  categoryButtons = categoryButtons.join('')
  filterButtons.innerHTML = categoryButtons
}

window.addEventListener('DOMContentLoaded', () => {
  displayMenuItem(restaurantMenu)
  
  displayFilterButtons()
})

filterButtons.addEventListener('click', (e) => {
  if (e.target.closest('.filter__btn')) {
    const currentCategory = e.target.dataset.id

    const filteredMenu = restaurantMenu.filter( menuItem => {
      if (menuItem.category === currentCategory) {
        return menuItem
      }
    })

    if (currentCategory === 'all') {
      displayMenuItem(restaurantMenu)
    } else {
      displayMenuItem(filteredMenu)
    }
    
  }
})














