'use strict'; 
describe('TeamControllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected){
        return angular.equals(this.actual, expected);
      }
    })
  })

  beforeEach(module('fsProjectApp'));
  beforeEach(module('teamServices'));

  describe('teamCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.thescore.com/nhl/teams.json').respond([{abbreviation:"BOS"}]);

      scope = $rootScope.$new();
      ctrl = $controller('teamCtrl', {$scope: scope});
    }));

    it('should fetch team data', function() {
      expect(scope['teams']).toEqualData([]);
      $httpBackend.flush();

      expect(scope['teams']).toEqualData([{abbreviation:"BOS"}]);
    });

  });
});