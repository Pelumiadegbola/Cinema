import axios from "axios";
const MOVIE_KEY = "MOVIE_KEY";
const LOGIN_USER_KEY = "WD_FORUM_LOGIN_USER_KEY";

var baseURL;
if (
  process.env.REACT_APP_ENVIRONMENT &&
  process.env.REACT_APP_ENVIRONMENT === "PRODUCTION"
) {
  baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
  baseURL = "https://cinemaparadiso-backend.onrender.com/";
}
// baseURL = 'http://127.0.0.1:8000/';

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (config.requireToken && localStorage.getItem(LOGIN_USER_KEY)) {
      config.headers.common["Authorization"] = JSON.parse(
        localStorage.getItem(LOGIN_USER_KEY)
      ).token;
    }

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default class API {
  getPosts = (params) => {
    return api
      .get("/posts/", { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
  addPost = (postBody) => {
    const formData = new FormData();

    for (const key in postBody) {
      formData.append(key, postBody[key]);
    }

    return api
      .post("/posts/add/", formData)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
  deletePost = (id) => {
    return api.delete(`/posts/delete/${id}/`).catch((error) => {
      throw new Error(error);
    });
  };

  //////////////////////////////// movies ////////////////////////////////

  //     getMovies = async () => {
  //         let url = '/movies/';
  //         const movies = await api
  //             .get(url)
  //             .then(response => {
  //                 return response.data;
  //             })
  //             .catch(error => {
  //                 throw new Error(error.message);
  //             });
  //         return movies;
  //     };
  // }

  getMovies = async (params) => {
    let url = "/movies/";
    let query = new URLSearchParams();
    for (const key in params) {
      if (params[key] != null) {
        query.append(key, params[key]);
      }
    }

    if (query.toString() !== "") {
      url += "?" + query.toString();
    }
    const places = await api
      .get(url)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return places;
  };

  getMovie = async (id) => {
    const movies = await api
      .get("/movies/" + id + "/")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
    return movies;
  };
}
