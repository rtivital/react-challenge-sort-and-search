import React from 'react';
import { Icon } from '../Icon';

const ActiveUserPlaceholder = () => (
  <div className="active-user-placeholder">
    <h2 className="active-user-placeholder__title">Select User</h2>
    <div className="active-user-placeholder__mark"><Icon glyph="web" /></div>
  </div>
);

export default ActiveUserPlaceholder;
