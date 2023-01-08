import { darkTheme, styled, theme } from '../../../config/stitches.config';

import { ContentWrapper } from '../../../components/layout-new/ContentWrapper';
import { TextDecoration } from '../../../components/layout-new/TextDecoration';


const StyledSection = styled('section', {
  paddingTop: ` 1px + 3rem)`,
  textAlign: 'center',
  backgroundColor: '$turquoise',

  '@md': { paddingTop: `1px + 5rem)` },

  [`.${darkTheme} &`]: { backgroundColor: '$secondary50' },

  '.hero-content': {
    marginBottom: '4rem',

    h1: {
      fontWeight: 500,
      color: '$primary900',
      marginBottom: '3rem',
    },

    p: {
      width: '90%',
      margin: '0 auto',
      fontSize: '$big',
      lineHeight: '$big',
      color: '$subtext',
    },
  },

  '.profile-card-bg': {
    linearGradient: '$turquoise 38%, $border 38%, $border 39%, $surface50 39%',
    [`.${darkTheme} &`]: {
      linearGradient:
        '$secondary50 38%, $border 38%, $border 39%, $surface50 39%',
    },
    '> div > div': { mx: 'auto' },
  },
});

export const HeroSection = () => {
  const { colors } = theme;
  return (
    <StyledSection id="hero-section">
      <ContentWrapper className="hero-content">
        <h1>
          <TextDecoration variant="spark" color={colors.secondary500.value}>
            Writing
          </TextDecoration>{' '}
          code. Thinking{' '}
          <TextDecoration variant="underline" color={colors.pinky.value}>
            Design
          </TextDecoration>
          .
        </h1>
        <p>I help individuals and companies build better web applications.</p>
        <p>Available for freelance work Islamabad or remote.</p>
      </ContentWrapper>
    </StyledSection>
  );
};
