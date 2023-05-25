import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './AverageBadge.styles';

function AverageBadge({ average, isBig }) {
  return (
    <Wrapper isBig={isBig} average={average}>
      {average}
    </Wrapper>
  );
}

AverageBadge.propTypes = {
  average: PropTypes.string,
};

AverageBadge.defaultProps = {
  average: '2.3',
};

export default AverageBadge;
