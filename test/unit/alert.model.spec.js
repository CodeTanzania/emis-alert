'use strict';

/* dependencies */
const { expect } = require('chai');
const { include } = require('@lykmapipo/include');
const { Alert } = include(__dirname, '..', '..');

describe('Alert Instance', () => {
  it('`preValidate` should be a function', () => {
    const alert = Alert.fake();
    expect(alert.preValidate).to.exist;
    expect(alert.preValidate).to.be.a('function');
    expect(alert.preValidate.length).to.be.equal(1);
    expect(alert.preValidate.name).to.be.equal('preValidate');
  });

  it('`preValidate` should set number', done => {
    const alert = Alert.fake();
    alert.number = undefined;
    expect(alert.number).to.not.exist;

    alert.preValidate(error => {
      expect(alert.number).to.exist;
      done(error);
    });
  });

  it('`preValidate` should set color', done => {
    const alert = Alert.fake();
    alert.color = undefined;
    expect(alert.color).to.not.exist;

    alert.preValidate(error => {
      expect(alert.color).to.exist;
      done(error);
    });
  });
});

describe('Alert Statics', () => {
  it('should expose model name', () => {
    expect(Alert.MODEL_NAME).to.exist;
    expect(Alert.MODEL_NAME).to.be.eql('Alert');
  });

  it('should expose collection name', () => {
    expect(Alert.COLLECTION_NAME).to.exist;
    expect(Alert.COLLECTION_NAME).to.be.eql('alerts');
  });

  it('should expose directions', () => {
    expect(Alert.DEFAULT_DIRECTION).to.exist;
    expect(Alert.DEFAULT_DIRECTION).to.be.eql('Inbound');

    expect(Alert.DIRECTIONS).to.exist;
    expect(Alert.DIRECTIONS).to.be.eql(['Outbound', 'Inbound']);
  });

  it('should expose statuses', () => {
    expect(Alert.DEFAULT_STATUS).to.exist;
    expect(Alert.DEFAULT_STATUS).to.be.eql('Test');

    expect(Alert.STATUSES).to.exist;
    expect(Alert.STATUSES).to.be.eql([
      'Actual',
      'Exercise',
      'System',
      'Draft',
      'Test',
    ]);
  });

  it('should expose scopes', () => {
    expect(Alert.DEFAULT_SCOPE).to.exist;
    expect(Alert.DEFAULT_SCOPE).to.be.eql('Private');

    expect(Alert.SCOPES).to.exist;
    expect(Alert.SCOPES).to.be.eql(['Public', 'Restricted', 'Private']);
  });

  it('should expose categories', () => {
    expect(Alert.DEFAULT_CATEGORY).to.exist;
    expect(Alert.DEFAULT_CATEGORY).to.be.eql('Other');

    expect(Alert.CATEGORIES).to.exist;
    expect(Alert.CATEGORIES).to.be.eql([
      'Geo',
      'Met',
      'Safety',
      'Security',
      'Rescue',
      'Fire',
      'Health',
      'Env',
      'Transport',
      'Infra',
      'CBRNE',
      'Other',
    ]);
  });

  it('should expose statuses', () => {
    expect(Alert.DEFAULT_TYPE).to.exist;
    expect(Alert.DEFAULT_TYPE).to.be.eql('Ask');

    expect(Alert.TYPES).to.exist;
    expect(Alert.TYPES).to.be.eql([
      'Alert',
      'Update',
      'Cancel',
      'Error',
      'Ask',
    ]);
  });

  it('should expose responses', () => {
    expect(Alert.DEFAULT_RESPONSE).to.exist;
    expect(Alert.DEFAULT_RESPONSE).to.be.eql('None');

    expect(Alert.RESPONSES).to.exist;
    expect(Alert.RESPONSES).to.be.eql([
      'Shelter',
      'Evacuate',
      'Prepare',
      'Execute',
      'Avoid',
      'Monitor',
      'Assess',
      'AllClear',
      'None',
    ]);
  });

  it('should expose urgencies', () => {
    expect(Alert.DEFAULT_URGENCY).to.exist;
    expect(Alert.DEFAULT_URGENCY).to.be.eql('Unknown');

    expect(Alert.URGENCIES).to.exist;
    expect(Alert.URGENCIES).to.be.eql([
      'Immediate',
      'Expected',
      'Future',
      'Past',
      'Unknown',
    ]);
  });

  it('should expose severities', () => {
    expect(Alert.DEFAULT_SEVERITY).to.exist;
    expect(Alert.DEFAULT_SEVERITY).to.be.eql('Unknown');

    expect(Alert.SEVERITIES).to.exist;
    expect(Alert.SEVERITIES).to.be.eql([
      'Extreme',
      'Severe',
      'Moderate',
      'Minor',
      'Unknown',
    ]);
  });

  it('should expose certainties', () => {
    expect(Alert.DEFAULT_CERTAINTY).to.exist;
    expect(Alert.DEFAULT_CERTAINTY).to.be.eql('Unknown');

    expect(Alert.CERTAINTIES).to.exist;
    expect(Alert.CERTAINTIES).to.be.eql([
      'Observed',
      'Likely',
      'Possible',
      'Unlikely',
      'Unknown',
    ]);
  });

  it('should expose severity colors', () => {
    expect(Alert.DEFAULT_COLOR).to.exist;
    expect(Alert.DEFAULT_COLOR).to.be.eql('#3366FF');

    expect(Alert.COLOR_UNKNOWN).to.exist;
    expect(Alert.COLOR_UNKNOWN).to.be.eql('#3366FF');

    expect(Alert.COLOR_MINOR).to.exist;
    expect(Alert.COLOR_MINOR).to.be.eql('#88E729');

    expect(Alert.COLOR_MODERATE).to.exist;
    expect(Alert.COLOR_MODERATE).to.be.eql('#FFFF00');

    expect(Alert.COLOR_SEVERE).to.exist;
    expect(Alert.COLOR_SEVERE).to.be.eql('#FE9901');

    expect(Alert.COLOR_EXTREME).to.exist;
    expect(Alert.COLOR_EXTREME).to.be.eql('#D72E29');

    expect(Alert.COLORS).to.exist;
    expect(Alert.COLORS).to.be.eql({
      COLOR_UNKNOWN: '#3366FF',
      COLOR_MINOR: '#88E729',
      COLOR_MODERATE: '#FFFF00',
      COLOR_SEVERE: '#FE9901',
      COLOR_EXTREME: '#D72E29',
    });
  });

  it('should expose autopulate options', () => {
    expect(Alert.OPTION_AUTOPOPULATE).to.exist;
    expect(Alert.OPTION_AUTOPOPULATE).to.be.eql({
      maxDepth: 1,
    });
  });
});
