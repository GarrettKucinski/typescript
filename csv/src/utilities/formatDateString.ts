const formateDateString = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map((piece: string): number => parseInt(piece));

  return new Date(year, month - 1, day)
};

export default formateDateString;
