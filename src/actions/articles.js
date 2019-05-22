import { database, storage } from '../firebase/firebase';

// Actions allow us to change the redux store

// ADD_ARTICLE
export const addArticle = (article) => ({
  type: 'ADD_ARTICLE',
  article
});

export const startAddArticle = (articleData = {}) => {
  return async (dispatch, getState) => {
    const {
      title = '',  
      subTitle = '',  
      description = '',
      shortDescription = '',
      files = []
    } = articleData;

    const article = { title, subTitle, description, shortDescription, files };

   /* First we save the vehicle files
    ** Then we store the files using vehicleId from database 
    ** Finally we store uploaded files url into vehicle data 
    ** Note: this requires storing twice some vehice info*/
    const articleRef = await saveArticle(articleData);
    const articlePath = articleRef.path.toString();
    const updatedFiles = await saveFiles(articlePath, files);
    return await updateArticle(articlePath, updatedFiles).then(() => {
        dispatch(addArticle({
          id: articleRef.key,
          ...article,
          files: updatedFiles
        }));
    });
  }
}
//     saveFiles(articleData.files).then((files) => {
   
//       const article = { title, subTitle, description, shortDescription, files };

//       database.ref(`articles`).push(article).then((ref) => {
//         dispatch(addArticle({
//           id: ref.key,
//           ...article
//         }));
//       })
//     });
//   };
// };


const saveArticle = (article, articlePath) => {
  if (articlePath) {
    return database.ref(`${articlePath}`).update(article) 
  }
  return database.ref(`articles`).push(article);
}

const saveFiles = async (articlePath, files, removeExistingFiles, getState) => {
  if (removeExistingFiles) {
    await removeFiles(articlePath, getState);
  }
  return await Promise.all(files.map(file => saveFile(articlePath, file)))
}

const saveFile = async (articlePath, file) => {
  // Only want to save new images, that happens when file.src value is present
  if (file.src) {
    let fileRef = await storage.ref().child(`${articlePath}/images/${file.name}`);
    return await fileRef.put(file.src).then((snapshot) => {
              console.log('Uploaded a blob or file!');

              return { 
                       ...file,
                       "url": snapshot.downloadURL,
                       "path": snapshot.ref.fullPath
                     };
          });    
  } else {
    // If file was not updated, we just return same file value
    return file;
  }
}
const updateArticle = async (articlePath, updatedFiles) => {
  await database.ref(`${articlePath}/files`).set(updatedFiles)
  return await database.ref(`${articlePath}/files`).once('value');
}

const removeFiles = async (articlePath, getState) => {
    const articles = getState().articles.filter((article) => {
      return articlePath.includes(article.id); 
    });

    for (const file of articles[0].files) {
      await storage.ref().child(`${file.path}`).delete();
    }
}

// REMOVE_ARTICLE
export const removeArticle = ({ id } = {}) => ({
  type: 'REMOVE_ARTICLE',
  id
});

export const startRemoveArticle = ({ id } = {}) => {
  return async (dispatch, getState) => {
    
    return database.ref(`articles/${id}`).remove().then(() => {
      removeFiles(id, getState)
      dispatch(removeArticle({ id }));
    });
  };
};

// EDIT_ARTICLE
export const editArticle = (updates) => ({
  type: 'EDIT_ARTICLE',
  ...updates
});

export const startEditArticle = (id, updates) => {
  return (dispatch, getState) => {
    return saveData(id, updates, getState).then((ref) => {
        dispatch(editArticle({
          id,
          ...updates,
          files: ref.val()
        }));
    });
  }
};

const saveData = async (id, updates, getState) => {
  // /* First we save the vehicle files
    // ** Then we store the files using vehicleId from database 
    // ** Finally we store uploaded files url into vehicle data 
    // ** Note: this requires storing twice some vehice info*/
    const articlePath = `articles/${id}`;
    await saveArticle(updates, articlePath);
    const updatedFiles = await saveFiles(articlePath, updates.files, true, getState);
    return await updateArticle(articlePath, updatedFiles);
}

// SET_ARTICLES
export const setArticles = (articles) => ({
  type: 'SET_ARTICLES',
  articles
});

export const startSetArticles = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`articles`).once('value').then((snapshot) => {
      const articles = [];

      snapshot.forEach((childSnapshot) => {
        articles.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setArticles(articles));
    });
  };
};
