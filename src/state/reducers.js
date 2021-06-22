import { COMMANDS } from './actions';
import {
	moveForward,
	moveBackward,
	rotationToLeft,
	rotationToRight
} from './helpers';

const positionReducer = (state, action) => {
	const { FORWARDS, BACKWARDS } = COMMANDS;
	switch (action.type) {
		case FORWARDS:
			return moveForward(state, action)
		case BACKWARDS:
			return moveBackward(state, action);
		default:
			return state;
	}
}

const rotationReducer = (state, action) => {
	const { ROTATE_R, ROTATE_L } = COMMANDS;
	switch (action.type) {
		case ROTATE_L:
			return rotationToLeft(state, action);
		case ROTATE_R:
			return rotationToRight(state, action)
		default:
			return state;
	}
}


const reducers = ({ position, orientation }, action) => ({
	position: positionReducer(position, action),
	orientation: rotationReducer(orientation, action)
})

export default reducers;
