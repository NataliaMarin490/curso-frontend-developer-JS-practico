const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCarAside = document.querySelector('.product-detail');
const cardsCointainer = document.querySelector('.cards-container');

const toggleDesktopMenu = () => {
  const isShoppingCarOpen = shoppingCarAside.classList.contains('show-product-detail');

  if (isShoppingCarOpen) shoppingCarAside.classList.remove('show-product-detail');
  desktopMenu.classList.toggle('show-desktop-menu');
}

const toggleMobileMenu = () => {
  const isShoppingCarOpen = shoppingCarAside.classList.contains('show-product-detail');
  const isDesktopMenuOpen = desktopMenu.classList.contains('show-desktop-menu');

  if (isShoppingCarOpen) shoppingCarAside.classList.remove('show-product-detail');
  if (isDesktopMenuOpen) desktopMenu.classList.remove('show-desktop-menu');
  burgerMenu.classList.toggle('show-burger-menu');
};

const toggleShoppingCar = () => {
  const isMobileMenuOpen = burgerMenu.classList.contains('show-burger-menu');
  const isDesktopMenuOpen = desktopMenu.classList.contains('show-desktop-menu');

  if (isMobileMenuOpen) burgerMenu.classList.remove('show-burger-menu');
  if (isDesktopMenuOpen) desktopMenu.classList.remove('show-desktop-menu');
  shoppingCarAside.classList.toggle('show-product-detail');
};

const renderProducts = product => {
  product.forEach(item => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', item.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoContainer = document.createElement('div');
  
    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = '$' + item.price;
    const productInfoName = document.createElement('p');
    productInfoName.innerText = item.name;
  
    productInfoContainer.append(productInfoPrice, productInfoName);
  
    const productInfoFigure = document.createElement('figure');
    const productCartImg = document.createElement('img');
    productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productCartImg);
    productInfo.append(productInfoContainer, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsCointainer.append(productCard);
  });
};

emailMenu.addEventListener('click', toggleDesktopMenu);
mobileMenu.addEventListener('click', toggleMobileMenu);
shoppingCar.addEventListener('click', toggleShoppingCar);

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Car',
  price: 1000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computer',
  price: 900,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Nintendo Switch',
  price: 780,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Nintendo Switch',
  price: 780,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Nintendo Switch',
  price: 780,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);
