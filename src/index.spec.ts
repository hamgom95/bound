import {bound, _} from './index';
import { expect } from 'chai';
import 'mocha';

describe('bound()', () => {

  function f(...args) {
    return [this, ...args];
  }

  it('should behave like bind without placeholders', () => {
      // use eql instead of equal (else false because different array objects)
      expect(f.bind(1,2,3)(4,5,6), "Not bind compatible").to.eql(bound(f,1,2,3)(4,5,6));
  });

});