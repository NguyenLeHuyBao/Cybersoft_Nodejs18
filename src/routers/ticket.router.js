const { Router } = require("express");

const { Ticket } = require("../models");

const {
  findAllTicket,
  findDetailTicket,
  updateTicket,
  removeTicket,
  uploadTicket,
} = require("../controllers/ticket.controller");

const {
  checkExist,
} = require("../middlewares/validation/check-exist.middleware");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/vertify.token.middleware");

const ticketRouter = Router();

// GET http://localhost:7000/api/v1/tickets/
ticketRouter.get("/", findAllTicket);

// GET http://localhost:7000/api/v1/tickets/:id
ticketRouter.get("/:id", [checkExist(Ticket)], findDetailTicket);

// POST http://localhost:7000/api/v1/tickets/
ticketRouter.post(
  "/",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"])],
  uploadTicket
);

// PUT http://localhost:7000/api/v1/tickets/
ticketRouter.put(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Ticket)],
  updateTicket
);

// DELETE http://localhost:7000/api/v1/tickets/:id
ticketRouter.delete(
  "/:id",
  [authenticate, authorize(["ADMIN", "SUPER_ADMIN"]), checkExist(Ticket)],
  removeTicket
);

module.exports = {
  ticketRouter,
};
