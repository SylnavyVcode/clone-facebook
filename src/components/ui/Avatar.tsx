type AvatarProps = {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
};

export const Avatar = ({ src, alt = 'avatar', size = 'md' }: AvatarProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizes[size]}`}
    />
  );
};