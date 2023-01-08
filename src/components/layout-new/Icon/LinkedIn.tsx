import { SvgProps } from '.';

export const LinkedInSvg: React.FC<SvgProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    fill="currentColor"
    focusable={false}
    role={props.title ? 'img' : undefined}
    aria-hidden={!props.title ? 'true' : 'false'}
    className={props.className}
    width={props.size ?? 24}
    height={props.size ?? 24}
    style={props.style}
  >
    {props.title ? <title>{props.title}</title> : undefined}
    <path d="M80.667 14H19.315C16.381 14 14 16.325 14 19.188v61.617C14 83.672 16.381 86 19.315 86h61.352C83.603 86 86 83.672 86 80.805V19.188C86 16.325 83.603 14 80.667 14zM35.354 75.354H24.67V40.995h10.684v34.359zm-5.342-39.057a6.19 6.19 0 0 1-6.19-6.194 6.189 6.189 0 1 1 12.379 0 6.194 6.194 0 0 1-6.189 6.194zM75.35 75.354H64.683V58.646c0-3.986-.078-9.111-5.551-9.111-5.558 0-6.405 4.341-6.405 8.822v16.998H42.052v-34.36h10.245v4.692h.146c1.426-2.7 4.91-5.549 10.106-5.549 10.806 0 12.802 7.114 12.802 16.369v18.847z" />
  </svg>
);
