function formatCurrency(number) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Get the formatted number with a period as the decimal separator
  const formattedNumber = formatter.format(number);

  return formattedNumber;
}
