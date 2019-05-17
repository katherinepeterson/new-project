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
/* 
Indentation should be one to the left from line 2 on.
*/
  const prizes = Object.keys(data.prizes);
  function renderPrizeCards() {
    const html = prizes.map(function(el){
        return `<div class='prizeCard'><h3>${el}</h3><div>${data.prizes[el]}</div></div>`
    }).join('');
    document.getElementById('prizeList').innerHTML = html;
  }
// Good remembering to render before doing anything!
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

// Don't forget to keep using semicolons!  You've used them most everywhere else!
    customerCards = document.getElementById('customerList')
  /* 
  Stellar! Good job setting up your single event listener, then filtering further on the button and the plus/minus!
  */
    customerCards.addEventListener('click', function(ev){
      /* 
      Indentation is off here, in the function and right outside.  Just remember to keep it consistent!
      */
        // This is a bit comlex, perhaps break these out into variables of their own so it's easier to read?  But your code is short, in number of lines!
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
    




