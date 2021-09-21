async function HttpClientService(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  })
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }

      throw new Error('Falha em pegar os dados do servidor :/');
    });
}

const contactService = {
  async contact(
    { name, email, message },
    HttpClientModule = HttpClientService,
  ) {
    const response = await HttpClientModule('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      body: {
        name, email, message,
      },
    });
    return response;
  },
};

export default contactService;
