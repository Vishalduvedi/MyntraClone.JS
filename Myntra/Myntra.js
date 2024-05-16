// acc ede ch kita ki phla ik item bna leya html nale css nal te fr oh data ethe ck kai pata , koi changes ni ane ede nal ede nal sano help milni multiples of data items bnane ch , ethe object ch store kita ba acc jine thlee js ch likhi ja re appa


// let item = {
// item_image:"item-image",
// company_name : 'Carlton London',
// item_name:"Dimonds jewellery items",
// current_price:420000,
// original_price:1000000,
// discount:42,
// rating:{
//     stars:4.5,
//     reviews :14,
// },
// }

let bagitems ;//  let bagitems=[] eda kam hai ki appa kuch bhi bag  ch add krna ta oh add krne vaste phla kuch khali ta rakhna hi paina jide chadd krwana , jad kuch khali jagah hoyu gi tahi add hona jejagh hi ni honi ta add kida hone 

onload()

function onload() {
    let bagItemstr = localStorage.getItem('bagItem'); /// get item al nam samehona chahida set item nal
    bagitems = bagItemstr ? JSON.parse(bagItemstr):[]; /// bagitems ch check kita ki jo bagItemstr ch  agr data hai  store hoya ba ta print krwa do nhi ta khali arrray ta rakh hi dita ba .
    DisplayBagicon()
    displayItems()

}

function addtoBag(itemId) {
    bagitems.push(itemId)
    localStorage.setItem('bagItem',JSON.stringify(bagitems)) // eh bala naam
    DisplayBagicon()
}

function DisplayBagicon() {
    let bagItemCount = document.querySelector(".bagItemCount")
    if (bagitems.length > 0) {
        bagItemCount.style.visibility = "visible"

        bagItemCount.innerHTML = bagitems.length;

    } else {
        bagItemCount.style.visibility = "hidden"
    }
}
// ethe eh hoya krda ki bagcount hai jo ude innerhtml ch bagitem.length kr rhe jide nal eh ho reha ki jini bar add to bag click kr re une number show kr reha oh upr bagitem upr bnaya ba array jide ch push lgakai item push  kr re appa sariya

displayItems()
function displayItems() {
    let itemsContainerElement = document.querySelector(".items-container");
    if(!itemsContainerElement){ //ethe kya hoya ki jad acc mytra html c h bag html payi tad eh dono kathi load honi shuru ho gi jide krke uno eh display item ni mileya ta acc ethe ehi lgaya krde ki agr display item hai ta theek hai nhi ta chup chap ter kol jo hai oh return kr de sano  koi errror na through na kr ,,, acc eno optional bnata chle ya na chle
        return;
    }
    let innerhtml = "";
    items.forEach(item => {
        //is hisse nal code bneya genric
        innerhtml +=
            `<div class="item-container">
    <img src="${item.image} "style="height:200px;width:230px; " alt="${item.item_name}" "class=item-image"  >
    <div class="rating">
    ${item.rating.stars}⭐  | ${item.rating.count}
    </div>
    <div class= "item.company">${item.company}</div>
    <div class="item-name"> ${item.item_name}</div>
    <div class="pricing">
        <span class="current-price">RS ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">( ${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-bag"  onClick="addtoBag(${item.id})" >Add to bag</button>
    </div>`
        itemsContainerElement.innerHTML = innerhtml;
    })
}



