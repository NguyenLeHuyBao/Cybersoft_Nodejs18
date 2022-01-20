const { Ticket } = require("../models");

const { adminTaskHelper } = require("../services/common.service");

const findAllTicket = adminTaskHelper.getAllTask(Ticket);

const uploadTicket = adminTaskHelper.uploadTask(Ticket);

const findDetailTicket = adminTaskHelper.getDetailTask(Ticket);

const updateTicket = adminTaskHelper.updateTask(Ticket);

const removeTicket = adminTaskHelper.deleteTask(Ticket);

module.exports = {
  findAllTicket,
  findDetailTicket,
  updateTicket,
  removeTicket,
  uploadTicket,
};
