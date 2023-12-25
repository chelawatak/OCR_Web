const vision = require('@google-cloud/vision');

const CREDENTIALS =JSON.parse(JSON.stringify({
    "type": "service_account",
    "project_id": "nimble-orbit-409206",
    "private_key_id": "e41439b79a90121f0eed0dd0132279084bc00bd0",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCvwTscc+10yh/6\n2mAgIA/Uxh0N7ZglZP1EyixVm6YIxVdA22mM6JQeZQtc4USL+u0xRtPKuYweFo9h\ni4VNKOJ6r9okUrk14BRSd5vLpoHgtOP5qjUO7BtrF/8aj4yLQSGa/y7M7uofy5zB\nXN5Z6oH4LoRzN8AQp7QVJltvDickuXU9Z9LceGk9kqyCEtYTXqWNQBM5Dx3VZB+9\nRbe2q7tj3QiRZ6C6LylBLXmgkOJU+ppAew11wOa7ONkQmTh52sTkKD+WJ+ual8x8\n4Qh4csp0uALlpvl4nQQ0H93RPRJ39ssopVzIhuIs7Zm6GXEWk0WsO/AjltKs4gFz\nU9HPysotAgMBAAECggEADqBGhb7yAmRo7+Y11kaRlE2ExBCpnWcMZ3ac5OaGLtGs\nlrJyILtUMQlYpKFmJArWq8fVcgsp6XEYL1ZxWlmUkcz9NHhvGFguNZF/NVEe56I2\nHKQfZ6Waph/OzeX0HLya8G91dH5N0CXDxRjjTVlLxc/dNUqgIOKyUYl2vETrWTQz\nXz7pjp/aD95h+4TgeVSloyPzFIWojAaXdKvtnf59QlFqt+LbZZUSxpvlzCcvfe39\nU61ps7E6UR1rQExX9FJCTlPGRkLRatROD63AB8xWN0y7HkQdbJkP75nZqZ0QkAuv\nnIaM1Lyk/ms1RVWNgetMq0xnqkWb++V6/aGHoaDAkwKBgQD1Llt1o9SPOwnEui0F\n61FwMcq6KXYHj5tj3yGHMojpu3C/fJQWbwjLSjHcm1Zf1hfq0fnLqG8jYzpg5eGi\nnBJybjfZ0rQVOWZ+SrUuC6QtaZILsSGvZRc64u7ldo2j8cqWlltdmYxNfROT4I8r\nby7gQnG8VGONOB+kNPDZnqtmYwKBgQC3gpzRhR8xjMqK1kqEIRIf2uq3tbe06aaR\nYpSHZPCr8mUmKJ8iPNIh6qwK0UcDHLfnC+E3FexN4cDXGZbhcIlLxcYMllqdDQyF\nF37SbKO/iYdwJxlqNJBC9gSRUgTilbA6Sb366tkiqimeG69vs/sZQ65vXwgYJBnj\nGBaUBrpqLwKBgDqdnpf9Vu/3OVqi9+iWXZ3pCYKALwuXtZqm2aks17apbUcaTX0f\nhoazckA/kuLOmGE3WfTqi8d2DZrk2pC5p19cIlYdHZiFZI+E5NPhTJrexl+tNVRt\nYqRdZKfPNAWh5MEjqSwzbWuJH4kXAqNrrVVIDVDtC+/THx1u2rXsTSXpAoGAWM+Q\nX2ICr7NIjpqY44sxv1LuR0xdhOOTJkdERKZYR47+3tHH+gTfWWS+MFoJ+PqcEehQ\n7ZzhiOuZrUAIIkCZYZ9scskNP3aCOaMeUG4dbWP8tQ1nIlwf+RghK8c68AGrkPoB\nRH8F6N3bWFZjuDatbhOwRtwCCdTm5l3RB4CeFScCgYBFMbK5VEdTBYpqFQJ2dumq\nsbgx2HDbOzmE7jVOAOuLzAkQldruC20rVTPzQPaeQzR5e2EJy6T0aD35mZSzIwWa\n/BsgrOkX78E9uHKZMygXkL1lDMrs82IsOsxzWCkSIlF3jL0nEQrpMPl98Qdng36A\nML0VvrLNBIZN3D9Ah8AN9Q==\n-----END PRIVATE KEY-----\n",
    "client_email": "aniket@nimble-orbit-409206.iam.gserviceaccount.com",
    "client_id": "104275760138290739264",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/aniket%40nimble-orbit-409206.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  ));

const CONFIG = {
    credentials: {
        private_key: CREDENTIALS.private_key,
        client_email: CREDENTIALS.client_email
    }
};

const client = new vision.ImageAnnotatorClient(CONFIG);

const detectLandmark = async (file_path) => {

    let [result] = await client.landmarkDetection('image2.jpg');
    console.log(result.landmarkAnnotations[0].description);
    // console.log(result);
};

// detectLandmark();
const detectText = async (file_path) => {

    let [result] = await client.textDetection(file_path);
    console.log(result.fullTextAnnotation.text);
};

detectText('image.jpg');