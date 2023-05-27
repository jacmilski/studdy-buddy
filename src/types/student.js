import PropTypes from 'prop-types';

export const studentShape = {
  id: PropTypes.string,
  name: PropTypes.string,
  attendance: PropTypes.string,
  average: PropTypes.string,
  group: PropTypes.string,
  course: PropTypes.string,
  grades: PropTypes.arrayOf([
    {
      subject: PropTypes.string,
      average: PropTypes.string,
    },
    {
      subject: PropTypes.string,
      average: PropTypes.string,
    },
    {
      subject: PropTypes.string,
      average: PropTypes.string,
    },
  ]),
};
