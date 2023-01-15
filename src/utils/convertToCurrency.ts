export default function convertToCurrency(value: number | null, currency: string = 'COL'): string {
    if (value === null) value = 0;
    const curr = value.toLocaleString('es-ES', { style: 'currency', currency: currency });
    const sanitiezedCurrency = curr.split(',')[0];
    const centinels = sanitiezedCurrency.split('.')[1];
    return `$${sanitiezedCurrency.replace(`.${centinels}`, 'MIL')}`;
}