const cities = [
    {city: "Franca", state: "São Paulo"},
    {city: "São Paulo", state: "São Paulo"},
    {city: "Cassia", state: "Minas Gerais"},
    {city: "Salvador", state: "Bahia"},
]
const listing = document.querySelector("ul")

cities.forEach(function(list){
    const a = 1
    if (a==1){
        listing.li = "Hello"
    }else{
        listing.append(<li>list.city - list.state</li>)
    }
    a++
    console.log(list.city + "- " + list.state)
})
console.log("It's Working")
