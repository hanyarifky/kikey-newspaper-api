export const executeTimes = (req, res, next) => {
  const date = new Date();
  console.log(`You make request at: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  console.log('\n');
  next();
};

export default executeTimes;
