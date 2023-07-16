/*
you'll get something like this
{
    "context": [
        {
            "id": 1,
            "title": "title1",
            "content": "content1"
        },
        {
            "id": 2,
            "title": "title2",
            "content": "content2"
        },
        {
            "id": 3,
            "title": "title3",
            "content": "content3"
        },
        {
            "id": 4,
            "title": "title4",
            "content": "content4"
        }
    ],
    "total": 4
}
*/
export const getAllNotes = async () => {
  try {
    const response = await fetch("http://localhost:3005/api/notes");
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    console.log("getAllNotes called");
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

/*
{
    "id": 1,
    "title": "title1",
    "content": "content1"
}
*/
export const getNoteById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3005/api/note/${id}`);
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    console.log("getNoteById called");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createNewNote = async (title, content) => {
  try {
    const response = await fetch("http://localhost:3005/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    console.log("createNewNote called");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const updateNote = async (id, title, content) => {
  try {
    const response = await fetch(`http://localhost:3005/api/note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    console.log("updateNote called");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const deleteNote = async (id) => {
  try {
    const response = await fetch(`http://localhost:3005/api/note/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }
    const data = await response.json();
    console.log("deleteNote called");
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
