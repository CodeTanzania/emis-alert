'use strict';


/* dependencies */
const path = require('path');
const { expect } = require('chai');


/* declarations */
const Alert =
  require(path.join(__dirname, '..', '..', 'lib', 'alert.model'));


describe('Alert', () => {

  describe('Statics', () => {

    it('should expose model name as constant', () => {
      expect(Alert.MODEL_NAME).to.exist;
      expect(Alert.MODEL_NAME).to.be.equal('Alert');
    });

    it('should expose autopulate as options', () => {
      expect(Alert.OPTION_AUTOPOPULATE).to.exist;
      expect(Alert.OPTION_AUTOPOPULATE)
        .to.be.eql({
          select: { title: 1, source: 1, severity: 1 },
          maxDepth: 1
        });
    });

  });
});
