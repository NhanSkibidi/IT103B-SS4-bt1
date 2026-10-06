const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;
let sizeUpcharge = 0;
if (drinkSize === "M") {
    sizeUpcharge = 6000;
} else if (drinkSize === "L") {
    sizeUpcharge = 10000;
}
// Tính tiền một ly hoàn chỉnh
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);
let totalBill = 0;
// Tính tiền đủ số lượng ly
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
    totalBill += singleCupPrice;
}
// Giảm giá một lần sau khi tính tổng hóa đơn
if (isGoldMember) {
    totalBill = totalBill * 0.9;
}
console.log("Tên đồ uống:", drinkName);
console.log("Size:", drinkSize);
console.log("Số lượng:", orderQuantity);
console.log("Tiền một ly:", singleCupPrice, "VNĐ");
console.log("Tổng thanh toán:", totalBill, "VNĐ");