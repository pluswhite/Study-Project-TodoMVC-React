import React, { FC, useContext } from 'react';
import classnames from 'classnames';

import './todoFooter.scss';
import { AppContext, VisibilityType } from '../../hooks/appContexts';
import { Actions } from '../../reducers/appReducer';

const TodoFooter: FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { visibility } = state;
  const isAllSelected = classnames({
    ['selected']: visibility === VisibilityType.ALL,
  });
  const isActiveSelected = classnames({
    ['selected']: visibility === VisibilityType.ACTIVE,
  });
  const isCompletedSelected = classnames({
    ['selected']: visibility === VisibilityType.COMPLETED,
  });

  const handleVisibilityChange = (visibility: VisibilityType) => {
    dispatch({
      type: Actions.CHANGE_VISIBILITY,
      payload: {
        visibility,
      },
    });
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>1</strong> item left
      </span>
      <ul className="filters">
        <li onClick={() => handleVisibilityChange(VisibilityType.ALL)}>
          <a href="#" className={isAllSelected}>
            All
          </a>
        </li>
        <li onClick={() => handleVisibilityChange(VisibilityType.ACTIVE)}>
          <a href="#" className={isActiveSelected}>
            Active
          </a>
        </li>
        <li onClick={() => handleVisibilityChange(VisibilityType.COMPLETED)}>
          <a href="#" className={isCompletedSelected}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default TodoFooter;
