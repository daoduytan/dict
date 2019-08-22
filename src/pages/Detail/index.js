import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../../components';
import icons from '../../assets/icons';

const Detail = ({ match }) => {
  const { params } = match;

  console.log('rs', params);

  return (
    <div style={{ padding: 30 }}>
      <Link to="/">
        <Icon icon={icons.back} size={20} />
      </Link>

      {params.word && <div>{params.word}</div>}
    </div>
  );
};

export default Detail;
