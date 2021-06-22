import { 
    COMMANDS, ORIENTATION
} from './actions';


const positionReducer = (state, action) => {
    const { FORWARDS, BACKWARDS } = COMMANDS;
    const { S, N, W, E } = ORIENTATION;

	switch (action.type) {
		case FORWARDS:
            switch (state.roverZ) {
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
        case BACKWARDS:
            switch (state.roverZ) {
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
		default:
			return state;
	}
}

const rotationReducer = (state, action) => {
    const { ROTATE_R, ROTATE_L } = COMMANDS;
    const { S, N, W, E } = ORIENTATION;

	switch (action.type) {
        case ROTATE_L:
            switch (state.roverZ) {
                case N:
                    return { ...state, setroverZ: W }
                case S:
                    return { ...state, setroverZ: E }
                case W:
                    return { ...state, setroverZ: S }
                case E:
                    return { ...state, setroverZ: N }
                default:
                    return state;
            }
        case ROTATE_R:
            switch (state.roverZ) {
                case N:
                    return { ...state, setroverZ: E }
                case S:
                    return { ...state, setroverZ: W }
                case W:
                    return { ...state, setroverZ: N }
                case E:
                    return { ...state, setroverZ: S }
                default:
                    return state;
            }
		default:
			return state;
	}
}


const reducers = ({ positions, orientations }, action) => ({
	positions: positionReducer(positions, action),
    orientations: rotationReducer(orientations, action)
})

export default reducers;
