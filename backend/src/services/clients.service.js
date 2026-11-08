// deve conter a logica

const clients = [];

exports.getClients = () => {
  return clients;
};

exports.createClient = (client) => {
  const newClient = {
    id: Date.now().toString(),
    ...client,
  };

  clients.push(newClient);

  return newClient;
};

exports.getClientById = (id) => {
  return clients.find(
    (client) => client.id === id
  );
};

exports.updateClient = (
  id,
  updatedData
) => {
  const index = clients.findIndex(
    (client) => client.id === id
  );

  if (index === -1) {
    return null;
  }

  clients[index] = {
    ...clients[index],
    ...updatedData,
  };

  return clients[index];
};

exports.deleteClient = (id) => {
  const index = clients.findIndex(
    (client) => client.id === id
  );

  if (index === -1) {
    return false;
  }

  clients.splice(index, 1);

  return true;
};