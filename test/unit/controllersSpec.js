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

  describe('teamCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend, $rootScope, $controller){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('https://api.thescore.com/nhl/teams').respond({full_name: 'Boston Bruins'});

      scope = $rootScope.$new();
      ctrl = $controller('teamCtrl', {$scope: scope});
    }));

    it('should fetch team data', function() {
      expect(scope).toEqual({});
      $httpBackend.flush();

      expect(scope).toEqual('Boston Bruins');
    });

  });
});