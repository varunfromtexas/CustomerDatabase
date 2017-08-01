for (var i=0; i<customers.results.length; i++){
  let customer = customers.results[i]

  let divPerson = document.createElement("div")
  divPerson.setAttribute("class", "person")

  let img = document.createElement("img")
  img.setAttribute("class", "image")
  img.src = customer.picture.medium

  let personName = document.createElement("label")
  personName.setAttribute("class", "personName")
  personName.innerHTML = customer.name.first + " " + customer.name.last

  let email = document.createElement("label")
  email.setAttribute("class", "email")
  email.innerHTML = customer.email

  let address = document.createElement("label")
  address.setAttribute("class", "address")
  address.innerHTML = ` ${customer.location.street} ${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`

  let phoneNum = document.createElement("label")
  address.setAttribute("class", "phoneNum")
  phoneNum.innerHTML = `${customer.phone}`

  let social = document.createElement("label")
  social.setAttribute("class", "social")
  social.innerHTML = `${customer.id.value}`


  divPerson.appendChild(img)
  divPerson.appendChild(personName)
  divPerson.appendChild(email)
  divPerson.appendChild(address)
  divPerson.appendChild(social)
  document.body.appendChild(divPerson)


  console.log("loop")
}
