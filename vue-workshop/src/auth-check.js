// o:2
//8 8. We can extract our guard from component...
export default (to, from, next) => {
  window.localStorage.getItem('auth') === 'true' ? next() : next({
    path: '/',
  })
};
