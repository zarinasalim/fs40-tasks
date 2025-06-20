const data = [ {
        "name": "Bitcoin",
        "ticker": "BTC",
        "value": "9685",
        "change": "2.83%"
    },
    {
        "name": "Ethereum",
        "ticker": "ETH",
        "value": "210.5",
        "change": "6.17%"
    },
    {
        "name": "Ripple",
        "ticker": "XRP",
        "value": "0.2812",
        "change": "2.47%"
    },
    {
        "name": "Bitcoin Cash",
        "ticker": "BCH",
        "value": "441.4",
        "change": "5.01%"
    },
    {
        "name": "Bitcoin SV",
        "ticker": "BSV",
        "value": "303.17",
        "change": "5.53%"
    },
    {
        "name": "Litecoin",
        "ticker": "LTC",
        "value": "74.935",
        "change": "4.25%"
    },
    {
        "name": "Tether",
        "ticker": "USDT",
        "value": "0.9994",
        "change": "-1.7%"
    },
    {
        "name": "EOS",
        "ticker": "EOS",
        "value": "4.6161",
        "change": "3.15%"
    },
    {
        "name": "Binance Coin",
        "ticker": "BNB",
        "value": "19.824",
        "change": "-3.82%"
    },
    {
        "name": "Cardano",
        "ticker": "ADA",
        "value": "0.060389",
        "change": "2.93%"
    },
    {
        "name": "Tezos",
        "ticker": "XTZ",
        "value": "2.1247",
        "change": "6.12%"
    },
    {
        "name": "Ethereum Classic",
        "ticker": "ETC",
        "value": "12.5988",
        "change": "4.09%"
    },
    {
        "name": "Stellar",
        "ticker": "XLM",
        "value": "0.07034",
        "change": "-4.10%"
    },
    {
        "name": "Monero",
        "ticker": "XMR",
        "value": "79.523",
        "change": "3.45%"
    },
    {
        "name": "TRON",
        "ticker": "TRX",
        "value": "0.020881",
        "change": "5.21%"
    }];

const table = document.getElementById("table");

 
    table.style.borderCollapse = "collapse";
    table.style.width = "400px";
    table.style.margin = "20px auto";
    table.style.fontFamily = "sans-serif";


    const headerRow = table.querySelector("thead tr");
    headerRow.style.backgroundColor = "purple";
    headerRow.style.color = "white";

   
    headerRow.querySelectorAll("th").forEach(th => {
      th.style.border = "1px solid #333";
      th.style.padding = "6px 10px";
      th.style.textAlign = "center";
    });

    const tbody = table.querySelector("tbody");

    data.forEach((item, index) => {
      const row = document.createElement("tr");

     
      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;

      const tickerCell = document.createElement("td");
      tickerCell.textContent = item.ticker;

      const valueCell = document.createElement("td");
      valueCell.textContent = item.value;

      const changeCell = document.createElement("td");
      changeCell.textContent = item.change;

      if ([2, 6, 10].includes(index)) {
        changeCell.style.color = "red";
      }

      [nameCell, tickerCell, valueCell, changeCell].forEach(cell => {
        cell.style.border = "1px solid #333";
        cell.style.padding = "6px 10px";
        cell.style.textAlign = "center";
      });

      row.appendChild(nameCell);
      row.appendChild(tickerCell);
      row.appendChild(valueCell);
      row.appendChild(changeCell);

      tbody.appendChild(row);
    });