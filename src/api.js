export async function getItems() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Cant get data, please try again.");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error: ", error)
  }
}

export async function getItem(id) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!response.ok) throw new Error("Cant get data, please try again.");
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error: ", error)
    }
  }
