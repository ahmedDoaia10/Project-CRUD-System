
var ProductNameInput = document.getElementById("ProductName")
var ProductCategoryInput = document.getElementById("ProductCategory")
var ProductPriceInput = document.getElementById("ProductPrice")
var ProductDescriptionInput = document.getElementById("ProductDescription")


var ProductDatabase = JSON.parse(localStorage.getItem('products')) || []
DisplayData()




function GetInputValue() {

    var ProductObject = {
        name: ProductNameInput.value,
        category: ProductCategoryInput.value,
        Price: ProductPriceInput.value,
        imgUrl: "img/cute1.jpg",
        description: ProductDescriptionInput.value,
    }

    ProductDatabase.push(ProductObject)


    localStorage.setItem('products', JSON.stringify(ProductDatabase))


    DisplayData()

    clearForm()



}



function DisplayData() {

    var cartona = ""

    for (var i = 0; i < ProductDatabase.length; i++) {

        cartona += `
        <div class="col-md-3    ">
        <div>
        <img src=${ProductDatabase[i].imgUrl} class="w-100  " alt="">
        <div class="shadow p-3 rounded-3    " >
        <h5>${ProductDatabase[i].name}</h5>
        <span class="text-danger">Price: ${ProductDatabase[i].Price} EGP</span>
        <p class="lead">${ProductDatabase[i].description}</p>
        <button onclick="DeleteItem(${i})" class="btn btn-danger ">Delete</button>
        <button  onclick="UpdateItem(${i})" class="btn btn-warning ">Update</button>
         </div>
        </div>
        </div>
    `
    }

    document.getElementById("demo").innerHTML = cartona

}

function clearForm() {
    ProductNameInput.value = ""
    ProductCategoryInput.value = ""
    ProductPriceInput.value = ""
    ProductDescriptionInput.value = ""
}



function DeleteItem(index) {
    ProductDatabase.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(ProductDatabase))
    DisplayData()

}




var itemIndex;

function UpdateItem(productIndex) {

    itemIndex = productIndex
    document.getElementById("saveBtn").style.display = "block"
    document.getElementById("addBtn").style.display = "none"


    ProductNameInput.value = ProductDatabase[productIndex].name
    ProductCategoryInput.value = ProductDatabase[productIndex].category
    ProductPriceInput.value = ProductDatabase[productIndex].Price
    ProductDescriptionInput.value = ProductDatabase[productIndex].description
}




function SaveProduct() {
    document.getElementById("saveBtn").style.display = "none"
    document.getElementById("addBtn").style.display = "block"
    ProductDatabase[itemIndex].name = ProductNameInput.value
    ProductDatabase[itemIndex].category = ProductCategoryInput.value
    ProductDatabase[itemIndex].Price = ProductPriceInput.value
    ProductDatabase[itemIndex].description = ProductDescriptionInput.value
    localStorage.setItem('products', JSON.stringify(ProductDatabase))
    DisplayData()
    clearForm()
}
