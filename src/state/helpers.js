import { COMMANDS, ORIENTATION } from './actions';

const { S, N, W, E } = ORIENTATION;

export const moveForward = (state, action) => {
	switch (action.roverZ) {
		case N:
			return { ...state, roverY: state.roverY + 1 }
		case S:
			return { ...state, roverY: state.roverY - 1 }
		case W:
			return { ...state, roverX: state.roverX - 1 }
		case E:
			return { ...state, roverX: state.roverX + 1 }
		default:
			return state;
	}
}

export const moveBackward = (state, action) => {
	switch (action.roverZ) {
		case N:
			return { ...state, roverY: state.roverY - 1 }
		case S:
			return { ...state, roverY: state.roverY + 1 }
		case W:
			return { ...state, roverX: state.roverX + 1 }
		case E:
			return { ...state, roverX: state.roverX - 1 }
		default:
			return state;
	}
}

export const rotationToLeft = (state, action) => {
	switch (action.roverZ) {
		case N:
			return { ...state, roverZ: W }
		case S:
			return { ...state, roverZ: E }
		case W:
			return { ...state, roverZ: S }
		case E:
			return { ...state, roverZ: N }
		default:
			return state;
	}
}

export const rotationToRight = (state, action) => {
	switch (action.roverZ) {
		case N:
			return { ...state, roverZ: E }
		case S:
			return { ...state, roverZ: W }
		case W:
			return { ...state, roverZ: N }
		case E:
			return { ...state, roverZ: S }
		default:
			return state;
	}
}