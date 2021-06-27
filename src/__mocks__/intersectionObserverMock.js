const mock = function() {
    return {
        observe: jest.fn(),
        disconnect: jest.fn(),
      };
}
window.IntersectionObserver = mock;