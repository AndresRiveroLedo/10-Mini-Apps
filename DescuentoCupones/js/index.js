/*funcion que calcula el porcentaje de algun valor */
function percentageValue(value, valuePorcentage ){
  
    return (value * (100-valuePorcentage))/100;

}

/*funcion que retorna el precio total del producto
con el descuento hecho*/
const calculateDisconuntInThePrice = function (valuePrice, valueDiscount) {
  
    return percentageValue(valuePrice, valueDiscount  );
};

/*Metodo que calcula la diferencia entre el precio total
y el precio con descuento. (El ahorro del cliente) */
const valueOfDiscount = function (valuePrice, valueDiscount) {
  
    return valuePrice - percentageValue(valuePrice, valueDiscount);
};

const verificationCupon = function () {
    const cupons = [10, 25, 50];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);

    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}

const onClickButtonPriceDiscount = function () {
    const originalPrice = document.getElementById("inputPrice");
    const valuePrice = parseInt(originalPrice.value);

    const discount = document.getElementById("inputDiscount");
    const valueDiscount = parseInt(discount.value);

    const verificationCupons = verificationCupon();
    const discountCupon = valueDiscount + verificationCupons;

    const priceWithDiscount = calculateDisconuntInThePrice(valuePrice, discountCupon);
    const valorDiscount = valueOfDiscount(valuePrice, discountCupon);

    const displayPrice = document.getElementById("displayPrice");
    const price = valuePrice;
    displayPrice.innerText = `$${price}`;

    const displayDiscount = document.getElementById("displayDiscount");
    displayDiscount.innerText = `$${priceWithDiscount}`;

    const displayPercentageDiscount = document.getElementById("displayPercentageDiscount");
    displayPercentageDiscount.innerText = `-${discountCupon}%`

    /*const displayValueDiscount = document.getElementById("displayValueDiscount");
    displayValueDiscount.innerText = `Esto es lo que haz ahorrado: $${valorDiscount}`;*/

    /*Otra forma: */
    document.getElementById("displayValueDiscount").innerText = `Esto es lo que haz ahorrado: $${valorDiscount}`;

   
}