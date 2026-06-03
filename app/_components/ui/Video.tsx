"use client";

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

export default function Video(props: VideoProps) {
  return (
    <video
      {...props}
      onContextMenu={(e) => e.preventDefault()}
      controlsList="nodownload noplaybackrate noremoteplayback"
      disablePictureInPicture
    />
  );
}
