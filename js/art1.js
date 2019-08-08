
let basePrice = document.getElementById("base_price").innerHTML;
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let submit = document.getElementById("submit");
let go = document.getElementById("go");

let price = parseInt(basePrice);

plus.addEventListener("click",inrPrice);
minus.addEventListener("click",derPrice);
submit.addEventListener("click",submitInput);
go.addEventListener("click",submitBid);

function inrPrice(){
    price++;
    console.log(price);
    document.getElementById("base_price").innerHTML = price;
    
}
function derPrice(){
    if(price>9000){
    price--;
    console.log(price);
    document.getElementById("base_price").innerHTML = price;
    }
}
function submitInput(){
    let inputPrice = document.getElementById("input").value;
    price = parseInt(inputPrice);
    if(price <9000)
   swal({
  title: "INCORRECT VALUE",
  text: "your bid should be more than 9000",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
    else
        swal("your bid has been updated");
        document.getElementById("base_price").innerHTML = price;
}
function submitBid(){
    let inputPrice = document.getElementById("input").value;
    price = parseInt(inputPrice);
    if(price <9000)
      swal({
  title: "INCORRECT VALUE",
  text: "your bid should be more than 9000",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Your imaginary file has been deleted!", {
      icon: "success",
    });
  } else {
    swal("Your imaginary file is safe!");
  }
});
    else
      swal("YOUR BID HAS BEEN APPROVED!", "thank you!", "success");
}
