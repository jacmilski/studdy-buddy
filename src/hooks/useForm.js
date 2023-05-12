import { useReducer } from 'react';

const ACTION_TYPES = {
  INPUT_CHANGE: 'INPUT_CHANGE',
  CLEAR_VALUES: 'CLEAR_VALUES',
  CONSENT_TOGGLE: 'CONSENT_TOGGLE',
  THROW_ERROR: 'THROW_ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INPUT_CHANGE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case ACTION_TYPES.CLEAR_VALUES:
      return {
        ...action.initialValues,
      };
    case ACTION_TYPES.CONSENT_TOGGLE:
      return {
        ...state,
        consent: !state.consent,
      };
    case ACTION_TYPES.THROW_ERROR:
      return {
        ...state,
        error: action.errorValue,
      };
    default: {
      return state;
    }
  }
};

export const useForm = (initialValues) => {
  const [formValues, dispatch] = useReducer(reducer, initialValues);

  const handleInputChange = (e) => {
    dispatch({
      type: ACTION_TYPES.INPUT_CHANGE,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_VALUES, initialValues });
  };

  const handleThrowError = (errorMessage) => {
    dispatch({ type: ACTION_TYPES.THROW_ERROR, errorValue: errorMessage });
  };

  const handleToggleConsent = () => {
    dispatch({ type: ACTION_TYPES.CONSENT_TOGGLE });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
