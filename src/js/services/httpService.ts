
class HttpService {

  request<T>(
    method: string,
    url: string,
    data?: any,
  ): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      const request = new XMLHttpRequest();

      request.open(method, url);

      request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
          if (request.status === 200 || request.status === 201) {
            setTimeout(() => {
              const result = request.responseText;
              const parsedResult = JSON.parse(result);
              resolve(parsedResult);
            }, 1000);

          } else {
            reject(new Error('httpService'));
          }
        }
      });

      const resultData = data != null ? JSON.stringify(data) : null;
      if (resultData) {
        request.setRequestHeader('Content-Type', 'application/json');
      }
      request.send(resultData);
    });
  }

}


export default new HttpService();

