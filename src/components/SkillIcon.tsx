import type { IconType } from "react-icons";
import {
  SiAngular,
  SiCloudflare,
  SiCodecov,
  SiCss,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLit,
  SiNextdotjs,
  SiNpm,
  SiPnpm,
  SiReact,
  SiStorybook,
  SiTypescript,
  SiTurborepo,
  SiVite,
} from "react-icons/si";
import {
  HiOutlineBolt,
  HiOutlineCircleStack,
  HiOutlineCodeBracketSquare,
  HiOutlineCube,
  HiOutlineKey,
  HiOutlineRectangleGroup,
  HiOutlineServerStack,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import type { SkillIconId } from "@/lib/content";

const icons: Record<SkillIconId, IconType> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  angular: SiAngular,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: SiCss,
  cloudflare: SiCloudflare,
  d1: HiOutlineCircleStack,
  kv: HiOutlineServerStack,
  webhooks: HiOutlineBolt,
  rest: HiOutlineCodeBracketSquare,
  oauth: HiOutlineKey,
  githubactions: SiGithubactions,
  designsystems: HiOutlineRectangleGroup,
  lit: SiLit,
  storybook: SiStorybook,
  payload: HiOutlineCube,
  monorepos: HiOutlineSquares2X2,
  performance: HiOutlineBolt,
  git: SiGit,
  github: SiGithub,
  pnpm: SiPnpm,
  npm: SiNpm,
  turborepo: SiTurborepo,
  codecov: SiCodecov,
  vite: SiVite,
};

type SkillIconProps = {
  id: SkillIconId;
  className?: string;
};

export function SkillIcon({ id, className = "size-5" }: SkillIconProps) {
  const Icon = icons[id];
  return <Icon className={className} aria-hidden="true" />;
}
