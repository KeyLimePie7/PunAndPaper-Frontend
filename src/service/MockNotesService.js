// This is a mockDB to use without the backend. It is in-memory only

let mockDB2 = {
  1: {
    "id": 1,
    "title": "title1",
    "content": "content1"
  },
  2: {
    "id": 2,
    "title": "title2",
    "content": "content2"
  },
}

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
  let returnContext = [];
  for (let property in mockDB2) {
    returnContext.push(mockDB2[property]);
  }
  return {
    context: returnContext,
    total: Object.keys(mockDB2).length
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
  return mockDB2[id];
};

export const createNewNote = async (title, content) => {
  let randomID = Math.floor(Math.random()*1000);
  mockDB2[randomID] = {
    id: randomID,
    title,
    content
  }
  return 1;
};

export const updateNote = async (id, title, content) => {
  mockDB2[id] = {
    id,
    title,
    content
  }
  return 1;
};

export const deleteNote = async (id) => {
  delete mockDB2[id];
  return 1;
};
