import { formatCurrency } from "./formatCurrency";

/**
 *
 * @param text receive a string with the value that will be translated
 * @returns value as a currency
 */
const maskMonetary = (text: string): string => {
    /**
     * This regex replace everything that is not a number.
     * Like '.' ' ' ',' 'R$' '+' and another chars
     * principal is the part at the left side of comma
     * decimal means the cents
     */
    const textNum = +text.replace(/[^0-9]/g, "");
   

    return formatCurrency(textNum / 100);
};

export default maskMonetary;
