const ConvenienceFEE=   99;
let bagItemObject;
onLoad()
function onLoad() {
    LoadbagItemObject()
    displayBagitem()
    displayBagSummary()
}

function LoadbagItemObject() {
    console.log(bagitems)
    bagItemObject = bagitems.map(itemId => {
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return items[i];
            }
        }
    })
    console.log(bagItemObject)
}

function displayBagitem() {
    let containerElement = document.querySelector(".bag-items-container");
    let innerHTML = ""
    bagItemObject.forEach(bagitems => {
        innerHTML += genrateItem(bagitems)
    });
    containerElement.innerHTML =innerHTML;
}
function displayBagSummary(){
    let BagSummaryElement = document.querySelector(".bag-summary");
    let totalItem = bagItemObject.length;
    let totalMrp = 0;
    let totalDiscount = 0;

    bagItemObject.forEach(bagitems=>{
        totalMrp+=bagitems.original_price
        totalDiscount+=bagitems.original_price - bagitems.current_price;
    })
    let finalPayment = totalMrp - totalDiscount + ConvenienceFEE;
    BagSummaryElement.innerHTML=`
    <div class="bag-details-container">
      <div class="price-header">PRICE DETAILS (${totalItem}) </div>
      <div class="price-item">
        <span class="price-item-tag">Total MRP</span>
        <span class="price-item-value">₹${totalMrp}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Discount on MRP</span>
        <span class="price-item-value priceDetail-base-discount">-${totalDiscount}</span>
      </div>
      <div class="price-item">
        <span class="price-item-tag">Convenience Fee</span>
        <span class="price-item-value">₹ 99</span>
      </div>
      <hr>
      <div class="price-footer">
        <span class="price-item-tag">Total Amount</span>
        <span class="price-item-value">₹ ${finalPayment}</span>
      </div>
    </div>
    <button class="btn-place-order">
      <div class="css-xjhrni">PLACE ORDER</div>
    </button> `
}

function removeFromBag(itemId){
    bagitems = bagitems.filter(bagItemId => bagItemId != itemId)
    localStorage.setItem('bagItem' , JSON.stringify(bagitems));
    /// eh dobara dobara ta print krwaya krde taki jad acc  kuch remove hona tad oh sirf remove na hove pura UI reprit hove page pr jide nal error chances low ho jande
    LoadbagItemObject();
    DisplayBagicon();
    displayBagitem();
    displayBagSummary();
}
function genrateItem(item) {
    return `  <div class="bag-item-container">
        <div class="item-left-part">
        <img class="bag-item-img" src="${item.image}">
        </div>
        <div class="item-right-part">
        <div class="company">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="current-price">Rs${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount-percentage">(${item.discount_percentage} OFF)</span>
        </div>
        <div class="return-period">
            <span class="return-period-days">${item.return_period}</span> return available
        </div>
        <div class="delivery-details">
            Delivery by
            <span class="delivery-details-days">${item.delivery_date}</span>
        </div>
        </div>

        <div class="remove-from-cart" onClick="removeFromBag (${item.id})" >X</div>
    </div>`

    }