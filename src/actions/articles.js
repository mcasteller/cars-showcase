import { database, storage } from '../firebase/firebase';

// Actions allow us to change the redux store

// ADD_ARTICLE
export const addArticle = (article) => ({
  type: 'ADD_ARTICLE',
  article
});

export const startAddArticle = (articleData = {}) => {
  return (dispatch, getState) => {
    const {
      title = '',  
      subTitle = '',  
      description = '',
      shortDescription = '',
      filesURL = []
    } = articleData;

    saveFiles(articleData.filesURL).then((filesURL) => {
   
      const article = { title, subTitle, description, shortDescription, filesURL };

      database.ref(`articles`).push(article).then((ref) => {
        dispatch(addArticle({
          id: ref.key,
          ...article
        }));
      })
    });
  };
};

const saveFiles = async (files) => {
    return await Promise.all(files.map(file => saveFile(file)))
}

const saveFile = async (file) => {
  return await storeFile(file)
}

const storeFile = (file) => {
  let ref = storage.ref().child(`images/${file.name}`);
  return ref.put(file.src).then((snapshot) => {
            console.log('Uploaded a blob or file!');

            return snapshot.downloadURL;
        });
}

// REMOVE_ARTICLE
export const removeArticle = ({ id } = {}) => ({
  type: 'REMOVE_ARTICLE',
  id
});

export const startRemoveArticle = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`articles/${id}`).remove().then(() => {
      dispatch(removeArticle({ id }));
    });
  };
};

// EDIT_ARTICLE
export const editArticle = (id, updates) => ({
  type: 'EDIT_ARTICLE',
  id,
  updates
});

export const startEditArticle = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    saveFiles(updates.filesURL).then((filesURL) => {
   
      const articleUpdates = { ...updates, filesURL };

      database.ref(`articles/${id}`).update(articleUpdates).then(() => {
        dispatch(editArticle(id, articleUpdates));
      });
    });
  }
};

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
