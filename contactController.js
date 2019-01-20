// Import contact model
Contact = require('./contactModel');
// Handle index actions
exports.index = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Contact.get(function(err, contacts) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts
    });
  });
};
// Handle create contact actions
exports.new = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  // save the contact and check for errors
  contact.save(function(err) {
    // if (err)
    //     res.json(err);
    res.json({
      message: 'New contact created!',
      data: contact
    });
  });
};
// Handle view contact info
exports.view = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Contact.findById(req.params.contact_id, function(err, contact) {
    if (err){
      res.send(err);
    }
    if (contact){
      res.json({
        message: 'Contact details loading..',
        data: contact
      });
    } else {
      res.json({
        message: 'Contact Not Found!!!'
      });
    }
  });
};
// Handle update contact info
exports.update = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Contact.findById(req.params.contact_id, function(err, contact) {
    if (err)
      res.send(err);
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender ? req.body.gender : contact.gender;
    contact.email = req.body.email ? req.body.email : contact.email;
    contact.phone = req.body.phone ? req.body.phone : contact.phone;
    // save the contact and check for errors
    contact.save(function(err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Contact Info updated',
        data: contact
      });
    });
  });
};
// Handle delete contact
exports.delete = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  Contact.deleteOne({
    _id: req.params.contact_id
  }, function(err, contact) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Contact deleted'
    });
  });
};
