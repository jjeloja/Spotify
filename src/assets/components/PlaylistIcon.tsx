interface Props {
  image: string;
  width: number;
  height: number;
  rounded?: number;
  position?: string;
}

const PlaylistIcon = ({ image, width, height, rounded, position }: Props) => {
  return (
    <img
      src={image}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={`${rounded ? `rounded-${rounded}` : ""} ${
        position ? `${position}` : ""
      }`}
    ></img>
  );
};

export default PlaylistIcon;
