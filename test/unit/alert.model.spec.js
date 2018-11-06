'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');
const Alert = require(path.join(__dirname, '..', '..', 'lib', 'alert.model'));


describe('Alert Statics', () => {

  it('should expose model name', () => {
    expect(Alert.MODEL_NAME).to.exist;
    expect(Alert.MODEL_NAME).to.be.equal('Alert');
  });

  it('should expose collection name', () => {
    expect(Alert.COLLECTION_NAME).to.exist;
    expect(Alert.COLLECTION_NAME).to.be.equal('alerts');
  });

  it('should expose autopulate options', () => {
    expect(Alert.OPTION_AUTOPOPULATE).to.exist;
    expect(Alert.OPTION_AUTOPOPULATE)
      .to.be.eql({
        maxDepth: 1
      });
  });

});
