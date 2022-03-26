 export const getAllPosts = async () => {
    const result = await fetch('http://localhost:3009/posts');
    const json = await result.json();
    return json;
  }

  export const getAllEvents = async () => {
    const result = await fetch('http://localhost:3009/events');
    const json = await result.json();
    return json;
  }