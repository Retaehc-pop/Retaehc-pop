import react from "react";
import * as icons from "./icons";

type IconProps = {
  name: string;
};

const Icon: react.FC<IconProps> = (props) => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case "javascript":
      return <icons.Javascript />;
    case "c":
      return <icons.C />;
    case "cpluslus":
      return <icons.Cpp />;
    case "rust":
      return <icons.Rust />;
    case "go":
      return <icons.Go />;
    case "java":
      return <icons.Java />;
    case "html":
      return <icons.Html />;
    case "css":
      return <icons.Css />;
    case "sass":
      return <icons.Sass />;
    case "npm":
      return <icons.Npm />;
    case "react":
      return <icons.React />;
    case "nextjs":
      return <icons.Nextjs />;
    case "nodejs":
      return <icons.Nodejs />;
    case "numpy":
      return <icons.Numpy />;
    case "python":
      return <icons.Python />;
    case "pandas":
      return <icons.Pandas />;
    case "pytorch":
      return <icons.Pytorch />;
    case "tensorflow":
      return <icons.Tensorflow />;
    case "jupyter":
      return <icons.Jupyter />;
    case "mongodb":
      return <icons.Mongodb />;
    case "mysql":
      return <icons.Mysql />;
    case "postgresql":
      return <icons.Postgresql />;
    case "typescript":
      return <icons.Typescript />;
    case "solidity":
      return <icons.Solidity />;
    case "git":
      return <icons.Git />;
    case "github":
      return <icons.Github />;
    case "gitlab":
      return <icons.Gitlab />;
    case "npm":
      return <icons.Npm />;
    case "firebase":
      return <icons.Firebase />;
    case "arduino":
      return <icons.Arduino />;
    case "raspberrypi":
      return <icons.Rpi />;
    case "vercel":
      return <icons.Vercel />;
    case "haskell":
      return <icons.Haskell />;
    case "prolog":
      return <icons.Prolog />;
    case 'anaconda':
      return <icons.Anaconda />;
    default:
      return <div />;
  }
};

export default Icon;
