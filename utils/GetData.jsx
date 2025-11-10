"use server"
export const GetData = async (url) => {
  try {
    const apiKey = process.env.NEXT_API_KEY
    const server = process.env.NEXT_SERVER
    const res = await fetch(`${server}/api/v1/client${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apiKey,
      }
    });
    const response = await res.json();
    if (!res.ok) {
      throw new Error(response?.error || response?.message);
    }
    return response;
  } catch (error) {
    console.log(error);
    return { error: error?.message, data: null };
  }
};

export const PostData = async (url, { body }) => {
  try {
    const apiKey = process.env.NEXT_API_KEY
    const res = await fetch(url, {
      method: "POST",
      headers: {
        apiKey,
      },
      body: body,
    });
    const response = await res.json();
    if (!res.ok) {
      throw new Error(response?.error || response?.message);
    }
    return response;
  } catch (error) {
    console.log(error);
    return { error: error?.message, data: null };
  }
};
