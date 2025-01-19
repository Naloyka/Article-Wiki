import { configureStore } from '@reduxjs/toolkit'

type CounterState = {
    counter: number
}

export type CounterId = string

type State = {
    counters: Record<CounterId, CounterState | undefined>
}

export type IncAction = {
    type: 'inc',
    payload: {
        counterId: CounterId
    }
}

export type DecAction = {
    type: 'dec',
    payload: {
        counterId: CounterId
    }
}

type Action = IncAction | DecAction

const initialCounterState: CounterState = { counter: 0 }
const initialState: State = {
    counters: {}
}

const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'inc': {
            const { counterId } = action.payload
            const currentCounter = state.counters[counterId] ?? initialCounterState
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [counterId]: {
                        ...currentCounter,
                        counter: currentCounter.counter + 1
                    }
                }
            }
        }
        case 'dec': {
            const { counterId } = action.payload
            const currentCounter = state.counters[counterId] ?? initialCounterState
            return {
                ...state,
                counters: {
                    ...state.counters,
                    [counterId]: {
                        ...currentCounter,
                        counter: currentCounter.counter - 1
                    }
                }
            };
        }
        default:
            return state
    }
}

export const store = configureStore({
    reducer: reducer,
})
