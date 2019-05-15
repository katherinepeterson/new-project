const data = {
    customers: {
      Moe: {
        Foo: 1,
        Bar: 0,
        Bazz: 0
      },
      Larry: {
        Foo: 0,
        Bar: 4,
        Bazz: 0
      },
      Curly: {
        Foo: 0,
        Bar: 0,
        Bazz: 7
      }
    },
    prizes: {
      Foo: 1,
      Bar: 3,
      Bazz: 5
    }
  };

  const prizes = Object.keys(data.prizes);
  function renderPrizeCards() {
    const html = prizes.map(function(el){
        return `<div class='prizeCard'><h3>${el}</h3><div>${data.prizes[el]}</div></div>`
    }).join('');
    document.getElementById('prizeList').innerHTML = html;
  }

  renderPrizeCards();

  const customers2 = Object.keys(data.customers);
  function renderCustomerCards() {
    const html = customers2.map(function(el, i){
        return `<div class='customerCard'><h3>${el}</h3><ul class='${i}'>${prizes.map(function(el, j){return `<li><button id='${j}' class='minus'>-</button><div class='button-text' id='${j}'>${el}</div><button id='${j}'  class='plus'>+</button></li>`}).join('')}</ul></div>`;
    }).join('');
    document.getElementById('customerList').innerHTML = html;
    Array.from(document.getElementsByClassName('button-text')).forEach(function(el, i){
        const prizeNum = el.id;
        el.innerHTML += ` ${data.customers[customers2[el.parentNode.parentNode.className]][prizes[prizeNum]]}`
    })
    
  }

  renderCustomerCards();


// customerCards = Array.from(document.getElementsByClassName('customerCard'))
    customerCards = document.getElementById('customerList')

    customerCards.addEventListener('click', function(ev){
        let prizeCount = data.customers[customers2[ev.target.parentNode.parentNode.className]][prizes[ev.target.id]];
        let inventoryLevel = data.prizes[prizes[ev.target.id]]
        if (ev.target.tagName === 'BUTTON') {
            if (ev.target.className === 'plus' && inventoryLevel > 0) {
                console.log('click')
                prizeCount += 1;
                inventoryLevel -= 1;
                
            } else if (ev.target.className === 'minus' && prizeCount > 0){
                console.log('click')
                prizeCount -= 1;
                inventoryLevel += 1;
                
            }
        }
        data.customers[customers2[ev.target.parentNode.parentNode.className]][prizes[ev.target.id]] = prizeCount;
        data.prizes[prizes[ev.target.id]] = inventoryLevel;
        renderCustomerCards();
        renderPrizeCards();
    });
    

// customerCards.forEach(function(el, i){
//     el.addEventListener('click', function(ev){
//         if (ev.target.tagName === 'BUTTON') {
//             if (ev.target.className === 'plus') {
//                 console.log('click')
//                 data.customers[customers2[ev.target.parentNode.parentNode.className]][prizes[0]] += 1;
//                 renderCustomerCards();
//                 renderPrizeCards();
//             } else if (ev.target.className === 'minus'){
//                 console.log('click')
//                 renderCustomerCards();
//                 renderPrizeCards();
//             }
//         }
//     });
    
// })


