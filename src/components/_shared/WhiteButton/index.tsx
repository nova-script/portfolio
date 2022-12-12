import "./styles.css";

interface WhiteButtonProps {
  title: string;
  className?: string;
}

export default function WhiteButton(props: WhiteButtonProps) {
  return <a className={`white-button ` + props.className}>{props.title}</a>;
}
