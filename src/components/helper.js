import React from 'react';
import {Link, Route} from 'react-router-dom';

export const CustomNav = ( {label, to, activeOnlyWhenExact, generalClassName} ) => {
    return (
      <Route path={to} exact={activeOnlyWhenExact} children={ ({match}) => {
        return (
        <li className={`${generalClassName}${match ? ' active' : ''}`}>
          <Link to={to} style={ {fontWeight: 'normal'} }>{label}</Link>
        </li>
        )}
      } />
    );
};

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const epochDateTimeFix = epoch => {
  const d = new Date(epoch * 1000); // The 0 there is the key, which sets the date to the epoch
  return d.toLocaleString();
}

export const sortArray = (sort, array) => {
  return array.sort( (a, b) => { return b[sort] - a[sort] });
}