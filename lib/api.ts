export const postData = async (url: string, data: any) => {
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
};
