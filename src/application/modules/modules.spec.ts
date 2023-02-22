import * as modules from './index';
describe('user module', () => {
  Object.entries(modules).forEach(([_, value]) => {
    const config = value.config;

    it('every module should have correct config file', () => {
      expect(config.actions).toBeDefined();
      // there are actions in the module config
      expect(Object.keys(config.actions).length).toBeGreaterThan(0);

      // key is required for store
      expect(config.key).toBeDefined();

      // reducer is required for store
      expect(config.reducer).toBeDefined();
    });

    it('every module reducer should returns valid default state', () => {
      // reducer should be a function
      expect(typeof config.reducer).toBe('function');
      // return default state
      // @ts-ignore ignore test case
      expect(config.reducer({loading: true}, {type: undefined})).toEqual({
        loading: true,
      });
    });
  });
});
