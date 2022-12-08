import "./styles.css";

interface PinkButtonProps {
  title: string;
  className?: string;
}

export default function PinkButton(props: PinkButtonProps) {
  return <a className={`pink-button ` + props.className}>{props.title}</a>;
}
