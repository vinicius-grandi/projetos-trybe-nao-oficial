const numRegex = /[0-9]+(\.?)[0-9]{1,2}$/;

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSum(price) {
  const total = document.querySelector('.total-price');
  if (total) {
    const currentPrice = (total.innerText.match(numRegex))
    ? Number(total.innerText.match(numRegex)[0])
    : 0;
    total.innerText = `${(currentPrice + price).toFixed(2)}`;
    localStorage.setItem('price', currentPrice + price);
  } else {
    const totalPrice = document.createElement('span');
    document.querySelector('.cart').append(totalPrice);
    totalPrice.className = 'total-price';
    totalPrice.innerText = `${price}`;
    localStorage.setItem('price', price);
  }
}

function cartItemClickListener(event) {
  const minusPrice = Number(event.target.innerText.match(numRegex)[0]);
  event.target.remove();
  getSum(-minusPrice);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', (ev) => cartItemClickListener(ev));
  return li;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  section.appendChild(button);
  button.addEventListener('click', async () => {
    const fetchItem = await fetch(`https://api.mercadolibre.com/items/${sku}`);
    const item = await fetchItem.json();
    const li = createCartItemElement({ sku: item.id, name: item.title, salePrice: item.price });
    document.querySelector('.cart__items').appendChild(li);
    getSum(item.price);
  });
  return section;
}

async function renderizer(section) {
  const loading = document.createElement('p');
  loading.innerHTML = 'loading...';
  loading.className = 'loading';
  document.querySelector('.items').append(loading);
  const recoveryData = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  const jsonItems = await recoveryData.json();
  const items = jsonItems.results;
  items.forEach((computer) => {
    section.appendChild(createProductItemElement({
      sku: computer.id, name: computer.title, image: computer.thumbnail,
   })); 
  });
  loading.remove();
}

function removeAllItems() {
  document.querySelectorAll('li').forEach((ele) => ele.remove());
  document.querySelector('.total-price').innerText = '0';
}

window.onload = function onload() {
  const sectionItems = document.querySelector('.items');
  renderizer(sectionItems);
  const cartItems = document.querySelector('.cart__items');
  const observer = new MutationObserver(() => 
  localStorage.setItem('get-items', cartItems.innerHTML));
  observer.observe(cartItems, {
    childList: true,
  });
  if (localStorage.getItem('get-items')) {
    cartItems.innerHTML = localStorage.getItem('get-items');
    const storedPrice = Number(localStorage.getItem('price'));
    getSum(storedPrice);
  }
  const selectAllLi = document.querySelectorAll('li');
  selectAllLi.forEach((el) => 
    el.addEventListener('click', ((eve) => cartItemClickListener(eve))));
  document.querySelector('.empty-cart').addEventListener('click', removeAllItems);
};
