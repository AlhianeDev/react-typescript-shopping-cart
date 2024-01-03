const formater = Intl.NumberFormat(undefined, { style: "currency", currency: "USD" });

export const formatCurrency = (number: number) => {

    return formater.format(number);

}
