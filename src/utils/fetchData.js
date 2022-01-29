const baseUrl = "http://localhost:5000/tasks/";
const headers =  {
    "Content-type": "application/json",
  }

export const getAllData = async () => {
  const res = await fetch(`${baseUrl}?_sort=id&_order=desc`);

  return await res.json();
};

export const getData = async (id) => {
  const res = await fetch(baseUrl + id);

  return await res.json();
};

export const addData = async (data) => {
  const res = await fetch(baseUrl, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const updateData = async (id, newData) => {
  const res = await fetch(baseUrl + id, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify(newData),
  });

  return res.json();
};

export const deleteData = async (id) => {
  await fetch(baseUrl + id, {
    method: "DELETE",
  });
};
