
class HttpService {

  request<T>(
    method: string,
    url: string,
    data?: any,
  ): Promise<T> {
    return new Promise<any>((resolve, reject) => {
      if (method === 'POST' && url === 'http://localhost:3000/todos') {
        resolve({
          id: 1,
          text: data.text,
          isDone: data.isDone,
        })
      } else {
        reject();
      }
    });
  }

}


export default new HttpService();

