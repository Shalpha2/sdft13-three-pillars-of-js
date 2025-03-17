/**
 * Three pillars of javascript:
 * 1. Manipulitating the DOM
 * 2. Handle Events
 * 3. Communicating with the server
 * 
 */

/**
 * Steps:
 * 1. Capture form data
 */


const form = document.querySelector("form#transaction-form")
form.addEventListener("submit", function(event){
    event.preventDefault() //preventing default form behaviour

    //defining a transaction
    const transaction = {
        id: 1,
        transactionType: event.target.type.value,
        amount: event.target.amount.value
    }

    const tr = document.createElement('tr')//creating the parent row of transation details
    
    //looping through the transaction details to create transaction cells
    for(key in transaction){
        const td = document.createElement("td")
        td.innerText = transaction[key]
        tr.appendChild(td) //
    }

    document.querySelector("tbody#transactions").appendChild(tr)
})
