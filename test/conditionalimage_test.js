(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#conditionalImage', {
    // This will run before each test in this module.
    setup: function() {
        this.elems = $('#qunit-fixture').children().conditionalImage({
            rules : [
              'value > 0',
              'value < 0',
              '=0'
            ]
          });
      }
    });

    test('is chainable', function() {
      expect(1);
      // Not a bad test to run on collection methods.
      strictEqual(this.elems.conditionalImage(), this.elems, 'should be chainable');
    });
    
    test('Check rules', function(){
        expect(1);
        ok(this.elems.conditionalImage('option', 'rules')[0] === 'value > 0', 'Rule returned');
      
      });

    test('Value manipulation', function(){
        expect(1);
        this.elems.conditionalImage('value', 15);
        equal(this.elems.conditionalImage('value'), 15, 'Return value');
      });

    test('is conditionalImage', function() {
      expect(1);
      ok(this.elems.conditionalImage().hasClass('conditionalImage'), 'should have conditionalImage cdd calss');
    });

    module(':conditionalImage selector', {
      // This will run before each test in this module.
      setup: function() {
      this.elems = $('#qunit-fixture').children().conditionalImage();
    }
  });

  test('is conditionalImage', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':conditionalImage').get(), this.elems.get(), 'knows conditionalImage when it sees it');
  });

}(jQuery));
