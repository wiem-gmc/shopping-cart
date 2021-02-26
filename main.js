var total = Number(document.getElementById("total").innerText);

// add item

var plusBtns = document.querySelectorAll(".plus");
for (let btn of plusBtns) {
  btn.addEventListener("click", function () {
    // var c = document.product_item.child[1];
    // console.log(c);

    // console.log(btn.getAttribute("name"));
    var ttt= Number(document.querySelector("span").innerHTML);
    console.log(ttt);
    let prices=btn.getElementsByClassName(".price");
    for (let prc of prices){
      console.log(prices);
    }

    let price = Number(
      document.querySelector("span").innerHTML
    );
    // console.log(price);
    let qty = Number(
  document.querySelector("span").innerHTML
);
    qty++;

    var c = document.getElementById("sc").children;
    // c.getElementById("total");
      var tst= c.children;
    console.log(c[0]);
    console.log(c[1]);
    console.log(c.getAttribute("name").innerText);
    console.log(document.getElementById("total").innerText);
    total += ttt;
    document.getElementById("total").innerText = qty;
    document.getElementById(btn.getAttribute("name") + "_qty").innerHTML = qty;
  });
}
// minus

var minusBtns = document.querySelectorAll(".minus");
for (let btn of minusBtns) {
  btn.addEventListener("click", function () {
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    if (qty > 0) {
      qty--;
      total -= price;
    } else alert("stop");
    document.getElementById("total").innerText = total;
    document.getElementById(btn.getAttribute("name") + "_qty").innerHTML = qty;
  });
}

// delete

let deleteBtns = document.querySelectorAll(".delete");
for (let btn of deleteBtns) {
  btn.addEventListener("click", function () {
    // btn.parentNode.remove();
    let price = Number(
      document.getElementById(btn.getAttribute("name") + "_price").innerHTML
    );
    let qty = Number(
      document.getElementById(btn.getAttribute("name") + "_qty").innerHTML
    );
    total -= price * qty;
    console.log(total);
    document.getElementById(btn.getAttribute("name")).remove();
    document.getElementById("total").innerText = total;
  });
}
// like
let heart = document.querySelectorAll(".fa-heart");
for (let like of heart) {
  like.addEventListener("click", function () {
    document.getElementById(like.getAttribute("name") + "_like").style.color =
      "red";
  });
}