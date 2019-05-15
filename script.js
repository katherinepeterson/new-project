const data = {
    customers: {
      Moe: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Larry: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Curly: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
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
        return `<div class='prizeCard'>${el}</div>`
    }).join('');
    console.log(html)
    document.getElementById('prizeList').innerHTML = html;
  }

  renderPrizeCards();

  const customers = Object.keys(data.customers);
  function renderCustomerCards() {
    const html = customers.map(function(el){
        return `<div class='customerCard'>${el}</div>`
    }).join('');
    console.log(html)
    document.getElementById('customerList').innerHTML = html;
  }

  renderCustomerCards();