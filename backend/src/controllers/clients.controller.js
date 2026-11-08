const clientService = require("../services/clients.service");

exports.getClients = (req, res) => {
  const clients = clientService.getClients();
  res.json(clients);
};

exports.createClient = (req, res) => {
  const newClient = clientService.createClient(req.body);
  res.status(201).json(newClient);
};

exports.getClientById = (req, res) => {
  const client = clientService.getClientById(
    req.params.id
  );

  if (!client) {
    return res.status(404).json({
      message: "Cliente não encontrado",
    });
  }

  res.json(client);
};

exports.updateClient = (req, res) => {
  const updatedClient =
    clientService.updateClient(
      req.params.id,
      req.body
    );

  if (!updatedClient) {
    return res.status(404).json({
      message: "Cliente não encontrado",
    });
  }

  res.json(updatedClient);
};

exports.deleteClient = (req, res) => {
  const deleted = clientService.deleteClient(
    req.params.id
  );

  if (!deleted) {
    return res.status(404).json({
      message: "Cliente não encontrado",
    });
  }

  res.status(204).send();
};