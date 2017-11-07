export const UPDATE = 'UPDATE';

export const updateText = (string) => {
console.log(string);
	return {
  type : UPDATE,
  string,
}
};
