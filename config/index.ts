// const readConfig = (name) => {
//   if (process.env.NODE_ENV === 'production') {
//     return require(`./${name}.json`);
//   } else if (process.env.NODE_ENV === 'test') {
//     return require(`./${name}.test`);
//   } else {
//     return require(`./${name}.dev`);
//   }
// }

// export const Config = {
//   port: 9000,
//   db: readConfig('ormconfig'),
// }