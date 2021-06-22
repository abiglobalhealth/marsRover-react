import {
	moveForward,
	moveBackward,
	rotationToLeft,
	rotationToRight
} from './helpers';

describe('moveForward', () => {
	it('moveForward roverY = 1', () => {
		const state = { roverY: 0 };
		const action = { roverZ: 'N' };
		const result = { roverY: 1 };
		expect(moveForward(state, action)).toStrictEqual(result)
	});

	it('moveForward roverY = -1', () => {
		const state = { roverY: 0 };
		const action = { roverZ: 'S' };
		const result = { roverY: -1 };
		expect(moveForward(state, action)).toStrictEqual(result)
	});

	it('moveForward roverX = -1', () => {
		const state = { roverX: 0 };
		const action = { roverZ: 'W' };
		const result = { roverX: -1 };
		expect(moveForward(state, action)).toStrictEqual(result)
	});

	it('moveForward roverX = 1', () => {
		const state = { roverX: 0 };
		const action = { roverZ: 'E' };
		const result = { roverX: 1 };
		expect(moveForward(state, action)).toStrictEqual(result)
	});
});

describe('moveBackward', () => {
	it('moveBackward roverY = 1', () => {
		const state = { roverY: 0 };
		const action = { roverZ: 'S' };
		const result = { roverY: 1 };
		expect(moveBackward(state, action)).toStrictEqual(result)
	});

	it('moveBackward roverY = -1', () => {
		const state = { roverY: 0 };
		const action = { roverZ: 'N' };
		const result = { roverY: -1 };
		expect(moveBackward(state, action)).toStrictEqual(result)
	});

	it('moveBackward roverX = -1', () => {
		const state = { roverX: 0 };
		const action = { roverZ: 'E' };
		const result = { roverX: -1 };
		expect(moveBackward(state, action)).toStrictEqual(result)
	});

	it('moveBackward roverX = 1', () => {
		const state = { roverX: 0 };
		const action = { roverZ: 'W' };
		const result = { roverX: 1 };
		expect(moveBackward(state, action)).toStrictEqual(result)
	});
});

describe('rotationToLeft', () => {
	it('rotationToLeft roverZ = W', () => {
		const state = {};
		const action = { roverZ: 'N' };
		const result = { roverZ: 'W' };
		expect(rotationToLeft(state, action)).toStrictEqual(result)
	});

	it('rotationToLeft roverZ = E', () => {
		const state = {};
		const action = { roverZ: 'S' };
		const result = { roverZ: 'E' };
		expect(rotationToLeft(state, action)).toStrictEqual(result)
	});

	it('rotationToLeft roverZ = S', () => {
		const state = {};
		const action = { roverZ: 'W' };
		const result = { roverZ: 'S' };
		expect(rotationToLeft(state, action)).toStrictEqual(result)
	});

	it('rotationToLeft roverZ = N', () => {
		const state = {};
		const action = { roverZ: 'E' };
		const result = { roverZ: 'N' };
		expect(rotationToLeft(state, action)).toStrictEqual(result)
	});
});

describe('rotationToRight', () => {
	it('rotationToRight roverZ = W', () => {
		const state = {};
		const action = { roverZ: 'S' };
		const result = { roverZ: 'W' };
		expect(rotationToRight(state, action)).toStrictEqual(result)
	});

	it('rotationToRight roverZ = E', () => {
		const state = {};
		const action = { roverZ: 'N' };
		const result = { roverZ: 'E' };
		expect(rotationToRight(state, action)).toStrictEqual(result)
	});

	it('rotationToRight roverZ = S', () => {
		const state = {};
		const action = { roverZ: 'E' };
		const result = { roverZ: 'S' };
		expect(rotationToRight(state, action)).toStrictEqual(result)
	});

	it('rotationToRight roverZ = N', () => {
		const state = {};
		const action = { roverZ: 'W' };
		const result = { roverZ: 'N' };
		expect(rotationToRight(state, action)).toStrictEqual(result)
	});
});
