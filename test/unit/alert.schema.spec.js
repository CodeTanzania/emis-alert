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
      expect(addresses.trim).to.be.true;
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
      expect(references.trim).to.be.true;
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
      expect(incidents.trim).to.be.true;
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
      expect(language.required).to.be.true;
      expect(language.index).to.be.true;
      expect(language.searchable).to.be.true;
      expect(language.fake).to.exist;

    });

    it('should have title field', () => {

      const title = Alert.schema.tree.title;
      const instance = Alert.schema.paths.title.instance;

      expect(instance).to.be.equal('String');
      expect(title).to.exist;
      expect(title).to.be.an('object');
      expect(title.type).to.be.a('function');
      expect(title.type.name).to.be.equal('String');
      expect(title.trim).to.be.true;
      expect(title.required).to.be.true;
      expect(title.index).to.be.true;
      expect(title.searchable).to.be.true;
      expect(title.fake).to.exist;

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
      expect(severity.index).to.be.true;
      expect(severity.default).to.be.exist;
      expect(severity.fake).to.be.exist;

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
