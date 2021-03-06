
import React from 'react';
import PropTypes from 'prop-types';

import {
  ShareButtons,
  generateShareIcon
} from 'react-share';

import appConfig from '../../../jsons/appconfig.json';

const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

/* The component creates social media links which can be used to share your progress. */
const SocialMediaLinks = props => {
  const shareDescr = `I scored ${props.score} points in freeCodeCamp arcade mode.`;
  return (
    <div className='am__social-media-links-div'>
      <p>You can share the score with your friends:</p>
      <div className='am__social-media-link'>
        <FacebookShareButton
          title='ArcadeMode'
          description={shareDescr}
          url={appConfig.site}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div className='am__social-media-link'>
        <TwitterShareButton
          title={shareDescr}
          hashtags={['freeCodeCamp']}
          url={appConfig.site}
        >
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
      </div>
    </div>
  );
};

SocialMediaLinks.propTypes = {
  score: PropTypes.number.isRequired
};

export default SocialMediaLinks;
