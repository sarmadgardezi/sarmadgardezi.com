import Image from 'next/image';

import { styled } from '@config/stitches.config';
import AvatarImage from '../../public/images/avatar.png';

const StyledAvatar = styled('div', {
  display: 'flex',
  span: { borderRadius: '$round' },
  img: { transition: 'all 100ms ease', borderRadius: '$round' },
});

type AvatarProps = {
  size?: number;
};

export const Avatar: React.FC<AvatarProps> = props => {
  const size = props.size ?? 40;

  return (
    <StyledAvatar data-avatar>
      <Image
        src={AvatarImage}
        alt="Sarmad Gardezi Avatar"
        height={size}
        width={size}
        placeholder={size > 40 ? 'blur' : undefined}
      />
    </StyledAvatar>
  );
};
