export const getUserData = async (id: string) => {
  if (!id) return;
  // single line if statement can handle a return like this. Anything more complex needs curly brackets

  const valuesWeNeed = await fetch(`/api/users/getUser?id=${id}`);

  const valuesWeNeedRes = await valuesWeNeed.json();

  console.log(valuesWeNeedRes);
  return valuesWeNeedRes;
};
