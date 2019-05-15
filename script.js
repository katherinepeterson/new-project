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
        return `<div class='customerCard'><h3>${el}</h3><ul class='${i}'>${prizes.map(function(el, j){return `<li><button class='minus'>-</button><div class='button-text' id='${j}'>${el}</div><button class='+'>+</button></li>`}).join('')}</ul></div>`;
    }).join('');
    document.getElementById('customerList').innerHTML = html;
    Array.from(document.getElementsByClassName('button-text')).forEach(function(el, i){
        const prizeNum = el.id;
        el.innerHTML += ` ${data.customers[customers2[el.parentNode.parentNode.className]][prizes[prizeNum]]}`
        console.log(customers2[el.parentNode.parentNode.className])
        console.log(data.customers[customers2[el.parentNode.parentNode.className]][prizes[prizeNum]])
    })
    
  }

  renderCustomerCards();

  