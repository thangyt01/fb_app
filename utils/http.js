import axios from 'axios';

class Http {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://devapi.bkwatch.me/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.refreshAccessTokenRequest = null;

    this.instance.interceptors.response.use(
      config => config.data,
      error => {
        if (error.response.status === 401) {
          this.refreshAccessTokenRequest =
            this.refreshAccessTokenRequest || refreshAccessToken();

          return this.refreshAccessTokenRequest
            .then(() => this.instance(error.response.config))
            .catch(error => console.log(error))
            .finally(() => {
              this.refreshAccessTokenRequest = null;
            });
        }
      },
    );
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, body) {
    return this.instance.post(url, body);
  }

  delete(url) {
    return this.instance.delete(url);
  }

  put(url, body) {
    return this.instance.put(url, body);
  }

  patch(url, body) {
    return this.instance.patch(url, body);
  }
}

const refreshAccessToken = async () => {
  try {
    await axios.post('https://devapi.bkwatch.me/api/refresh-token');
  } catch (error) {
    console.log(error);
  }
};

const http = new Http();
export default http;
