import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = (props) => (
  <ContentLoader
    speed={0}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="134" cy="120" r="119" />
    <rect x="-2" y="254" rx="7" ry="7" width="280" height="27" />
    <rect x="0" y="312" rx="16" ry="16" width="280" height="88" />
    <rect x="2" y="427" rx="11" ry="11" width="60" height="27" />
    <rect x="122" y="417" rx="22" ry="22" width="152" height="45" />
  </ContentLoader>
);

export default PizzaSkeleton;
