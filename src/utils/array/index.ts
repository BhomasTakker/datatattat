export const remove = (array: any[], item: any) => {
	const update = [...array];
	const index = update.indexOf(item);
	update.splice(index, 1);
	return update;
};

// -down, +up, 0 no
// pass in generic
export const move = (array: any[], item: any, direction: number = 0) => {
	let dir = 0;
	if (direction > 0) dir = 1;
	else if (direction < 0) dir = -1;
	const update = [...array];
	const index = update.indexOf(item);
	update.splice(index, 1);
	update.splice(index + dir, 0, item);
	return update;
};
