
export const MoneyFormat = (money: number) => {
  const moneyWithCents = money / 100;
  return new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency:  'BRL',
  }).format(moneyWithCents);
};