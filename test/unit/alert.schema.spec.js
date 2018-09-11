'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');


/* declarations */
const Alert =
  require(path.join(__dirname, '..', '..', 'lib', 'alert.model'));


describe('Alert', () => {

  describe('Schema', () => {

    it('should have sender field', () => {

      const sender = Alert.schema.tree.sender;
      const instance = Alert.schema.paths.sender.instance;

      expect(instance).to.be.equal('String');
      expect(sender).to.exist;
      expect(sender).to.be.an('object');
      expect(sender.type).to.be.a('function');
      expect(sender.type.name).to.be.equal('String');
      expect(sender.trim).to.be.true;
      expect(sender.required).to.be.true;
      expect(sender.index).to.be.true;
      expect(sender.searchable).to.be.true;
      expect(sender.fake).to.exist;

    });

    it('should have issuedAt field', () => {

      const issuedAt = Alert.schema.tree.issuedAt;
      const instance = Alert.schema.paths.issuedAt.instance;

      expect(instance).to.be.equal('Date');
      expect(issuedAt).to.exist;
      expect(issuedAt).to.be.an('object');
      expect(issuedAt.type).to.be.a('function');
      expect(issuedAt.type.name).to.be.equal('Date');
      expect(issuedAt.required).to.be.true;
      expect(issuedAt.index).to.be.true;
      expect(issuedAt.fake).to.exist;

    });

    it('should have status field', () => {

      const status = Alert.schema.tree.status;
      const instance = Alert.schema.paths.status.instance;

      expect(instance).to.be.equal('String');
      expect(status).to.exist;
      expect(status).to.be.an('object');
      expect(status.type).to.be.a('function');
      expect(status.type.name).to.be.equal('String');
      expect(status.trim).to.be.true;
      expect(status.required).to.be.true;
      expect(status.index).to.be.true;
      expect(status.searchable).to.be.true;
      expect(status.enum).to.exist;
      expect(status.fake).to.exist;

    });

    it('should have type field', () => {

      const type = Alert.schema.tree.type;
      const instance = Alert.schema.paths.type.instance;

      expect(instance).to.be.equal('String');
      expect(type).to.exist;
      expect(type).to.be.an('object');
      expect(type.type).to.be.a('function');
      expect(type.type.name).to.be.equal('String');
      expect(type.trim).to.be.true;
      expect(type.required).to.be.true;
      expect(type.index).to.be.true;
      expect(type.searchable).to.be.true;
      expect(type.fake).to.exist;

    });

    it('should have source field', () => {

      const source = Alert.schema.tree.source;
      const instance = Alert.schema.paths.source.instance;

      expect(instance).to.be.equal('String');
      expect(source).to.exist;
      expect(source).to.be.an('object');
      expect(source.type).to.be.a('function');
      expect(source.type.name).to.be.equal('String');
      expect(source.trim).to.be.true;
      expect(source.required).to.be.true;
      expect(source.index).to.be.true;
      expect(source.searchable).to.be.true;
      expect(source.fake).to.exist;

    });

    it('should have scope field', () => {

      const scope = Alert.schema.tree.scope;
      const instance = Alert.schema.paths.scope.instance;

      expect(instance).to.be.equal('String');
      expect(scope).to.exist;
      expect(scope).to.be.an('object');
      expect(scope.type).to.be.a('function');
      expect(scope.type.name).to.be.equal('String');
      expect(scope.trim).to.be.true;
      expect(scope.required).to.be.true;
      expect(scope.index).to.be.true;
      expect(scope.searchable).to.be.true;
      expect(scope.enum).to.exist;
      expect(scope.fake).to.exist;

    });

    it('should have restriction field', () => {

      const restriction = Alert.schema.tree.restriction;
      const instance = Alert.schema.paths.restriction.instance;

      expect(instance).to.be.equal('String');
      expect(restriction).to.exist;
      expect(restriction).to.be.an('object');
      expect(restriction.type).to.be.a('function');
      expect(restriction.type.name).to.be.equal('String');
      expect(restriction.trim).to.be.true;
      expect(restriction.index).to.be.true;
      expect(restriction.searchable).to.be.true;
      expect(restriction.fake).to.exist;

    });

    it('should have addresses field', () => {

      const addresses = Alert.schema.tree.addresses;
      const instance = Alert.schema.paths.addresses.instance;

      expect(instance).to.be.equal('Array');
      expect(addresses).to.exist;
      expect(addresses).to.be.an('object');
      expect(addresses.type[0]).to.be.a('function');
      expect(addresses.type[0].name).to.be.equal('String');
      expect(addresses.index).to.be.true;
      expect(addresses.searchable).to.be.true;
      expect(addresses.fake).to.exist;

    });

    it('should have code field', () => {

      const code = Alert.schema.tree.code;
      const instance = Alert.schema.paths.code.instance;

      expect(instance).to.be.equal('String');
      expect(code).to.exist;
      expect(code).to.be.an('object');
      expect(code.type).to.be.a('function');
      expect(code.type.name).to.be.equal('String');
      expect(code.trim).to.be.true;
      expect(code.required).to.be.true;
      expect(code.index).to.be.true;
      expect(code.searchable).to.be.true;
      expect(code.fake).to.exist;

    });

    it('should have note field', () => {

      const note = Alert.schema.tree.note;
      const instance = Alert.schema.paths.note.instance;

      expect(instance).to.be.equal('String');
      expect(note).to.exist;
      expect(note).to.be.an('object');
      expect(note.type).to.be.a('function');
      expect(note.type.name).to.be.equal('String');
      expect(note.trim).to.be.true;
      expect(note.required).to.be.true;
      expect(note.index).to.be.true;
      expect(note.searchable).to.be.true;
      expect(note.fake).to.exist;

    });

    it('should have references field', () => {

      const references = Alert.schema.tree.references;
      const instance = Alert.schema.paths.references.instance;

      expect(instance).to.be.equal('Array');
      expect(references).to.exist;
      expect(references).to.be.an('object');
      expect(references.type[0]).to.be.a('function');
      expect(references.type[0].name).to.be.equal('String');
      expect(references.index).to.be.true;
      expect(references.searchable).to.be.true;
      expect(references.fake).to.exist;

    });

    it('should have incidents field', () => {

      const incidents = Alert.schema.tree.incidents;
      const instance = Alert.schema.paths.incidents.instance;

      expect(instance).to.be.equal('Array');
      expect(incidents).to.exist;
      expect(incidents).to.be.an('object');
      expect(incidents.type[0]).to.be.a('function');
      expect(incidents.type[0].name).to.be.equal('String');
      expect(incidents.index).to.be.true;
      expect(incidents.searchable).to.be.true;
      expect(incidents.fake).to.exist;

    });

    it('should have language field', () => {

      const language = Alert.schema.tree.language;
      const instance = Alert.schema.paths.language.instance;

      expect(instance).to.be.equal('String');
      expect(language).to.exist;
      expect(language).to.be.an('object');
      expect(language.type).to.be.a('function');
      expect(language.type.name).to.be.equal('String');
      expect(language.trim).to.be.true;
      expect(language.index).to.be.true;
      expect(language.searchable).to.be.true;
      expect(language.fake).to.exist;

    });

    it('should have category field', () => {

      const category = Alert.schema.tree.category;
      const instance = Alert.schema.paths.category.instance;

      expect(instance).to.be.equal('String');
      expect(category).to.exist;
      expect(category).to.be.an('object');
      expect(category.type).to.be.a('function');
      expect(category.type.name).to.be.equal('String');
      expect(category.trim).to.be.true;
      expect(category.enum).to.exist;
      expect(category.index).to.be.true;
      expect(category.searchable).to.be.true;
      expect(category.fake).to.exist;

    });

    it('should have event field', () => {

      const event = Alert.schema.tree.event;
      const instance = Alert.schema.paths.event.instance;

      expect(instance).to.be.equal('String');
      expect(event).to.exist;
      expect(event).to.be.an('object');
      expect(event.type).to.be.a('function');
      expect(event.type.name).to.be.equal('String');
      expect(event.trim).to.be.true;
      expect(event.required).to.be.true;
      expect(event.index).to.be.true;
      expect(event.searchable).to.be.true;
      expect(event.fake).to.exist;

    });

    it('should have responseType field', () => {

      const responseType = Alert.schema.tree.responseType;
      const instance = Alert.schema.paths.responseType.instance;

      expect(instance).to.be.equal('String');
      expect(responseType).to.exist;
      expect(responseType).to.be.an('object');
      expect(responseType.type).to.be.a('function');
      expect(responseType.type.name).to.be.equal('String');
      expect(responseType.trim).to.be.true;
      expect(responseType.enum).to.exist;
      expect(responseType.index).to.be.true;
      expect(responseType.searchable).to.be.true;
      expect(responseType.fake).to.exist;

    });

    it('should have urgency field', () => {

      const urgency = Alert.schema.tree.urgency;
      const instance = Alert.schema.paths.urgency.instance;

      expect(instance).to.be.equal('String');
      expect(urgency).to.exist;
      expect(urgency).to.be.an('object');
      expect(urgency.type).to.be.a('function');
      expect(urgency.type.name).to.be.equal('String');
      expect(urgency.trim).to.be.true;
      expect(urgency.required).to.be.true;
      expect(urgency.enum).to.exist;
      expect(urgency.index).to.be.true;
      expect(urgency.searchable).to.be.true;
      expect(urgency.fake).to.exist;

    });

    it('should have severity field', () => {

      const severity = Alert.schema.tree.severity;
      const instance = Alert.schema.paths.severity.instance;

      expect(instance).to.be.equal('String');
      expect(severity).to.exist;
      expect(severity).to.be.an('object');
      expect(severity.type).to.be.a('function');
      expect(severity.type.name).to.be.equal('String');
      expect(severity.trim).to.be.true;
      expect(severity.required).to.be.true;
      expect(severity.enum).to.exist;
      expect(severity.index).to.be.true;
      expect(severity.fake).to.be.exist;

    });

    it('should have certainty field', () => {

      const certainty = Alert.schema.tree.certainty;
      const instance = Alert.schema.paths.certainty.instance;

      expect(instance).to.be.equal('String');
      expect(certainty).to.exist;
      expect(certainty).to.be.an('object');
      expect(certainty.type).to.be.a('function');
      expect(certainty.type.name).to.be.equal('String');
      expect(certainty.trim).to.be.true;
      expect(certainty.required).to.be.true;
      expect(certainty.enum).to.exist;
      expect(certainty.index).to.be.true;
      expect(certainty.fake).to.be.exist;

    });

    it('should have audience field', () => {

      const audience = Alert.schema.tree.audience;
      const instance = Alert.schema.paths.audience.instance;

      expect(instance).to.be.equal('String');
      expect(audience).to.exist;
      expect(audience).to.be.an('object');
      expect(audience.type).to.be.a('function');
      expect(audience.type.name).to.be.equal('String');
      expect(audience.trim).to.be.true;
      expect(audience.index).to.be.true;
      expect(audience.searchable).to.be.true;
      expect(audience.fake).to.exist;

    });

    it('should have code field', () => {

      const code = Alert.schema.tree.code;
      const instance = Alert.schema.paths.code.instance;

      expect(instance).to.be.equal('String');
      expect(code).to.exist;
      expect(code).to.be.an('object');
      expect(code.type).to.be.a('function');
      expect(code.type.name).to.be.equal('String');
      expect(code.trim).to.be.true;
      expect(code.uppercase).to.be.true;
      expect(code.required).to.be.true;
      expect(code.index).to.be.true;
      expect(code.searchable).to.be.true;
      expect(code.fake).to.exist;

    });

    it('should have effective field', () => {

      const effective = Alert.schema.tree.effective;
      const instance = Alert.schema.paths.effective.instance;

      expect(instance).to.be.equal('Date');
      expect(effective).to.exist;
      expect(effective).to.be.an('object');
      expect(effective.type).to.be.a('function');
      expect(effective.type.name).to.be.equal('Date');
      expect(effective.index).to.be.true;
      expect(effective.fake).to.exist;

    });

    it('should have onset field', () => {

      const onset = Alert.schema.tree.onset;
      const instance = Alert.schema.paths.onset.instance;

      expect(instance).to.be.equal('Date');
      expect(onset).to.exist;
      expect(onset).to.be.an('object');
      expect(onset.type).to.be.a('function');
      expect(onset.type.name).to.be.equal('Date');
      expect(onset.index).to.be.true;
      expect(onset.fake).to.exist;

    });


    it('should have expires field', () => {

      const expires = Alert.schema.tree.expires;
      const instance = Alert.schema.paths.expires.instance;

      expect(instance).to.be.equal('Date');
      expect(expires).to.exist;
      expect(expires).to.be.an('object');
      expect(expires.type).to.be.a('function');
      expect(expires.type.name).to.be.equal('Date');
      expect(expires.index).to.be.true;
      expect(expires.fake).to.exist;

    });

    it('should have senderName field', () => {

      const senderName = Alert.schema.tree.senderName;
      const instance = Alert.schema.paths.senderName.instance;

      expect(instance).to.be.equal('String');
      expect(senderName).to.exist;
      expect(senderName).to.be.an('object');
      expect(senderName.type).to.be.a('function');
      expect(senderName.type.name).to.be.equal('String');
      expect(senderName.trim).to.be.true;
      expect(senderName.required).to.be.true;
      expect(senderName.index).to.be.true;
      expect(senderName.searchable).to.be.true;
      expect(senderName.fake).to.exist;

    });

    it('should have headline field', () => {

      const headline = Alert.schema.tree.headline;
      const instance = Alert.schema.paths.headline.instance;

      expect(instance).to.be.equal('String');
      expect(headline).to.exist;
      expect(headline).to.be.an('object');
      expect(headline.type).to.be.a('function');
      expect(headline.type.name).to.be.equal('String');
      expect(headline.trim).to.be.true;
      expect(headline.required).to.be.true;
      expect(headline.index).to.be.true;
      expect(headline.searchable).to.be.true;
      expect(headline.fake).to.exist;

    });

    it('should have description field', () => {

      const description = Alert.schema.tree.description;
      const instance = Alert.schema.paths.description.instance;

      expect(instance).to.be.equal('String');
      expect(description).to.exist;
      expect(description).to.be.an('object');
      expect(description.type).to.be.a('function');
      expect(description.type.name).to.be.equal('String');
      expect(description.trim).to.be.true;
      expect(description.index).to.be.true;
      expect(description.searchable).to.be.true;
      expect(description.fake).to.exist;

    });

    it('should have instruction field', () => {

      const instruction = Alert.schema.tree.instruction;
      const instance = Alert.schema.paths.instruction.instance;

      expect(instance).to.be.equal('String');
      expect(instruction).to.exist;
      expect(instruction).to.be.an('object');
      expect(instruction.type).to.be.a('function');
      expect(instruction.type.name).to.be.equal('String');
      expect(instruction.trim).to.be.true;
      expect(instruction.index).to.be.true;
      expect(instruction.searchable).to.be.true;
      expect(instruction.fake).to.exist;

    });

    it('should have web field', () => {

      const web = Alert.schema.tree.web;
      const instance = Alert.schema.paths.web.instance;

      expect(instance).to.be.equal('String');
      expect(web).to.exist;
      expect(web).to.be.an('object');
      expect(web.type).to.be.a('function');
      expect(web.type.name).to.be.equal('String');
      expect(web.trim).to.be.true;
      expect(web.index).to.be.true;
      expect(web.searchable).to.be.true;
      expect(web.fake).to.exist;

    });

    it('should have contact field', () => {

      const contact = Alert.schema.tree.contact;
      const instance = Alert.schema.paths.contact.instance;

      expect(instance).to.be.equal('String');
      expect(contact).to.exist;
      expect(contact).to.be.an('object');
      expect(contact.type).to.be.a('function');
      expect(contact.type.name).to.be.equal('String');
      expect(contact.trim).to.be.true;
      expect(contact.index).to.be.true;
      expect(contact.searchable).to.be.true;
      expect(contact.fake).to.exist;

    });

    it('should have direction field', () => {

      const direction = Alert.schema.tree.direction;
      const instance = Alert.schema.paths.direction.instance;

      expect(instance).to.be.equal('String');
      expect(direction).to.exist;
      expect(direction).to.be.an('object');
      expect(direction.type).to.be.a('function');
      expect(direction.type.name).to.be.equal('String');
      expect(direction.trim).to.be.true;
      expect(direction.required).to.be.true;
      expect(direction.index).to.be.true;
      expect(direction.searchable).to.be.true;
      expect(direction.fake).to.exist;

    });

  });

});
