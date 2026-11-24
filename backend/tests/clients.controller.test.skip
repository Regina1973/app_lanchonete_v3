const clientController = require("../src/controllers/clients.controller");
const clientService = require("../src/services/clients.service");

jest.mock("../src/services/clients.service");

describe("Clients Controller", () => {

  test("deve listar clientes", () => {
    const req = {};

    const res = {
      json: jest.fn(),
    };

    const clients = [
      {
        id: "1",
        name: "Aline",
      },
    ];

    clientService.getClients.mockReturnValue(clients);

    clientController.getClients(req, res);

    expect(clientService.getClients).toHaveBeenCalled();

    expect(res.json).toHaveBeenCalledWith(clients);
  });

  test("deve criar cliente", () => {
    const req = {
      body: {
        name: "Aline",
        email: "aline@email.com",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const client = {
      id: "1",
      name: "Aline",
      email: "aline@email.com",
    };

    clientService.createClient.mockReturnValue(client);

    clientController.createClient(req, res);

    expect(clientService.createClient)
      .toHaveBeenCalledWith(req.body);

    expect(res.status)
      .toHaveBeenCalledWith(201);

    expect(res.json)
      .toHaveBeenCalledWith(client);
  });

  test("deve buscar cliente por id", () => {
    const req = {
      params: {
        id: "1",
      },
    };

    const res = {
      json: jest.fn(),
    };

    const client = {
      id: "1",
      name: "Aline",
    };

    clientService.getClientById.mockReturnValue(client);

    clientController.getClientById(req, res);

    expect(clientService.getClientById)
      .toHaveBeenCalledWith("1");

    expect(res.json)
      .toHaveBeenCalledWith(client);
  });

  test("deve atualizar cliente", () => {
    const req = {
      params: {
        id: "1",
      },
      body: {
        name: "Aline Regina",
      },
    };

    const res = {
      json: jest.fn(),
    };

    const updatedClient = {
      id: "1",
      name: "Aline Regina",
    };

    clientService.updateClient
      .mockReturnValue(updatedClient);

    clientController.updateClient(req, res);

    expect(clientService.updateClient)
      .toHaveBeenCalledWith("1", req.body);

    expect(res.json)
      .toHaveBeenCalledWith(updatedClient);
  });

  test("deve remover cliente", () => {
    const req = {
      params: {
        id: "1",
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    clientService.deleteClient.mockReturnValue(true);

    clientController.deleteClient(req, res);

    expect(clientService.deleteClient)
      .toHaveBeenCalledWith("1");

    expect(res.status)
      .toHaveBeenCalledWith(204);

    expect(res.send)
      .toHaveBeenCalled();
  });

});