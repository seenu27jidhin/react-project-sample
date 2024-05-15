const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    currency:"IND",style: "currency"
})
export function FormatCurrency(number){
return CURRENCY_FORMATTER.format(number)
}